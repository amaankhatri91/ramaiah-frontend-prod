import React from "react";
import Image from "next/image";
import { contentBlocks } from "@/componets/ServiceData/Overview";

const Overview = ({ slug }) => {
  const block = contentBlocks.find((b) => b.slug === slug);

  if (!block) return null;

  return (
    <div className="container bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,#FFF_33.84%,#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px] rounded-[40px]">
      <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
        <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
          Overview
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
        {/* Text Content with Scroll */}
        <div className="md:col-span-7 md:order-1 order-2 h-full md:max-h-[440px] overflow-y-auto pr-4 pb-2 space-y-4">
          {block.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 md:order-2 order-1 w-full">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
            <Image
              src={block.image}
              alt={block.alt}
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
