"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHomePage } from "@/lib/hooks";
import { fetchHomePage } from "@/lib/slices/homePageSlice";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobiles, setIsMobiles] = useState(false);
  const { data, loading, error, dispatch } = useHomePage();

  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  console.log("Home page data:", data);

  // Extract hero section data from API response
  const heroSection = data?.data?.sections?.find(section => section.section_type === "hero");
  const contentBlocks = heroSection?.content_blocks || [];
  
  // Get text content blocks
  const headlineBlock = contentBlocks.find(block => block.block_type === "text" && block.display_order === 1);
  const subtitleBlock = contentBlocks.find(block => block.block_type === "text" && block.display_order === 2);
  
  // Get image content block (banner images)
  const imageBlock = contentBlocks.find(block => block.block_type === "image");
  const bannerImages = imageBlock?.media_files || [];
  
  // Get video content block (small banner)
  const videoBlock = contentBlocks.find(block => block.block_type === "video");
  const videoFile = videoBlock?.media_files?.[0];
  
  console.log("Video block:", videoBlock);
  console.log("Video file:", videoFile);

  // Sort banner images by display_order (create new array to avoid mutating Redux state)
  const sortedBannerImages = [...bannerImages].sort((a, b) => a.display_order - b.display_order);
  console.log("Sorted banner images:", sortedBannerImages);

  // URL validation function
  const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    try {
      // For relative URLs (starting with /), they are valid
      if (url.startsWith('/')) return true;
      // For absolute URLs, validate them
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Create slides array from API data
  const videoUrl = videoFile ? videoFile.file_url : null;
  console.log("Constructed video URL:", videoUrl);
  
  const slides = [
    // First slider: Use first image (id: 2) as background, video file in small banner
    {
      title: headlineBlock?.content || "Our Decades Of Legacy & Clinical Excellence Has Touched Millions Of Lives To Ensure",
      hashtag: subtitleBlock?.content || "#LifeGetsBetter",
      background: sortedBannerImages[0] && isValidUrl(sortedBannerImages[0].file_url) ? sortedBannerImages[0].file_url : "https://www.w3schools.com/howto/rain.mp4",
      smallBannerImage: videoUrl && isValidUrl(videoUrl) ? videoUrl : null,
      type: "video",
    },
    // Second slider: Use second image (id: 3) as background
    {
      image: sortedBannerImages[1] && isValidUrl(sortedBannerImages[1].file_url) ? sortedBannerImages[1].file_url : "/assets/CLIP1.png",
      image2: sortedBannerImages[1] && isValidUrl(sortedBannerImages[1].file_url) ? sortedBannerImages[1].file_url : "/assets/1440pxCLIP1.png",
      type: "image",
    },
    // Third slider: Use third image (id: 4) as background
    {
      image: sortedBannerImages[2] && isValidUrl(sortedBannerImages[2].file_url) ? sortedBannerImages[2].file_url : "/assets/CLIP2.png",
      image2: sortedBannerImages[2] && isValidUrl(sortedBannerImages[2].file_url) ? sortedBannerImages[2].file_url : "/assets/1440pxCLIP2.png",
      type: "image",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <div className="w-full bg-white select-none h-[765px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if API fails
  if (error) {
    return (
      <div className="w-full bg-white select-none h-[765px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading content: {error}</p>
        </div>
      </div>
    );
  }

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
                aria-label={sortedBannerImages[0]?.alt_text || "Hero background video"}
              >
                <source src={slide.background} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={isMobile ? slide.image2 : slide.image}
                alt={sortedBannerImages[index]?.alt_text || `Slide ${index + 1}`}
                width={1440}
                height={600}
                //   layout="fill"
                //   objectFit="cover"
                className="z-0 w-full h-full"
                priority
                onError={(e) => {
                  console.error(`Failed to load image: ${isMobile ? slide.image2 : slide.image}`, e);
                  // Fallback to default image on error
                  e.target.src = "/assets/CLIP1.png";
                }}
              />
            )}

            {/* Foreground Content for First Slide Only */}
            {slide.type === "video" && (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-75 z-0"></div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center  justify-between container h-auto pt-[38px] gap-10 ">
                  {/* Left content */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 
                      className="text-[28px] min-[1080px]:text-[45px] min-[1507px]:text-[59px] font-bold text-[#3D3D3D] leading-tight"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="Text-color2 font-bold text-[20px] min-[1080px]:text-[40px] min-[1507px]:text-[45px] mt-4">
                      {slide.hashtag}
                    </p>
                    {/* <button className="mt-6 text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
                      Book Appointment
                    </button> */}
                  </div>

                  {/* Right video preview */}
                  {console.log("slide.smallBannerImage:", slide.smallBannerImage)}
                  
                  <div className="w-full lg:w-1/2 mt-0 lg:mt-8 flex justify-end mb-[30px]">
                    {slide.smallBannerImage ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                        className="lg:w-[562px] w-full h-auto lg:h-[550px] object-cover rounded-[32px] border-[14px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] border-[#ffffff]"
                          aria-label={videoFile?.alt_text || "Small banner video"}
                          // controls={false}
                        >
                          <source src={slide.smallBannerImage} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                    ) : (
                      <div className="w-full h-auto lg:h-[550px] rounded-[32px] border-[14px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] border-[#ffffff] flex items-center justify-center">
                        <p className="text-gray-500">No video available</p>
                      </div>
                    )}
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
