"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Helper to chunk array
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const DoctorExpetsblog = ({ doctorEntry }) => {
  const slidesFromData = Array.isArray(doctorEntry?.doctor?.blogs)
    ? doctorEntry.doctor.blogs
    : null;

  const slides = slidesFromData || [
    // your slides here...
    {
      date: "01-05-2025",
      title:
        "Is your epilepsy not responding to multiple drugs? Then surgery may help you!",
      description:
        "Have you ever pondered what to do when seizures or fits, as we know them, are not controlled despite multiple medications? This article addresses some of such questions and raises awareness about the extent of the problem that exists today, the concept of drug-resistant epilepsy, how to get help in evaluating this problem with the help of your physician, and lastly, the minimally invasive surgical options available.",
      doctor:
        "Dr Shabari Girishan KV, Consultant & Functional Neurosurgeon – Department of Neurosurgery, Ramaiah Institute of Neurosciences, Ramaiah Memorial Hospital",
      link: "#",
    },
    {
      date: "02-05-2025",
      title: "How Brain Injuries Impact Memory, Mood, and Cognition",
      description:
        "Despite making up only around 2% of the human body, the brain oversees every bodily function[i]. Brain is the most complex organ in the human body which affects how we think, feel and act. Any injury to the brain, including from Traumatic Brain Injury (TBI) can affect physical function, thinking ability, behaviour, mental health, and more.",
      doctor:
        "Dr Sunil Furtado, Senior Consultant and Head of Department of Neurosurgery, Ramaiah Institute of Neurosciences, Ramaiah Memorial Hospital",
      link: "#",
    },
    {
      date: "03-05-2025",
      title: "How Brain Injuries Impact Memory, Mood, and Cognition",
      description:
        "Despite making up only around 2% of the human body, the brain oversees every bodily function[i]. Brain is the most complex organ in the human body which affects how we think, feel and act. Any injury to the brain, including from Traumatic Brain Injury (TBI) can affect physical function, thinking ability, behaviour, mental health, and more.",
      doctor:
        "Dr Sunil Furtado, Senior Consultant and Head of Department of Neurosurgery, Ramaiah Institute of Neurosciences, Ramaiah Memorial Hospital",
      link: "#",
    },
    {
      date: "04-05-2025",
      title:
        "Is your epilepsy not responding to multiple drugs? Then surgery may help you!",
      description:
        "Have you ever pondered what to do when seizures or fits, as we know them, are not controlled despite multiple medications? This article addresses some of such questions and raises awareness about the extent of the problem that exists today, the concept of drug-resistant epilepsy, how to get help in evaluating this problem with the help of your physician, and lastly, the minimally invasive surgical options available.",
      doctor:
        "Dr Shabari Girishan KV, Consultant & Functional Neurosurgeon – Department of Neurosurgery, Ramaiah Institute of Neurosciences, Ramaiah Memorial Hospital",
      link: "#",
    },
  ];

  const [groupedSlides, setGroupedSlides] = useState([]);

  // On mount and resize, update grouping size
  useEffect(() => {
    const updateGrouping = () => {
      const width = window.innerWidth;
      const groupSize = width < 768 ? 1 : 2; 
      setGroupedSlides(chunkArray(slides, groupSize));
    };

    updateGrouping();

    window.addEventListener("resize", updateGrouping);
    return () => window.removeEventListener("resize", updateGrouping);
  }, []);

  return (
    <div className="min-[1200px]:pt-[25px] pt-[0px] container select-none ">
      <h2 className="min-[1200px]:text-[35px] min-[800px]:text-[30px] text-[22px] text-[#3D3D3D] font-bold">
        Experts’ <span className="Text-color2">Blogs</span>
      </h2>

      <div className="w-full h-auto min-[1200px]mt-10 mt-5 ">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1} // Always 1 because each slide is already grouped
        >
          {groupedSlides.map((group, groupIndex) => (
            <SwiperSlide key={`group-${groupIndex}`}>
              <div className={`grid grid-cols-1 md:grid-cols-${group.length} gap-5 pb-[40px]`}>
                {group.map((slide, idx) => (
                  <div
                    key={`slide-${groupIndex}-${idx}`}
                    className="min-[800px]:h-[450px] h-[350px] overflow-hidden p-4 md:p-6 flex flex-col Background-color2 justify-between rounded-[30px] cursor-pointer"
                  >
                    <div className="flex items-center w-full">
                      <div>
                        <Image
                          src="/assets/celender.svg"
                          alt="calendar-icon"
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px]"
                        />
                      </div>
                      <p className="min-[1200px]:text-[19px] text-[15px] ml-[6px] text-[#77817D]">
                        {slide.date}
                      </p>
                    </div>

                    <h2 className="min-[1200px]:text-[24px] w-[80%] text-[18px] font-semibold min-[1200px]:mt-[16px] mt-[10px] line-clamp-2 overflow-hidden">
                      {slide.title}
                    </h2>
                    <p className="min-[1200px]:text-[16px] text-[13px] text-[#656378] font-bold min-[1200px]:mt-[16px] mt-[10px] line-clamp-3 overflow-hidden">
                      {slide.doctor}
                    </p>
                    <p className="min-[1200px]:mt-[16px] mt-[10px] min-[1200px]:text-[16px] text-[13px] text-[#656378] line-clamp-5 overflow-hidden">
                      {slide.description}
                    </p>
                    <div className="flex items-center">
                      <Link
                        href={slide.link}
                        className="bg-[linear-gradient(267deg,#00ADEF_-49.54%,#D60F8C_110.23%)] bg-clip-text text-transparent text-[16px] font-semibold mt-3 flex items-center w-full "
                        aria-label={`Explore more about ${slide.title}`}
                      >
                        <span className="relative after:absolute after:left-0 after:bottom-[2px] after:w-full after:h-[0.4px] after:bg-[linear-gradient(267deg,#00ADEF_-49.54%,#D60F8C_110.23%)] Text-color2">
                          Explore Now
                        </span>
                        <div className="ml-[2px] flex items-center">
                          <Image
                            src="/assets/up-arrow.svg"
                            alt="up-arrow"
                            width={18}
                            height={18}
                            className="h-[19px] w-[19px]"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorExpetsblog;
