"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavigationMenu } from '@/lib/slices/navigationSlice';
import { notFound } from 'next/navigation';

// Import OurSpecialistPage component
import OurSpecialistPage from '@/componets/OurSpecialist/OurSpecialistPage/OurSpecialistPage';
import SpecialitiesHeroSection from '@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection';
import Overview from '@/componets/SpecialitiesPage/Overview/Overview';
import FacilitiesServices from '@/componets/SpecialitiesPage/FacilitiesServices/FacilitiesServices';
import OurTreatment from '@/componets/SpecialitiesPage/OurTreatment/OurTreatment';
import OurExperts from '@/componets/SpecialitiesPage/OurExperts/OurExperts';

const DynamicPageRenderer = ({ slug, child, grandchild }) => {
  const dispatch = useDispatch();
  const { data: navigationData, loading, error } = useSelector((state) => state.navigation);
  const [pageData, setPageData] = useState(null);
  console.log("pageData",pageData)
  const [sectionData, setSectionData] = useState(null);
  console.log("sectionData",sectionData)
  const [apiLoading, setApiLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  console.log("navigationData?.data?.[0]?.items",navigationData?.data?.[0]?.items[2]?.children)

  useEffect(() => {
    dispatch(fetchNavigationMenu());
  }, [dispatch]);

  useEffect(() => {
    if (navigationData?.data?.[0]?.items[2]?.children) {
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
      for (const navItem of navigationData.data[0].items[2]?.children) {
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
      
      console.log('Making API call to:', apiUrl);
      
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
      console.log('API response data:', data);
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
                    item.title === "Hero" && (
                        <div>
                           <SpecialitiesHeroSection slug={item} />
                        </div>
                    )
                }
                
              </div>
            ))
          }
        <div className="">
          <div className='min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]'>
          {
            sectionData?.data?.map((item) => (
              <div key={item.id}>
                {
                    item.title === "Overview" && (
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

    // For all other routes, return not found
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Page Not Found</h1>
        <p className="text-[#3D3D3D]">The requested page could not be found in the navigation structure.</p>
      </div>
    );
  };

  return (
    <div>
      {renderPageContent()}
    </div>
  );
};

export default DynamicPageRenderer;
