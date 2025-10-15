"use client";

import { specialties } from "@/componets/ServiceData/SpecialtiesHeroData";
import Image from "next/image";
import React from "react";

const SpecialitiesHeroSection = ({ slug }) => {
  if (!slug?.content_blocks?.length) return null;
  return (
    <div className="flex flex-col gap-16">
      <div className="relative">
        <div
          style={{ backgroundImage: `url('${slug?.content_blocks?.[2]?.media_files?.[0]?.media_file?.file_url}')` }}
          className="bg-no-repeat bg-cover bg-center relative z-0"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-85 z-0"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full container pb-[50px] pt-[25px]">
            <div className="flex items-center">
              <div className="min-[1200px]:p-6 rounded-lg">
                <h2 className="min-[1480px]:text-[56px] min-[1200px]:text-[35px] min-[800px]:text-[26px] text-[22px] font-bold Text-color2">
                  {slug?.content_blocks[0]?.title}
                </h2>
                {/* <button className="mt-5 text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
                  Book Appointment
                </button> */}
              </div>
            </div>

            <div className="rounded-[48px] flex justify-end">
              <Image
                src={slug?.content_blocks?.[1]?.media_files?.[0]?.media_file?.file_url}
                alt={slug?.content_blocks?.[1]?.media_files?.[0]?.media_file?.filename}
                width={530}
                height={632}
                className=" min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[400px] md:w-[530px] border-[15px] border-[#EFEFEF] object-cover rounded-[48px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialitiesHeroSection;
