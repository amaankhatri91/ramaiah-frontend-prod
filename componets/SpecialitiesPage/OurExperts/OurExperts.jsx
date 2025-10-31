"use client";

// import {
//   getOurExpertsPage,
//   OurExpertsData,
// } from "@/componets/ServiceData/OurExperts";
// "use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookAppointmentModal from "@/componets/CommonComponets/BookAppointmentModal";

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

  if (
    !slug ||
    !slug?.content_blocks?.[0]?.doctorSpecialties?.length
  ) {
    return null;
  }

  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const size = width < 640 ? 1 : width < 1024 ? 2 : 4;
      setChunkSize(size);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slug]);
  

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="container bg-white select-none pt-[10px]">
      <div className="mb-6">
        <h2 className="text-[22px] sm:text-[25px] md:text-[32px] xl:text-[48px] font-bold text-[#3D3D3D]">
          Our <span className="Text-color2">Experts</span>
        </h2>
        {/* Each section below represents a specialty with its experts */}
      </div>

      {slug?.content_blocks[0]?.doctorSpecialties?.map((section, sectionIndex) => {
        const doctorGroups = chunkArray(section.doctors || [], chunkSize);
        return (
          <div key={sectionIndex} className="mb-10">
            <div className="mb-4">
              <h3 className="text-[18px] sm:text-[20px] xl:text-[24px] font-bold text-[#3D3D3D]">
                {section.specialty?.name}
              </h3>
            </div>
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop
              key={`${sectionIndex}-${doctorGroups.length}-${chunkSize}`}
            >
              {doctorGroups.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-[45px] items-stretch">
                    {group.map((expert, i) => (
                      <div
                        key={`${expert.first_name}-${expert.last_name}-${i}`}
                        className="relative mt-[60px] flex flex-col items-center justify-start"
                      >
                        <div className="bg-white w-full rounded-[32px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] p-6 pt-[110px] text-center flex flex-col h-full">
                          <div className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full border-4 border-white shadow-md overflow-hidden">
                            <Image
                              src={expert.profile_image || "/assets/default-doctor.png"}
                              alt={`${expert.first_name} ${expert.last_name}`}
                              width={100}
                              height={100}
                              className="object-cover w-full h-full rounded-full"
                            />
                          </div>

                          <div className="flex flex-col flex-1">
                            <div className="min-[640px]:min-h-[75px]">
                              <h3 className="text-[16px] font-bold text-[#3D3D3D] mt-2">
                                {expert.first_name} {expert.last_name}
                              </h3>
                              <p className="text-[14px] text-[#77817D] font-medium mt-1">
                                {expert.specializations}
                              </p>
                            </div>

                            <div className="mt-3 space-y-1 text-[#3A3A3A] text-[13px] font-medium">
                              <p>{expert.designation}</p>
                            </div>

                            <div className="cursor-pointer mt-auto pt-5 flex items-center justify-between gap-8">
                              <button
                                type="button"
                                onClick={() => setIsAppointmentOpen(true)}
                                className="cursor-pointer relative bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] bg-clip-text text-transparent text-[14px] font-semibold"
                              >
                                <div className="relative inline-flex flex-col items-start cursor-pointer">
                                  <span className="cursor-pointer Text-color2">Book Appointment</span>
                                  <div className="w-full h-[1px] bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] absolute bottom-0" />
                                </div>
                              </button>
                              <Link
                                href={`/doctor-detail/${expert.id}`}
                                className="cursor-pointer relative bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] bg-clip-text text-transparent text-[14px] font-semibold"
                              >
                                <div className="relative inline-flex flex-col items-start">
                                  <span className="Text-color2">View Profile</span>
                                  <div className="w-full h-[1px] bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] absolute bottom-0" />
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
      })}
      <BookAppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
    </div>
  );
};

export default OurExperts;
