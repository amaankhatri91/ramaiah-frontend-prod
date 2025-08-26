"use client";

import {
  getOurExpertsPage,
  OurExpertsData,
} from "@/componets/ServiceData/OurExperts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const OurExperts = ({ slug  }) => {
  const experts = OurExpertsData.find((b) => b.slug === slug);

  if (!experts || !experts.Doctor || experts.Doctor.length === 0) {
    return null;
  }

  const [groupedExperts, setGroupedExperts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const chunkSize = width < 640 ? 1 : width < 1024 ? 2 : 4;
      setGroupedExperts(chunkArray(experts.Doctor, chunkSize));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [experts]);

  return (
    <div className="container bg-white select-none pt-[30px] sm:pt-[40px] xl:pt-[60px]">
      <div className="mb-6">
        <h2 className="text-[22px] sm:text-[25px] xl:text-[32px] font-bold text-[#3D3D3D]">
          Our <span className="Text-color2">Experts</span>
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#3A3A3A] mt-2 font-normal">
          We believe in a holistic approach, and our goal is to create a haven
          that spreads compassion, warmth, congeniality & care not merely treat
          ailments.
        </p>
      </div>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop
        key={groupedExperts.length}
      >
        {groupedExperts.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-[45px] items-stretch">
              {group.map((expert, i) => (
                <div
                  key={`${expert.name}-${i}`}
                  className="relative mt-[60px] flex flex-col items-center justify-start"
                >
                  <div className="bg-white w-full rounded-[32px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] p-6 pt-[110px] text-center flex flex-col h-full">
                    {/* Image */}
                    <div className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image
                        src={expert.image}
                        alt={expert.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1">
                      <div className="min-[640px]:min-h-[75px]">
                      <h3 className="text-[16px] font-bold text-[#3D3D3D] mt-2">
                        {expert.name}
                      </h3>
                      <p className="text-[14px] text-[#77817D] font-medium mt-1">
                        {expert.specialty}
                      </p>
                      </div>

                      <div className="mt-3 space-y-1 text-[#3A3A3A] text-[13px] font-medium">
                        {/* <p>{expert.designation}</p> */}
                        <p>{expert.qualification}</p>
                      </div>

                      {/* Read More */}
                      <div className="mt-auto pt-5">
                        <Link
                          href="#"
                          className="relative bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] bg-clip-text text-transparent text-[14px] font-semibold flex items-center justify-center"
                        >
                          <div className="relative flex flex-col items-start">
                            <span className="Text-color2">Read More</span>
                            <div className="w-full h-[1px] bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] absolute bottom-0" />
                          </div>
                          <div className="ml-1">
                            <Image
                              src="/assets/up-arrow.svg"
                              alt="up-arrow"
                              width={18}
                              height={18}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurExperts;
