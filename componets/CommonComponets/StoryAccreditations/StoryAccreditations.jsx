"use client";
import React from "react";
import Image from "next/image";
import { useHomePage } from "@/lib/hooks";
import { sizeMap, validTags } from "@/lib/utils";

// Fallback stats in case API data is not available
const fallbackStats = [
  { icon: "/assets/beds.svg", value: "550+", label: "Beds" },
  { icon: "/assets/ICU.svg", value: "110+", label: "ICU Beds" },
  { icon: "/assets/consultant.svg", value: "300+", label: "Consultant" },
  { icon: "/assets/nursing-staff.svg", value: "600+", label: "Nursing Staff" },
  { icon: "/assets/patients.svg", value: "2.5M", label: "Patients Treated" },
  { icon: "/assets/procedures.svg", value: "1.5M", label: "Procedures" },
  {
    icon: "/assets/Simplificationhomeison.svg",
    value: "5",
    label: "Of Excellence",
  },
  { icon: "/assets/specialities.svg", value: "30+", label: "Specialities" },
];

// Fallback accreditations in case API data is not available
const fallbackAccreditations = [
  { img: "/assets/joint-comission.svg", alt: "Joint Commission International" },
  {
    img: "/assets/AmericanHeartAssociation.svg",
    alt: "American Heart Association",
  },
  {
    img: "/assets/AmericanHeartAssociation.svg",
    alt: "American Stroke Association",
  },
  { img: "/assets/NABH.svg", alt: "NABH" },
  { img: "/assets/rahiyaccordiongreen.svg", alt: "NABH" },
  { img: "/assets/mcseventwo.svg", alt: "NABH" },
];

export default function StoryAccreditations() {
  const { data } = useHomePage();

  // Extract Our Story section data from API response
  const ourStorySection = data?.data?.sections?.find(
    (section) => section.section_type === "statistics"
  );
  const storyContentBlocks = ourStorySection?.content_blocks || [];

  // Sort content blocks by display_order
  const sortedStoryContentBlocks = [...storyContentBlocks].sort(
    (a, b) => a.display_order - b.display_order
  );

  // Find text block for title (block_type: "text")
  const textBlock = sortedStoryContentBlocks.find(
    (block) => block.block_type === "text"
  );

  // Filter only statistic blocks for the grid (block_type: "statistic")
  const statisticBlocks = sortedStoryContentBlocks.filter(
    (block) => block.block_type === "statistic"
  );

  console.log(statisticBlocks, "Check Block Content");

  // Create stats array from API data (only statistic blocks)
  const stats = statisticBlocks.map((block, index) => {
    const mediaFile = block.media_files?.[0];
    const fallbackStat = fallbackStats[index] || fallbackStats[0];

    // Get statistic_text from the statistics array
    const statisticData = block.statistics?.[0];
    const statisticText =
      statisticData?.statistic_text || block.title || fallbackStat.label;

    return {
      title: block.title || fallbackStat.label,
      value: block.content || fallbackStat.value,
      icon: mediaFile ? mediaFile.file_url : fallbackStat.icon,
      label: statisticText,
      altText: mediaFile?.alt_text || statisticText || fallbackStat.label,
      field_tag: block?.field_tag || "span",
    };
  });

  // Use fallback stats if no API data is available
  const displayStats = stats.length > 0 ? stats : fallbackStats;

  console.log(displayStats, "Can we check display stats");

  // Extract Accreditations section data from API response
  const accreditationsSection = data?.data?.sections?.find(
    (section) => section.section_type === "accreditations"
  );
  const accreditationsContentBlocks =
    accreditationsSection?.content_blocks || [];

  // Sort accreditations content blocks by display_order
  const sortedAccreditationsContentBlocks = [
    ...accreditationsContentBlocks,
  ].sort((a, b) => a.display_order - b.display_order);

  // Find text block for title (block_type: "text")
  const accreditationsTextBlock = sortedAccreditationsContentBlocks.find(
    (block) => block.block_type === "text"
  );

  // Filter only image blocks for the grid (block_type: "image")
  const imageBlocks = sortedAccreditationsContentBlocks.filter(
    (block) => block.block_type === "image"
  );

  // Create accreditations array from API data (only image blocks)
  const accreditations = imageBlocks.map((block, index) => {
    const mediaFile = block.media_files?.[0];
    const fallbackAccreditation =
      fallbackAccreditations[index] || fallbackAccreditations[0];

    return {
      title: block.title || fallbackAccreditation.alt,
      content: block.content || "",
      img: mediaFile ? mediaFile.file_url : fallbackAccreditation.img,
      alt: mediaFile?.alt_text || block.title || fallbackAccreditation.alt,
    };
  });

  const getTag = (tag, fallback = "p") => {
    if (!tag) return fallback;
    const t = String(tag).toLowerCase().trim();
    return /^h[1-6]$/.test(t) || t === "p" || t === "span" ? t : fallback;
  };

  // Use fallback accreditations if no API data is available
  const displayAccreditations =
    accreditations.length > 0 ? accreditations : fallbackAccreditations;
  return (
    <section className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[25px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-14 min-[800px]:gap-10 gap-6 items-start">
          {/* Left: Our Story */}
          <div className="rounded-[40px] p-6 min-[800px]:p-8 bg-[linear-gradient(84deg,rgba(242,213,207,0.5)_0%,rgba(226,238,254,0.5)_100%)]">
            {(() => {
              const fieldType = textBlock?.field_tag?.toLowerCase() || "h2";
              const Tag = validTags?.includes(fieldType) ? fieldType : "h2";
              const baseClasses =
                "font-bold text-[#3D3D3D] mb-6 md:text-left text-center Text-color2";
              const responsiveSize = sizeMap[Tag] || sizeMap.h2;
              return (
                <Tag className={`${responsiveSize} ${baseClasses}`}>
                  {textBlock?.title || "Our Story"}
                </Tag>
              );
            })()}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayStats.map((item, index) => {
                const ValueTag = getTag(item.field_tag, "span");
                const valueClass = `${
                  sizeMap[ValueTag] || sizeMap.p
                } font-bold text-[#3D3D3D] leading-[1.2]`;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-[24px] p-4 BoxShadow"
                  >
                    {console.log("item", item)}
                    <Image
                      src={item.icon}
                      alt={item.altText}
                      width={40}
                      height={40}
                      className="min-[800px]:w-[50px] w-[50px] min-[800px]:h-[50px] h-[50px]"
                    />
                    <div>
                      <ValueTag className={valueClass}>
                        {item.value}{" "}
                        {item.label === "Of Excellence" ? (
                          <span className="font-medium text-[16px] md:text-[18px]">
                            Centers
                          </span>
                        ) : (
                          ""
                        )}
                      </ValueTag>
                      <div className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[15px] text-[#616161] font-medium">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Accreditations & Certifications */}
          <div>
            {(() => {
              // Determine tag type
              const rawTag =
                accreditationsTextBlock?.field_tag?.toLowerCase() || "h2";
              const Tag = validTags.includes(rawTag) ? rawTag : "h2";
              // Use Tailwind font sizes from sizeMap only
              const responsiveSize = sizeMap[Tag] || sizeMap.h2;
              const content =
                accreditationsTextBlock?.title ||
                "Accreditations & Certifications";
              // Keep layout + typography-related classes (not text size)
              const baseClasses =
                "font-bold text-[#3D3D3D] leading-tight min-[1200px]:leading-[80px] min-[1560px]:w-[82%] min-[1200px]:w-[100%] min-[1460px]:w-[88%] w-full mb-6 md:text-left text-center";
              return (
                <Tag className={`${responsiveSize} ${baseClasses}`}>
                  <span className="Text-color2">{content}</span>
                </Tag>
              );
            })()}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:gap-10 gap-5 justify-items-center items-start min-[1200px]:mt-[40px] ">
              {displayAccreditations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={120}
                    height={120}
                    className="w-[100px] h-[100px] md:w-[160px] md:h-[160px]"
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
