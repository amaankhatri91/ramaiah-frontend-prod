"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    title: (
      <>
        Our Decades Of Legacy & Clinical Excellence Has
        <span className="Text-color2"> Touched Millions Of Lives</span> To Ensure
      </>
    ),
    hashtag: "#LifeGetsBetter",
    background: "https://www.w3schools.com/howto/rain.mp4",
    type: "video",
  },
  {
    image: "/assets/CLIP1.png",
    image2: "/assets/1440pxCLIP1.png",
    type: "image",
  },
  {
    image: "/assets/CLIP2.png",
    image2: "/assets/1440pxCLIP2.png",
    type: "image",
  },
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobiles, setIsMobiles] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobiles(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const carousel = document.querySelector(".hero-carousel-touch");
    if (!carousel) return;
    let startX = 0;
    let startY = 0;
    let isHorizontal = false;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isHorizontal = false;
      }
    };
    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);
        if (!isHorizontal && (dx > 10 || dy > 10)) {
          isHorizontal = dx > dy;
        }
        if (isHorizontal) {
          e.preventDefault(); 
        }
      }
    };
    carousel.addEventListener("touchstart", onTouchStart, { passive: false });
    carousel.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchmove", onTouchMove);
    };
  }, [isMobile]);

  return (
    <div className="w-full bg-white select-none">
      <Carousel
        className="hero-carousel-touch"
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={30}
        showThumbs={false}
        infiniteLoop
        // autoPlay
        showStatus={false}
        showArrows={false}
        interval={5000}
        emulateTouch
        swipeable
        showIndicators={!isMobiles}
        stopOnHover={false}
      >
        {slides.map((slide, index) => (
          // <SwiperSlide key={index}>
          <div className="relative w-full h-full min-[1024px]:h-[765px] overflow-hidden cursor-pointer">
            {/* Background Media */}
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src={slide.background} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={isMobile ? slide.image2 : slide.image}
                alt={`Slide ${index + 1}`}
                width={1440}
                height={600}
                //   layout="fill"
                //   objectFit="cover"
                className="z-0 w-full h-full"
                priority
              />
            )}

            {/* Foreground Content for First Slide Only */}
            {slide.type === "video" && (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-75 z-0"></div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center  justify-between container h-auto pt-[38px] gap-10 ">
                  {/* Left content */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-[25px] min-[1080px]:text-[45px] min-[1507px]:text-[59px] font-bold text-[#3D3D3D] leading-tight">
                      {slide.title}
                    </h2>
                    <p className="Text-color2 font-bold text-[20px] min-[1080px]:text-[40px] min-[1507px]:text-[45px] mt-4">
                      {slide.hashtag}
                    </p>
                    {/* <button className="mt-6 text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
                      Book Appointment
                    </button> */}
                  </div>

                  {/* Right video preview */}
                  <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto lg:h-[550px] object-cover rounded-[32px] border-[14px]  bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] border-[#cdcdcd]"
                    >
                      <source src={slide.background} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </>
            )}
          </div>
          // </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
