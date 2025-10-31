"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavigationMenu } from '@/lib/slices/navigationSlice';
import { notFound } from 'next/navigation';
import Head from 'next/head';

// Import OurSpecialistPage component
import OurSpecialistPage from '@/componets/OurSpecialist/OurSpecialistPage/OurSpecialistPage';
import SpecialitiesHeroSection from '@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection';
import Overview from '@/componets/SpecialitiesPage/Overview/Overview';
import FacilitiesServices from '@/componets/SpecialitiesPage/FacilitiesServices/FacilitiesServices';
import OurTreatment from '@/componets/SpecialitiesPage/OurTreatment/OurTreatment';
import OurExperts from '@/componets/SpecialitiesPage/OurExperts/OurExperts';
import { SpecialitiesServicesPart } from '../SpecialitiesPage/SpecialitiesServicesPart/SpecialitiesServicesPart';
import InternationalPatientServices from '../InternationalPatientsPage/InternationalPatientServices/InternationalPatientServices';
import WhyChoose from '../InternationalPatientsPage/WhyChoose/WhyChoose';
import ExclusiveServices from '../InternationalPatientsPage/ExclusiveServices/ExclusiveServices';
import PreDeparture from '../InternationalPatientsPage/Pre-Departure/PreDeparture';
import TravelAccommodation from '../InternationalPatientsPage/Travel&Accommodation/TravelAccommodation';
import ContactDetails from '../InternationalPatientsPage/ContactDetails/ContactDetails';
import RamaiahMemorial from '../HomePage/RamaiahMemorial/RamaiahMemorial';

const DynamicPageRenderer = ({ slug, child, grandchild }) => {
  const dispatch = useDispatch();
  const { data: navigationData, loading, error } = useSelector((state) => state.navigation);
  const [pageData, setPageData] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    dispatch(fetchNavigationMenu());
  }, [dispatch]);

  useEffect(() => {
    if (navigationData?.data?.[0]?.items?.[2]?.children) {
      const findPageData = (items, targetSlug, targetChild = null, targetGrandchild = null) => {
        for (const item of items) {
          // Check if this is the target slug
          if (item.slug === targetSlug || item.page?.slug === targetSlug) {
            if (!targetChild) {
              return item;
            }
            
            // Look for child
            if (item.children) {
              for (const childItem of item.children) {
                if (childItem.slug === targetChild || childItem.page?.slug === targetChild) {
                  if (!targetGrandchild) {
                    return { ...childItem, parent: item };
                  }
                  
                  // Look for grandchild
                  if (childItem.children) {
                    for (const grandchildItem of childItem.children) {
                      if (grandchildItem.slug === targetGrandchild || grandchildItem.page?.slug === targetGrandchild) {
                        return { ...grandchildItem, parent: childItem, grandparent: item };
                      }
                    }
                  }
                }
              }
            }
          }
        }
        return null;
      };

      // Search through all navigation items (not just index 2)
      let data = null;
      for (const navItem of navigationData.data[0].items[2]?.children || []) {
        if (navItem.children) {
          data = findPageData(navItem.children, slug, child, grandchild);
          if (data) break;
        }
      }
      
      setPageData(data);
      
      // Make API call if pageData has page.id
      if (data && data.page && data.page.id) {
        fetchSectionData(data.page.id);
      }
    }
  }, [navigationData, slug, child, grandchild]);

    // useEffect for International Patient Care pages
    useEffect(() => {
      if (slug === 'international-patient-care' && navigationData?.data?.[0]?.items) {
        const findPageData = (items, targetSlug, targetChild = null, targetGrandchild = null) => {
          for (const item of items) {
            // Check if this is the target slug
            if (item.slug === targetSlug || item.page?.slug === targetSlug) {
              if (!targetChild) {
                return item;
              }
              
              // Look for child
              if (item.children) {
                for (const childItem of item.children) {
                  if (childItem.slug === targetChild || childItem.page?.slug === targetChild) {
                    if (!targetGrandchild) {
                      return { ...childItem, parent: item };
                    }
                    
                    // Look for grandchild
                    if (childItem.children) {
                      for (const grandchildItem of childItem.children) {
                        if (grandchildItem.slug === targetGrandchild || grandchildItem.page?.slug === targetGrandchild) {
                          return { ...grandchildItem, parent: childItem, grandparent: item };
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          return null;
        };
  
        // Search through main navigation items for International Patient Care
        let data = null;
        data = findPageData(navigationData.data[0].items, slug, child, grandchild);
        
        setPageData(data);
        
        // Make API call if pageData has page.id
        if (data && data.page && data.page.id) {
          fetchSectionData(data.page.id);
        }
      }
    }, [navigationData, slug, child, grandchild]);

  // Function to fetch section data using page.id
  const fetchSectionData = async (pageId) => {
    setApiLoading(true);
    setApiError(null);
    
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      
      if (!apiBaseUrl) {
        throw new Error('NEXT_PUBLIC_API_BASE_URL environment variable is not set');
      }
      
      const apiUrl = `${apiBaseUrl}/home/sections/${pageId}`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      setSectionData(data);
    } catch (error) {
      console.error('Error fetching section data:', error);
      setApiError(error.message);
    } finally {
      setApiLoading(false);
    }
  };

  if (loading || apiLoading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        {apiLoading && (
          <div className="mt-4 text-center">
            <p className="text-[#3D3D3D]">Loading section data...</p>
          </div>
        )}
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Page Not Found</h1>
        <p className="text-[#3D3D3D]">The requested page could not be found.</p>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Error Loading Content</h1>
        <p className="text-[#3D3D3D]">Failed to load section data: {apiError}</p>
      </div>
    );
  }

  // Render appropriate component based on the slug and hierarchy
  const renderPageContent = () => {
    // Handle our-specialist pages
    if (slug === 'our-specialist') {
      if (!child) {
        // Main our-specialist page
        return <OurSpecialistPage 
          params={{ slug }} 
          pageData={pageData}
          sectionData={sectionData}
          pageId={pageData?.page?.id}
        />;
      } else {
        // Nested our-specialist pages (if any)
        return <OurSpecialistPage 
          params={{ slug: child }} 
          pageData={pageData}
          sectionData={sectionData}
          pageId={pageData?.page?.id}
        />;
      }
    }

    // Handle centers-of-excellence pages
    if (slug === 'centers-of-excellence') {
      return (
        <div className="container py-8">
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
            {pageData?.title || 'Centers of Excellence'}
          </h1>
          {sectionData && (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: sectionData.content || '' }} />
            </div>
          )}
          {!sectionData && (
            <p className="text-[#3D3D3D]">Content for Centers of Excellence will be loaded here.</p>
          )}
        </div>
      );
    }

    // Handle other-super-specialties pages
    if (slug === 'other-super-specialties') {
      return (
        <div className="container py-8">
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
            {pageData?.title || 'Other Super Specialties'}
          </h1>
          {sectionData && (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: sectionData.content || '' }} />
            </div>
          )}
          {!sectionData && (
            <p className="text-[#3D3D3D]">Content for Other Super Specialties will be loaded here.</p>
          )}
        </div>
      );
    }

    // Handle broad-specialties pages
    if (slug === 'broad-specialties') {
      return (
        <div className="container py-8">
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
            {pageData?.title || 'Broad Specialties'}
          </h1>
          {sectionData && (
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: sectionData.content || '' }} />
            </div>
          )}
          {!sectionData && (
            <p className="text-[#3D3D3D]">Content for Broad Specialties will be loaded here.</p>
          )}
        </div>
      );
    }
    // Handle institute pages (like ramaiah-institute-oncosciences)
    if (pageData?.page?.id) {
      return (
        <div>
{
            sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title.toLowerCase() === "hero" && (
                        <div>
                           <SpecialitiesHeroSection slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
          }
          {/* international patient care pages */}
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
                  {sectionData?.data?.map((item) => (
               <div key={item.id}>
                 {
                     item.title === "International Patient Service" && (
                         <div>
                            <InternationalPatientServices slug={item} />
                        </div>
                    )
                 }
                
               </div>
             ))}
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Why Choose RMH" && (
                  <div>
                    <WhyChoose slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Exclusive Services For Our International Patients" && (
                  <div>
                    <ExclusiveServices slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Pre-Departure Services" && (
                  <div>
                    <PreDeparture slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Travel & Accommodation" && (
                  <div>
                    <TravelAccommodation slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Contact Details" && (
                  <div>
                    <ContactDetails slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='min-[1200px]:mt-[20px] min-[800px]:mt-[10px] mt-[5px]'>
            {sectionData?.data?.map((item) => (
              <div key={item.id}>
                {item.title === "Ramaiah Memorial Hospital, Bengaluru" && (
                  <div>
                    <RamaiahMemorial slug={item} />
                  </div>
                )}
              </div>
            ))}
          </div>
        <div className="">
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
          {
            sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title.toLowerCase() === "overview"   && (
                        <div>
                           <Overview slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
          }
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
          {
            sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title === "Our Foucs Areas" && (
                        <div>
                           <SpecialitiesServicesPart slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
          }
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {
                sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title === "Our Specialities" && (
                        <div>
                           <FacilitiesServices slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
            }
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {
                sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title === "Service & Facilities" && (
                        <div>
                           <OurTreatment slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
            }
          </div>
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
            {
                sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title === "Our Experts" && (
                        <div>
                           <OurExperts slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
            }
          </div>
          
        </div>
        </div>
      );
    }

    // Handle international-patient-care pages
    // if (pageData?.slug === 'international-patient-care' && pageData?.page?.id) {
    //   return (
    //     <div>
    //       {sectionData?.data?.map((item) => (
    //           <div key={item.id}>
    //             {
    //                 item.title === "Hero" && (
    //                     <div>
    //                        {/* <SpecialitiesHeroSection slug={item} /> */}
    //                     </div>
    //                 )
    //             }
                
    //           </div>
    //         ))}
    //         <div>
    //         {sectionData?.data?.map((item) => (
    //           <div key={item.id}>
    //             {
    //                 item.title === "International Patient Service" && (
    //                     <div>
    //                        <InternationalPatientServices slug={item} />
    //                     </div>
    //                 )
    //             }
                
    //           </div>
    //         ))}
    //         </div>
    //     </div>
    //   )
    // }

    // For all other routes, return not found
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Page Not Found</h1>
        <p className="text-[#3D3D3D]">The requested page could not be found in the navigation structure.</p>
      </div>
    );
  };

  // Generate structured data for SEO
  const generateStructuredData = () => {
    if (!pageData) return null;

    const baseUrl = "https://msrmh.com";
    let canonical = `/${slug}`;
    if (child) canonical += `/${child}`;
    if (grandchild) canonical += `/${grandchild}`;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Ramaiah Memorial Hospital",
      "url": `${baseUrl}${canonical}`,
      "description": pageData.page?.description || pageData.description || `Medical services at Ramaiah Memorial Hospital`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "telephone": "+91-80-2360-8888",
      "email": "info@msrmh.com",
      "sameAs": [
        "https://www.facebook.com/MSRamaiahMemorialHospital",
        "https://twitter.com/MSRMHOfficial"
      ]
    };

    // Add specific structured data based on page type
    if (slug === 'our-specialist') {
      structuredData["@type"] = "MedicalSpecialty";
      structuredData.name = pageData.title || pageData.page?.title || "Our Specialists";
    } else if (slug === 'centers-of-excellence') {
      structuredData["@type"] = "MedicalOrganization";
      structuredData.name = "Centers of Excellence - Ramaiah Memorial Hospital";
    } else if (slug === 'international-patient-care') {
      structuredData["@type"] = "MedicalOrganization";
      structuredData.name = "International Patient Care - Ramaiah Memorial Hospital";
    }

    return structuredData;
  };

  const structuredData = generateStructuredData();

  return (
    <div>
      {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        </Head>
      )}
      {renderPageContent()}
    </div>
  );
};

export default DynamicPageRenderer;
