"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useHomePage } from "@/lib/hooks";

const LegacyClinical = () => {
  const { data } = useHomePage();

  // Extract Legacy section data from API response
  const legacySection = data?.data?.sections?.find(section => section.section_type === "legacy");
  const contentBlocks = legacySection?.content_blocks || [];
  
  // Sort content blocks by display_order
  const sortedContentBlocks = [...contentBlocks].sort((a, b) => a.display_order - b.display_order);
  
  // Get the main content block
  const mainContentBlock = sortedContentBlocks.find(block => block.block_type === "text");
  
  // Get media files for video
  const videoFile = mainContentBlock?.media_files?.[0];

  // Fallback content
  // const fallbackTitle = "Our 20+ Years of Legacy & Clinical Excellence";
  const fallbackContent = "Ramaiah Memorial Hospital is a multi-superspecialty quaternary care hospital, located in Bangalore, Karnataka, India. The state-of-the-art, 500+ bed private hospital is equipped with all the modern facilities, including cutting-edge medical technologies, Modular Operation Theatres, advanced ICUs, spacious ward rooms, etc. Which all come together to offer comprehensive medical services in more than 30 specialties.";
  const fallbackVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="min-[1300px]:pt-[100px] min-[800px]:pt-[50px] pt-[30px]">
      <div className="flex items-center justify-center container">
        <div className="w-full rounded-[40px] 
            bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,_#FFF_33.84%,_#EEF9FF_97.64%)] 
            shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px]">
          <div className="flex flex-col justify-center">
            <h2 className="min-[1264px]:text-[48px] min-[946px]:text-[35px] text-[28px] font-bold leading-tight md:text-left text-center">
              <span className="Text-color">{legacySection?.content_blocks[0]?.title }</span>
            </h2>
            <p className="mt-[20px] text-[#3D3D3D] min-[1200px]:text-[16px] text-[13px] font-normal leading-relaxed">
              {legacySection?.content_blocks[1]?.content}
            </p>
            {/* <div className="min-[1264px]:mt-5 mt-3 min-[1200px]:mb-[24px] min-[800px]:mb-[18px] mb-[14px]">
              <button className="flex cursor-pointer items-center Background-color text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-90 transition-all">
                Book Appointment
                <MdArrowOutward className="ml-[8px]" />
              </button>
            </div> */}
          </div>

          {/* Right Column - Video */}
          <div className="min-[1200px]:h-[750px] min-[800px]:h-[650px] min-[1200px]:mt-[16px] min-[800px]:mt-[14px] mt-[12px]">
            <video
              className="w-full h-full object-none rounded-[30px]"
              src={legacySection?.content_blocks[2]?.media_files?.[0]?.file_url}
              autoPlay
              loop
              muted
              playsInline
              aria-label={legacySection?.content_blocks[2]?.media_files?.[0]?.alt_text || "Legacy & Clinical Excellence video"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyClinical;
