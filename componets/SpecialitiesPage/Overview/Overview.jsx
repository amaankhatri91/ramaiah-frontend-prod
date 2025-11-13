import React from "react";
import Image from "next/image";
import { sizeMap, validTags } from "@/lib/utils";

const Overview = ({ slug }) => {
  if (!slug?.content_blocks?.length) return null;
  
  const advantages = [
    "Performed along with surgery so that anesthesia is used only one time.",
    "The typical structures are pushed away from the tumor bed so that the dose to these areas is reduced, and in turn, the duration of external radiation is reduced",
    "IORT has opportunities for dose escalation beyond EBRT dose and re-irradiation in recurrent cancers where EBRT may not be possible",
    "Since it is a low-energy X-ray (50kV), the exposure to the staff is almost nil and requires minimal shielding",
  ];

  const titleBlock = slug?.content_blocks?.[0];
  const contentBlock =
    slug?.content_blocks?.find(
      (b) => b?.block_type === "text" && b?.content && String(b.content).trim()
    ) || slug?.content_blocks?.[1];

  const imageBlock =
    slug?.content_blocks?.find((b) => b?.block_type === "image") ||
    slug?.content_blocks?.[2];

  const titleFieldTag = (titleBlock?.field_tag || "h2")
    .toString()
    .toLowerCase()
    .trim();
  const contentFieldTag = (contentBlock?.field_tag || "span")
    .toString()
    .toLowerCase()
    .trim();

  const TitleTag = validTags.includes(titleFieldTag) ? titleFieldTag : "h2";
  const ContentTag = validTags.includes(contentFieldTag)
    ? contentFieldTag
    : "span";

  const titleSize = sizeMap[TitleTag] || sizeMap.h2;
  const contentSize = sizeMap[ContentTag] || sizeMap.p;
  const titleClasses = `${titleSize} font-bold text-[#3D3D3D]`;
  const contentClasses = `${contentSize} text-[#414049]  font-medium`;

  const rawHtml = contentBlock?.content || "";
  const imageFile = imageBlock?.media_files?.[0]?.media_file || {};
  return (
    <div className="container bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,#FFF_33.84%,#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px] pt-[15px] rounded-[40px]">
      <div className="pb-[10px]">
        <TitleTag className={titleClasses}>{titleBlock?.title || ""}</TitleTag>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
        <div className="md:col-span-7 md:order-1 order-2 h-full md:max-h-[440px] overflow-y-auto pr-4 pb-2 space-y-4">
          <div
            className={contentClasses}
            dangerouslySetInnerHTML={{ __html: rawHtml }}
          />
        </div>
        {/* Image Content */}
        <div className="md:col-span-5 md:order-2 order-1 w-full">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
            {imageFile?.file_url ? (
              <Image
                src={imageFile.file_url}
                alt={imageFile.filename || "overview image"}
                fill
                className="object-cover rounded-xl shadow-md"
              />
            ) : null}
          </div>
        </div>
      </div>
      {slug === "ramaiah-institute-oncosciences/radiation-oncology" && (
        <div>
          <span className="min-[1200px]:text-[27px] min-[800px]:text-[22px] text-[17px] font-bold text-[#3D3D3D]">
            "Advantages of IORT"
          </span>
          {advantages?.map((text, idx) => (
            <div
              key={idx}
              className="flex items-center min-[1200px]:mt-[32px] min-[800px]:mt-[24px] mt-[10px]"
            >
              <Image
                src="/assets/dots.svg"
                alt=""
                width={24}
                height={24}
                className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
              />
              <p className="ml-3 min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px] text-[#3A3A3A]">
                {text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Overview;
