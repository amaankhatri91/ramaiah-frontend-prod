"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";

const Header1 = () => {
  const { siteSettings, loading, dispatch } = useServices();

  // Fetch site settings on component mount
  useEffect(() => {
    if (!siteSettings) {
      dispatch(fetchSiteSettings());
    }
  }, [siteSettings, dispatch]);

  // Get header1 data with fallbacks
  const headerData = siteSettings?.header1 || {
    generalEnquiries: { label: "General Enquiries :", number: "+91 80 6215 3300" },
    emergencyNumber: { label: "Emergency Number :", number: "+91 80 6215 3400" },
    preBookAppointments: { label: "Pre-Book Your Appointments :", number: "1800 123 1133" },
    affiliationImage: "/assets/affilliation.svg"
  };

  
  
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <header
      className="max-[1024px]:hidden"
      style={{
        background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 min-[1024px]:grid-cols-[45%_55%] min-[1260px]:grid-cols-[45%_55%] items-center">
          {/* Grid1 */}
          <div className="min-[720px]:flex enquiries-number">
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="min-[910px]:py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[12px] font-manrope text-[10px] text-[#3D3D3D] font-semibold">
                  {headerData.generalEnquiries.label}
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  {headerData.generalEnquiries.number}
                </p>
              </div>
            </div>
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-semibold mr-[6px]">
                  {headerData.emergencyNumber.label}
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  {headerData.emergencyNumber.number}
                </p>
              </div>
            </div>
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px]">
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-semibold">
                  {headerData.preBookAppointments.label}
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold">
                  {headerData.preBookAppointments.number}
                </p>
              </div>
            </div>
          </div>

          {/* Grid3 */}
          <div className="flex min-[910px]:justify-between justify-center lg:justify-end">
            <div className="flex items-center">
              <Image
                src={`${imageUrl}${headerData.affiliationImage}`}
                className="max-[1337px]:w-[200px]"
                alt="affiliation"
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
