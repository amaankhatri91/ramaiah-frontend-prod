"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFooter } from "../../lib/hooks";
import { fetchFooterData } from "../../lib/slices/footerSlice";


// Helper function to get content by title from a category
const getContentByTitle = (contents, title) => {
  // console.log("contents>>>>>>",contents)
  // console.log("title>>>>>>",title)
  return contents?.find(content => content.title === title);
};

// Helper function to get full image URL
const getImageUrl = (url) => {
  if (!url) return null;
  // If URL starts with http, it's already a full URL
  if (url.startsWith('http')) return url;
  // Return the URL as is
  return url;
};

// Helper function to get all social media links
const getSocialLinks = (contents) => {
  if (!contents || !Array.isArray(contents)) return [];
  
  const socialTitles = ['facebook', 'instagram', 'linkedin', 'x social icon', 'youtube'];
  return socialTitles.map(title => {
    const content = getContentByTitle(contents, title);
    // console.log("content>>>>>>",content)
    return content ? {
      title: title,
      url: content.url,
      alt: title
    } : null;
  }).filter(Boolean);
};

// Helper function to render content based on type
const renderContent = (content, index) => {
  if (!content) return null;

  // If it has a URL (image), render as image
  if (content.url) {
    const imageUrl = getImageUrl(content.url);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt={content.title || 'Footer image'}
        width={50}
        height={50}
        className="h-[24px] w-[24px]"
      />
    );
  }

  // If it has content (text), render as text
  if (content.content) {
    // Handle special cases for contact info
    if (content.title === 'email') {
      return (
        <a key={index} href={`mailto:${content.content}`} className="hover:no-underline">
          {content.content}
        </a>
      );
    }
    
    if (content.title === 'mobile') {
      return (
        <a key={index} href={`tel:${content.content}`} className="hover:no-underline">
          {content.content}
        </a>
      );
    }

    // Handle links with slugs
    if (content.slug) {
      return (
        <Link key={index} href={`/${content.slug}`} className="hover:no-underline flex items-center gap-1">
          <span className="text-lg">›</span> {content.content}
        </Link>
      );
    }

    // Regular text content
    return (
      <span key={index} className="flex items-center gap-1">
        <span className="text-lg">›</span> {content.content}
      </span>
    );
  }

  return null;
};

const Footer = () => {
  const { footerData, loading, error, dispatch } = useFooter();

  useEffect(() => {
    // Fetch footer data when component mounts
    dispatch(fetchFooterData());
  }, [dispatch]);

  // Log the API data to console
  useEffect(() => {
    if (footerData) {
      console.log('Footer API Data:', footerData);
      console.log('Footer API Data Structure:', JSON.stringify(footerData, null, 2));
    }
  }, [footerData]);

  // Log loading and error states
  useEffect(() => {
    if (loading) {
      console.log('Footer API Loading...');
    }
    if (error) {
      console.error('Footer API Error:', error);
    }
  }, [loading, error]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
        <div className="w-full container text-white pt-10 pb-6 rounded-t-[40px] relative mt-10">
          <div className="flex justify-center items-center h-32">
            <div className="text-lg">Loading footer...</div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
        <div className="w-full container text-white pt-10 pb-6 rounded-t-[40px] relative mt-10">
          <div className="flex justify-center items-center h-32">
            <div className="text-lg text-red-400">Error loading footer: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  // If no data, show fallback
  if (!footerData?.data) {
    return (
      <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
        <div className="w-full container text-white pt-10 pb-6 rounded-t-[40px] relative mt-10">
          <div className="flex justify-center items-center h-32">
            <div className="text-lg">No footer data available</div>
          </div>
        </div>
      </div>
    );
  }

  // Get categories from API data
  const categories = footerData.data;
  
  // Find specific categories
  const contactInfoCategory = categories.find(cat => cat.name === "Contact Info & Social Links");
  const centersCategory = categories.find(cat => cat.name === "RMH Centers of Excellence");
  const quickLinksCategory = categories.find(cat => cat.name === "Quick Links");
  const clinicalServicesCategory = categories.find(cat => cat.name === "Clinical Services");
  const diagnosticServicesCategory = categories.find(cat => cat.name === "Diagnostic Services");
  const laboratoryServicesCategory = categories.find(cat => cat.name === "Laboratory Services");
  const transfusionServicesCategory = categories.find(cat => cat.name === "Transfusion Services");
  const alliedServicesCategory = categories.find(cat => cat.name === "Allied Clinical Services");
  const supportServicesCategory = categories.find(cat => cat.name === "Support Services");

  // Get contact info
  const logoContent = getContentByTitle(contactInfoCategory?.contents, 'logo');
  const addressContent = getContentByTitle(contactInfoCategory?.contents, 'address');
  const emailContent = getContentByTitle(contactInfoCategory?.contents, 'email');
  const mobileContent = getContentByTitle(contactInfoCategory?.contents, 'mobile');
  const socialLinks = getSocialLinks(contactInfoCategory?.contents);

  return (
    <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(60,4,34,0)_0%,#1F0011_100%)] opacity-75 z-0"></div>
      <footer className="w-full container text-white pt-10 pb-6 rounded-t-[40px] relative mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-1 relative z-10">
          
          {/* Column 1: Contact Info & Centers of Excellence */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-2 cursor-pointer">
              {logoContent?.url ? (
                <Image
                  src={getImageUrl(logoContent.url)}
                  alt="Ramaiah Logo"
                  width={204}
                  height={85}
                  className="w-[204px] h-[80px]"
                />
              ) : (
                <Image
                  src="/assets/footer.png"
                  alt="Ramaiah Logo"
                  width={204}
                  height={85}
                  className="w-[204px] h-[80px]"
                />
              )}
            </div>
            
            {/* Address */}
            <div className="text-white font-medium text-lg">
           
              {addressContent?.content || "New BEL Road, M S Ramaiah Nagar, MSRIT Post, Bengaluru, Karnataka 560054"}
            </div>
            
          
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/envelope1.svg"
                alt="email"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              {emailContent?.content ? (
                <a href={`mailto:${emailContent.content}`} className="hover:no-underline text-white">
                  {emailContent.content}
                </a>
              ) : (
                <a href="mailto:contact@msrmh.com" className="hover:no-underline text-white">
                  contact@msrmh.com
                </a>
              )}
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/phone-call1.svg"
                alt="phone"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              {mobileContent?.content ? (
                <a href={`tel:${mobileContent.content}`} className="hover:no-underline text-white">
                  {mobileContent.content}
                </a>
              ) : (
                <a href="tel:+918062153400" className="hover:no-underline text-white">
                  +91 80 6215 3400
                </a>
              )}
            </div>
            
            {/* Social Links */}
            {console.log("socialLinks>>>>>>",socialLinks)}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, i) => (
                
                <Link
                  key={i}
                  href={social.url}
                  aria-label={social.alt}
                  className="no-underline hover:no-underline"
                >
                  {console.log("social>>>>>>",social)}
                  <div className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={getImageUrl(social.url)}
                      alt={social.alt}
                      width={50}
                      height={50}
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Centers of Excellence */}
            {centersCategory?.contents && centersCategory.contents.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium text-lg mb-3 text-white">
                  {centersCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {centersCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links & Clinical Services */}
          <div className="flex flex-col gap-6">
            {/* Quick Links */}
            {quickLinksCategory?.contents && quickLinksCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {quickLinksCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {quickLinksCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clinical Services */}
            {clinicalServicesCategory?.contents && clinicalServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {clinicalServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {clinicalServicesCategory.contents.slice(0, 26).map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 3: Remaining Clinical Services & Diagnostic Services */}
          <div className="flex flex-col gap-6">
            {/* Remaining Clinical Services (after first 19) */}
            {clinicalServicesCategory?.contents && clinicalServicesCategory.contents.length > 26 && (
              <div>
                <ul className="space-y-2 text-sm font-medium">
                  {clinicalServicesCategory.contents.slice(26).map((content, i) => (
                    <li key={i + 26} className="text-white">
                      {renderContent(content, i + 26)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Diagnostic Services */}
            {diagnosticServicesCategory?.contents && diagnosticServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {diagnosticServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {diagnosticServicesCategory.contents.slice(0, 19).map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 4: Remaining Diagnostic Services, Laboratory, Transfusion, Allied & Support Services */}
          <div className="flex flex-col gap-6">
            {/* Remaining Diagnostic Services (after first 20) */}
            {diagnosticServicesCategory?.contents && diagnosticServicesCategory.contents.length > 19 && (
              <div>
                <ul className="space-y-2 text-sm font-medium">
                  {diagnosticServicesCategory.contents.slice(19).map((content, i) => (
                    <li key={i + 19} className="text-white">
                      {renderContent(content, i + 19)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Laboratory Services */}
            {laboratoryServicesCategory?.contents && laboratoryServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {laboratoryServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {laboratoryServicesCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Transfusion Services */}
            {transfusionServicesCategory?.contents && transfusionServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {transfusionServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {transfusionServicesCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Allied Clinical Services */}
            {alliedServicesCategory?.contents && alliedServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {alliedServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {alliedServicesCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Support Services */}
            {supportServicesCategory?.contents && supportServicesCategory.contents.length > 0 && (
              <div>
                <h3 className="font-medium text-lg mb-3 text-white">
                  {supportServicesCategory.name}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  {supportServicesCategory.contents.map((content, i) => (
                    <li key={i} className="text-white">
                      {renderContent(content, i)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
