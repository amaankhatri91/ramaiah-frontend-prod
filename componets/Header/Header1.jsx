"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";

// Default fallback data - this ensures consistent rendering
const defaultHeaderData = {
  generalEnquiries: { label: "General Enquiries :", number: "+91 80 6215 3300" },
  emergencyNumber: { label: "Emergency Number :", number: "+91 80 6215 3400" },
  preBookAppointments: { label: "Pre-Book Your Appointments :", number: "1800 123 1133" },
  affiliationImage: "/assets/affilliation.svg",
  affiliationAlt: "In affiliation with"
};

const Header1 = () => {
  const { siteSettings, loading, dispatch } = useServices();
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
  const headerData = (isClient && siteSettings?.header1) ? siteSettings.header1 : defaultHeaderData;
  
  // Get dynamic alt text from API settings
  const getAltText = (settingKey) => {
    if (isClient && siteSettings?.rawSettings) {
      const setting = siteSettings.rawSettings.find(s => s.setting_key === settingKey);
      return setting ? setting.setting_key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : defaultHeaderData.affiliationAlt;
    }
    return defaultHeaderData.affiliationAlt;
  };

  
  
  console.log(headerData.affiliationImage ,"imageUrlnew");
  

  return (
    <header
      className="max-[1024px]:hidden" 
      style={{
        background: "linear-gradient(267deg, rgba(0, 173, 239, 0.1) -49.54%, rgba(214, 15, 140, 0.1) 110.23%), #ffffff",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 min-[1024px]:grid-cols-[60%_40%] min-[1260px]:grid-cols-[60%_40%] items-center">
          {/* Grid1 */}
          <div className="min-[720px]:flex enquiries-number">
            <div className="xl:py-[16px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="min-[910px]:py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[14px] font-manrope text-[12px] text-[#3D3D3D] mr-[12px] font-bold">
                  {headerData.generalEnquiries.label}
                </p>
                <p className="min-[1260px]:text-[14px] text-[10px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  {headerData.generalEnquiries.number}
                </p>
              </div>
            </div>
            <div className="xl:py-[16px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[14px] text-[12px] text-[#3D3D3D] font-bold mr-[12px]">
                  {headerData.emergencyNumber.label}
                </p>
                <p className="min-[1260px]:text-[14px] text-[12px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  {headerData.emergencyNumber.number}
                </p>
              </div>
            </div>
            <div className="xl:py-[16px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px]">
                <p className="min-[1260px]:text-[14px] text-[12px] text-[#3D3D3D] font-bold">
                  {headerData.preBookAppointments.label}
                </p>
                <p className="min-[1260px]:text-[14px] text-[12px] text-[#3D3D3D] font-extrabold">
                  {headerData.preBookAppointments.number}
                </p>
              </div>
            </div>
          </div>

          {/* Grid3 */}
          <div className="flex min-[910px]:justify-between justify-center lg:justify-end">
            <div className="flex items-center">
              <Image
                src={headerData.affiliationImage}
                className="max-[1337px]:w-[200px]"
                alt={getAltText("in_affiliation_with")}
                width={290}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header1;
