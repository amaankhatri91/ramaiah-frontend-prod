"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Dinesh Jaiswal",
    ratingImage: "/assets/star.svg",
    review:
      "The Ramaiah Memorial Hospital is an 8 floor big hospital where one can expect treatment for almost all health issues. The huge Ramaiah campus includes old Ramaiah hospital, Dental hospital and college. I found it very professional in treatment with fair cost. No hidden cost / no unnecessary test / no unwanted admission in ICU. Doctors do check the patient even at night, at frequent intervals. Very cordial nursing staff and supporting staff. God bless the management.",
  },
  {
    name: "Sneha Kumar",
    ratingImage: "/assets/star.svg",
    review:
      "Excellent care and facilities. The doctors were attentive and the nursing staff made me feel comfortable during my stay. Highly recommended!",
  },
  {
    name: "Rajeev Singh",
    ratingImage: "/assets/star.svg",
    review:
      "Clean hospital environment and experienced doctors. Transparent billing and good follow-up post-discharge.",
  },
];

const Review = () => {
  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]  min-[1200px]:pb-[30px] pb-[15px] select-none">
      <Swiper
        modules={[Autoplay, Pagination]}
        // autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="min-[1200px]:p-[40px] min-[800px]:p-[28px] p-[20px] min-[1200px]:h-[275px]  mb-[40px] Background-color2 rounded-[30px]">
              <h4 className="min-[1200px]:text-[24px] min-[800px]:text-[20px] text-[18px] font-bold text-[#3D3D3D] ">
                {item.name}
              </h4>
              <div className="pt-[7px] w-[135px]">
                <Image
                  src={item.ratingImage}
                  alt="star"
                  width={135}
                  height={17}
                  className="h-[17px] w-[135px]"
                />
              </div>
              <div className="min-[1200px]:mt-[25px] mt-[15px] min-[1200px]:h-[140px] h-[100px] overflow-auto">
                <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px]  font-medium">
                  {item.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
