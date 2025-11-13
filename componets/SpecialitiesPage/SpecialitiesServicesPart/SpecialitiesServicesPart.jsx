import React from "react";
import { sizeMap, validTags } from "@/lib/utils";

export const SpecialitiesServicesPart = ({ slug }) => {
  if (!slug?.content_blocks?.length) return null;

  const block = slug?.content_blocks?.find(
    (item) => item?.block_type === "statistic"
  );

  if (!block) return null;
  const fieldTag = (block?.field_tag || "h3").toString().toLowerCase().trim();
  const Tag = validTags.includes(fieldTag) ? fieldTag : "h3";
  const sizeClasses = sizeMap[Tag] || sizeMap.h2;
  const baseClasses = "font-bold text-[#3D3D3D]";
  const hasOverflow = block?.statistics?.length > 9;
  return (
    <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
      <div className="container space-y-10">
        <section
          className={`bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] rounded-[32px] pt-[0px] pb-[30px] ${
            hasOverflow ? "h-[404px] overflow-y-auto" : "h-auto"
          }`}
        >
          <div className="min-[1200px]:pt-[30px] min-[800px]:pt-[20px] pt-[18px] rounded-[32px] pl-[30px] sticky z-10 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] pb-[15px] top-0">
            <Tag className={`${sizeClasses} ${baseClasses}`}>
              {block?.title || "Our Focus Areas"}
            </Tag>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-[30px] pr-[30px]">
            {block?.statistics?.map((feature, index) => {
              const rawTag = feature?.field_tag?.toLowerCase()?.trim() || "p";
              const Tag = validTags.includes(rawTag) ? rawTag : "p";
              const sizeClasses = sizeMap[Tag] || sizeMap.p;
              return (
                <div
                  key={index}
                  className="bg-white text-[#3A3A3A] hover:text-white h-[122px] flex justify-center items-center px-4 py-6 text-center rounded-[24px] cursor-pointer transition-all duration-200 transform hover:scale-[1.02] hover:bg-gradient-to-r from-[#00ADEF] via-[#8F4FBF] to-[#D60F8C]"
                >
                  <Tag className={`${sizeClasses} font-medium`}>
                    {feature?.statistic_text || ""}
                  </Tag>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
