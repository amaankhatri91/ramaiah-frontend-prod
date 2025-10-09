"use client";
import React from "react";
import Image from "next/image";
import { useHomePage } from "@/lib/hooks";

// Fallback stats in case API data is not available
const fallbackStats = [
  { icon: "/assets/beds.svg", value: "550+", label: "Beds" },
  { icon: "/assets/ICU.svg", value: "110+", label: "ICU Beds" },
  { icon: "/assets/consultant.svg", value: "300+", label: "Consultant" },
  { icon: "/assets/nursing-staff.svg", value: "600+", label: "Nursing Staff" },
  { icon: "/assets/patients.svg", value: "2.5M", label: "Patients Treated" },
  { icon: "/assets/procedures.svg", value: "1.5M", label: "Procedures" },
  { icon: "/assets/Simplificationhomeison.svg", value: "5", label: "Of Excellence" },
  { icon: "/assets/specialities.svg", value: "30+", label: "Specialities" },
];

// Fallback accreditations in case API data is not available
const fallbackAccreditations = [
  { img: "/assets/joint-comission.svg", alt: "Joint Commission International" },
  { img: "/assets/AmericanHeartAssociation.svg", alt: "American Heart Association" },
  { img: "/assets/AmericanHeartAssociation.svg", alt: "American Stroke Association" },
  { img: "/assets/NABH.svg", alt: "NABH" },
  { img: "/assets/rahiyaccordiongreen.svg", alt: "NABH" },
  { img: "/assets/mcseventwo.svg", alt: "NABH" },
];

export default function StoryAccreditations() {
  const { data } = useHomePage();

  // Extract Our Story section data from API response
  const ourStorySection = data?.data?.sections?.find(section => section.section_type === "statistics");
  const storyContentBlocks = ourStorySection?.content_blocks || [];
  
  // Sort content blocks by display_order
  const sortedStoryContentBlocks = [...storyContentBlocks].sort((a, b) => a.display_order - b.display_order);
  
  // Find text block for title (block_type: "text")
  const textBlock = sortedStoryContentBlocks.find(block => block.block_type === "text");
  
  // Filter only statistic blocks for the grid (block_type: "statistic")
  const statisticBlocks = sortedStoryContentBlocks.filter(block => block.block_type === "statistic");
  
  // Create stats array from API data (only statistic blocks)
  const stats = statisticBlocks.map((block, index) => {
    const mediaFile = block.media_files?.[0];
    const fallbackStat = fallbackStats[index] || fallbackStats[0];
    
    // Get statistic_text from the statistics array
    const statisticData = block.statistics?.[0];
    const statisticText = statisticData?.statistic_text || block.title || fallbackStat.label;
    
    return {
      title: block.title || fallbackStat.label,
      value: block.content || fallbackStat.value,
      icon: mediaFile ? mediaFile.file_url : fallbackStat.icon,
      label: statisticText,
      altText: mediaFile?.alt_text || statisticText || fallbackStat.label,
    };
  });

  // Use fallback stats if no API data is available
  const displayStats = stats.length > 0 ? stats : fallbackStats;

  // Extract Accreditations section data from API response
  const accreditationsSection = data?.data?.sections?.find(section => section.section_type === "accreditations");
  const accreditationsContentBlocks = accreditationsSection?.content_blocks || [];
  
  // Sort accreditations content blocks by display_order
  const sortedAccreditationsContentBlocks = [...accreditationsContentBlocks].sort((a, b) => a.display_order - b.display_order);
  
  // Find text block for title (block_type: "text")
  const accreditationsTextBlock = sortedAccreditationsContentBlocks.find(block => block.block_type === "text");
  
  // Filter only image blocks for the grid (block_type: "image")
  const imageBlocks = sortedAccreditationsContentBlocks.filter(block => block.block_type === "image");
  
  // Create accreditations array from API data (only image blocks)
  const accreditations = imageBlocks.map((block, index) => {
    const mediaFile = block.media_files?.[0];
    const fallbackAccreditation = fallbackAccreditations[index] || fallbackAccreditations[0];
    
    return {
      title: block.title || fallbackAccreditation.alt,
      content: block.content || "",
      img: mediaFile ? mediaFile.file_url : fallbackAccreditation.img,
      alt: mediaFile?.alt_text || block.title || fallbackAccreditation.alt,
    };
  });

  // Use fallback accreditations if no API data is available
  const displayAccreditations = accreditations.length > 0 ? accreditations : fallbackAccreditations;
  console.log("displayAccreditations", accreditations);
  return (
    <section className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[25px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-14 min-[800px]:gap-10 gap-6 items-start">
          {/* Left: Our Story */}
          <div className="rounded-[40px] p-6 min-[800px]:p-8 bg-[linear-gradient(84deg,rgba(242,213,207,0.5)_0%,rgba(226,238,254,0.5)_100%)]">
            <h2 className="min-[1200px]:text-[72px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D] mb-6">
              {/* {ourStorySection?.name || "Our"}  */}
              <span className="Text-color2">{textBlock?.title || "Our Story"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayStats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-[24px] p-4 BoxShadow"
                >
                  <Image
                    src={item.icon}
                    alt={item.altText || item.label}
                    width={40}
                    height={40}
                    className="min-[800px]:w-[50px] w-[32px] min-[800px]:h-[50px] h-[32px]"
                  />
                  <div>
                    <div className="min-[1200px]:text-[30px] min-[800px]:text-[20px] text-[16px] font-bold text-[#3D3D3D] leading-[1.2]">
                      {item.value} {item.label === "Of Excellence" ?  <span className="font-medium text-[16px] md:text-[18px]">Centers</span> : ""}
                    </div>
                    <div className="min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[12px] text-[#616161] font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accreditations & Certifications */}
          <div>
            <h2 className="min-[1200px]:text-[72px] leading-[80px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D] lg:w-[571px] w-full mb-6">
              {/* {accreditationsSection?.title }  */}
              <span className="Text-color2">{accreditationsTextBlock?.title || "Accreditations & Certifications"}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:gap-10 gap-5 justify-items-center items-start min-[1200px]:mt-[40px] ">
              {displayAccreditations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={120}
                    height={120}
                    className="w-[80px] h-[80px] md:w-[140px] md:h-[140px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


