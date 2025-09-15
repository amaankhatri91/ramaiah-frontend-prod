"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";

const Header3 = () => {
  const { siteSettings, dispatch } = useServices();

  // Fetch site settings on component mount
  useEffect(() => {
    if (!siteSettings) {
      dispatch(fetchSiteSettings());
    }
  }, [siteSettings, dispatch]);

  // Get header3 data with fallbacks
  const headerData = siteSettings?.header3 || {
    logo: "/assets/logo.svg",
    siteName: "Ramaiah Memorial Hospital",
    siteTagline: "#LifeGetsBetter",
    certifications: []
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

  const imageUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log("imageUrl", `${imageUrl}${headerData.logo}`);
  // Use API certifications if available, otherwise use default
  const accreditations = headerData.certifications.length > 0 
    ? headerData.certifications.map((cert, index) => ({
        img: cert,
        alt: `Certification ${index + 1}`
      }))
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
                alt="Ramaiah Memorial Hospital"
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
