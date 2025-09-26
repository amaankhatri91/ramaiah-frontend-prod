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

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  console.log("imageUrl=>>>>>>>>>>>>>>", `${imageUrl}${headerData.logo}`);
  // Use API certifications if available, otherwise use default
  const accreditations = headerData.certifications.length > 0 
    ? headerData.certifications.map((cert, index) => {
        const settingKey = `certification_${['one', 'two', 'three', 'four', 'five', 'six'][index]}`;
        return {
          img: cert,
          alt: getAltText(settingKey)
        };
      })
    : defaultAccreditations;

  console.log("headerData", headerData);

  return (
    <div>
      <header
        className="max-[1024px]:hidden"
        style={{
          background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
        }}
      >
        <div className="container flex justify-between items-center">
          <div className="">
            <Link href="/">
              <Image
                src={`${imageUrl}${headerData.logo}`}
                alt={getAltText("site_logo")}
                className="min-[1200px]:w-[170px] h-[70px]"
                width={197}
                height={70}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {accreditations.map((item, index) => (
              <Image
                key={index}
                src={`${imageUrl}${item.img}`}
                alt={item.alt}
                width={64}
                height={64}
                className="w-16 h-16"
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
