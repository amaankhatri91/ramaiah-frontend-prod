"use client";

import { sizeMap, validTags } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const SpecialitiesHeroSection = ({ slug }) => {
  if (!slug?.content_blocks?.length) return null;

  // Find text block and get its field_tag
  const field_tag =
    slug?.content_blocks
      ?.find((item) => item?.block_type === "text")
      ?.field_tag?.toLowerCase() || "h2";

  const Tag = validTags.includes(field_tag) ? field_tag : "span";

  const title = slug?.content_blocks?.[0]?.title || "";
  const imageFile =
    slug?.content_blocks?.[1]?.media_files?.[0]?.media_file || {};
  const bgImage =
    slug?.content_blocks?.[2]?.media_files?.[0]?.media_file?.file_url;
  // Classes
  const sizeClasses = sizeMap[Tag] || sizeMap.h2;
  const extraLineHeight =
    title === "Ramaiah Institute of Oncosciences"
      ? "min-[1200px]:leading-[44px] min-[1480px]:leading-[65px]"
      : "";
  const baseClasses = `font-bold Text-color2 ${sizeClasses} ${extraLineHeight}`;

  return (
    <div className="flex flex-col gap-16">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
          className="bg-no-repeat bg-cover bg-center relative z-0"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-85 z-0"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full container pb-[50px] pt-[25px]">
            <div className="flex items-center">
              <div className="min-[1200px]:p-6 rounded-lg">
                {/* Dynamic tag rendering */}
                <Tag className={baseClasses}>{title}</Tag>
              </div>
            </div>
            <div className="rounded-[48px] flex justify-end">
              <Image
                src={imageFile?.file_url}
                alt={imageFile?.filename || "Speciality Image"}
                width={530}
                height={632}
                className="min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[400px] md:w-[530px] border-[15px] border-[#EFEFEF] object-cover rounded-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialitiesHeroSection;
