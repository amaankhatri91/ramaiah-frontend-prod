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
import { sizeMap, validTags } from "@/lib/utils";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const OurExperts = ({ slug }) => {
  if (!slug || !slug?.content_blocks?.[0]?.doctorSpecialties?.length) {
    return null;
  }

  console.log(slug, "Can We Verify this");

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
        {(() => {
          const textBlock =
            slug?.content_blocks?.find((b) => b?.block_type === "text") ||
            slug?.content_blocks?.[0];
          const rawTag =
            textBlock?.field_tag?.toString()?.toLowerCase()?.trim() || "h3";
          const Tag = validTags?.includes(rawTag) ? rawTag : "h3";
          const sizeClasses = sizeMap[Tag] || sizeMap.h3;
          const baseClasses = "font-bold text-[#3D3D3D]";
          const title = (
            textBlock?.title ||
            slug?.title ||
            "Our Experts"
          ).trim();
          const parts = title.split(/\s+/);
          const first = parts.shift() || "";
          const rest = parts.join(" ");
          return (
            <Tag className={`${sizeClasses} ${baseClasses}`}>
              {rest ? (
                <>
                  <span>{first}</span>{" "}
                  <span className="Text-color2">{rest}</span>
                </>
              ) : (
                <span className="Text-color2">{first}</span>
              )}
            </Tag>
          );
        })()}
      </div>
      {slug?.content_blocks[0]?.doctorSpecialties?.map(
        (section, sectionIndex) => {
          const doctorGroups = chunkArray(section.doctors || [], chunkSize);
          return (
            <div key={sectionIndex} className="mb-10">
              <div className="mb-4">
                {(() => {
                  const rawTag =
                    section?.specialty?.field_tag
                      ?.toString()
                      ?.toLowerCase()
                      ?.trim() || "span";
                  const Tag = validTags?.includes(rawTag) ? rawTag : "span";
                  const sizeClasses = sizeMap[Tag] || sizeMap.span;
                  const baseClasses = "font-bold text-[#3D3D3D]";
                  const title = section?.specialty?.name || "";
                  return (
                    <Tag className={`${sizeClasses} ${baseClasses}`}>
                      {title}
                    </Tag>
                  );
                })()}
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
                                src={
                                  expert.profile_image ||
                                  "/assets/default-doctor.png"
                                }
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
                                    <span className="cursor-pointer Text-color2">
                                      Book Appointment
                                    </span>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] absolute bottom-0" />
                                  </div>
                                </button>
                                <Link
                                  href={`/doctor-detail/${expert.id}`}
                                  className="cursor-pointer relative bg-gradient-to-r from-[#00ADEF] to-[#D60F8C] bg-clip-text text-transparent text-[14px] font-semibold"
                                >
                                  <div className="relative inline-flex flex-col items-start">
                                    <span className="Text-color2">
                                      View Profile
                                    </span>
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
        }
      )}
      <BookAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
};

export default OurExperts;
