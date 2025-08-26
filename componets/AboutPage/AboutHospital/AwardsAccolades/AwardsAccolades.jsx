"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awards = [
  {
    name: "Awarded 7th Best Multispecialty Hospital in Bangalore by Times Health Survey 2021",
    logo: "/assets/health-time.svg",
    description: "Times Health Award",
  },
  {
    name: "Accredited level IIIA, Special care Neonatal Unit by National Neonatology Forum (NNF)",
    logo: "/assets/NeonatologyForum.svg",
    description: "National Neonatology Forum",
  },
  {
    name: "CII Star ICON-Emerging Leader Award for Business Excellence",
    logo: "/assets/CII.svg",
    description: "CII Award",
  },
  {
    name: "AHPI Excellence Award for Quality Beyond Accreditation 2020",
    logo: "/assets/AHPIExcellence.svg",
    description: "AHPI Excellence Award",
  },
  {
    name: "Best Hospital for Patient Safety Award 2022",
    logo: "/assets/CII.svg",
    description: "Patient Safety Award",
  },
  {
    name: "Excellence in Healthcare Innovation Business Excellence Award 2023",
    logo: "/assets/AHPIExcellence.svg",
    description: "Innovation Award",
  },
];

const AwardsAccolades = () => {
  const useResponsiveChunks = (awards) => {
    const [chunks, setChunks] = useState([]);

    const chunkArray = (array, size) => {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    };

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setChunks(chunkArray(awards, 1));
        } else if (width < 768) {
          setChunks(chunkArray(awards, 2));
        } else if (width < 1024) {
          setChunks(chunkArray(awards, 3));
        } else {
          setChunks(chunkArray(awards, 4));
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [awards]);

    return chunks;
  };

  const groupedAwards = useResponsiveChunks(awards);

  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px] select-none">
      <div className="mb-6 px-4">
        <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D]">
          Awards & <span className="Text-color2">Accolades</span>
        </h2>
        <p className="font-normal text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] mt-2">
          Ramaiah Memorial Hospital is a green hospital & has won many awards
          accolades for best in class quality health care.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="pb-[50px]"
        spaceBetween={20}
        breakpoints={{
          320: {
            spaceBetween: 15,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 25,
          },
          1024: {
            spaceBetween: 30,
          },
          1280: {
            spaceBetween: 40,
          },
        }}
      >
        {groupedAwards.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-[640px]:gap-6 px-4 pb-[40px] min-[800px]:pt-[52px] pt-[30px]">
              {group.map((award, awardIndex) => (
                <div
                  key={awardIndex}
                  className="bg-white relative cursor-pointer w-full rounded-[32px] flex flex-col items-center justify-center shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] min-[1200px]:p-6 min-[800px]:p-5 p-4 text-center hover:shadow-lg transition-all duration-300 min-[1200px]:min-h-[280px] min-[800px]:min-h-[250px] min-h-[220px]"
                >
                  {/* Award Logo */}
                  <div className="absolute min-[1200px]:top-[-30px] min-[800px]:top-[-25px] top-[-20px] min-[1200px]:w-[200px] min-[1200px]:h-[200px] min-[800px]:w-[160px] min-[800px]:h-[160px] w-[140px] h-[140px] rounded-full flex justify-center items-center mb-6 bg-gray-50 shadow-lg">
                    <Image
                      src={award.logo}
                      alt={award.name}
                      width={60}
                      height={60}
                      className="object-contain min-[1200px]:w-[200px] min-[1200px]:h-[200px] min-[800px]:w-[160px] min-[800px]:h-[160px] w-[140px] h-[140px]"
                    />
                  </div>

                  {/* Award Description */}
                  <div className="min-[1200px]:mt-[170px] mt-[130px] flex flex-col  items-center flex-grow">
                    <h3 className="min-[1200px]:text-[16px] min-[800px]:text-[15px] text-[14px] font-medium text-[#3A3A3A] leading-relaxed">
                      {award.name}
                    </h3>
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

export default AwardsAccolades;
