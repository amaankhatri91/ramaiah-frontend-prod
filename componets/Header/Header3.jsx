"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";

// Default fallback data - this ensures consistent rendering
const defaultHeader3Data = {
  logo: "/assets/logo.svg",
  siteName: "Ramaiah Memorial Hospital",
  siteTagline: "#LifeGetsBetter",
  certifications: []
};

const Header3 = () => {
  const { siteSettings, dispatch } = useServices();
  const [isClient, setIsClient] = useState(false);

  // Track client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch site settings on component mount
  useEffect(() => {
    if (!siteSettings) {
      dispatch(fetchSiteSettings());
    }
  }, [siteSettings, dispatch]);

  // Use default data during SSR and initial client render to prevent hydration mismatch
  // Only use API data after client-side hydration is complete
  const headerData = (isClient && siteSettings?.header3) ? siteSettings.header3 : defaultHeader3Data;
  
  // Validate and sanitize URLs to prevent "Invalid URL" errors
  const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    try {
      // For relative URLs (starting with /), they are valid
      if (url.startsWith('/')) return true;
      // For absolute URLs, validate them
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  
  // Ensure logo URL is valid
  const safeLogoUrl = isValidUrl(headerData.logo) ? headerData.logo : defaultHeader3Data.logo;
  
  // Get dynamic alt text from API settings
  const getAltText = (settingKey) => {
    if (isClient && siteSettings?.rawSettings) {
      const setting = siteSettings.rawSettings.find(s => s.setting_key === settingKey);
      return setting ? setting.setting_key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Image";
    }
    return "Image";
  };

  // Default accreditations as fallback
  const defaultAccreditations = [
    { img: "/assets/joint-comission.svg", alt: "Joint Commission International" },
    { img: "/assets/AmericanHeartAssociation.svg", alt: "American Heart Association" },
    { img: "/assets/AmericanHeartAssociation.svg", alt: "American Stroke Association" },
    { img: "/assets/NABH.svg", alt: "NABH" },
    { img: "/assets/rahiyaccordiongreen.svg", alt: "NABH" },
    { img: "/assets/mcseventwo.svg", alt: "NABL" },
  ];

  // Use API certifications if available, otherwise use default
  const accreditations = headerData.certifications.length > 0 
    ? headerData.certifications.map((cert, index) => {
        const settingKey = `certification_${['one', 'two', 'three', 'four', 'five', 'six'][index]}`;
        // Validate certification URL and fallback to default if invalid
        const safeCertUrl = isValidUrl(cert) ? cert : defaultAccreditations[index]?.img || "/assets/logo.svg";
        return {
          img: safeCertUrl,
          alt: getAltText(settingKey)
        };
      })
    : defaultAccreditations;

  // Debug logging for troubleshooting (after all variables are declared)
  useEffect(() => {
    if (isClient && siteSettings) {
      console.log('Header3 - siteSettings:', siteSettings);
      console.log('Header3 - headerData:', headerData);
      console.log('Header3 - safeLogoUrl:', safeLogoUrl);
      console.log('Header3 - accreditations:', accreditations);
    }
  }, [isClient, siteSettings, headerData, safeLogoUrl, accreditations]);

  return (
    <div>
      <header
        className="max-[1024px]:hidden py-0.5"
        style={{
          background: "linear-gradient(90deg, #F3DDDA 0%, #E7F0FE 100%)",
        }}
      >
        <div className="container flex justify-between items-center !pt-[2px]">
          <div className="">
            <Link href="/">
              <Image
                src={safeLogoUrl}
                alt={getAltText("site_logo")}
                className="min-[1200px]:w-[199px] h-[70px]"
                width={197}
                height={70}
                onError={(e) => {
                  console.error(`Failed to load logo: ${safeLogoUrl}`, e);
                  // Fallback to default logo on error
                  e.target.src = "/assets/logo.svg";
                }}
              />
            </Link>
          </div>
          <div className="flex items-center min-[1200px]:gap-5 gap-3">
            {accreditations.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                alt={item.alt}
                width={70}
                height={70}
                className={`${index === 1 || index === 2 ? 'h-20 min-[1200px]:w-20 w-16' : 'h-16 min-[1200px]:w-16 w-16'}`}
                onError={(e) => {
                  console.error(`Failed to load image: ${item.img}`, e);
                  // Fallback to default image on error
                  e.target.src = "/assets/logo.svg";
                }}
              />
            ))}
          </div>
          <div>
            <h2 className="min-[1200px]:text-[42px] text-[30px] font-bold Text-color2">{headerData.siteTagline}</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header3;
