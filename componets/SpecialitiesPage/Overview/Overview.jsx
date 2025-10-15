import React from "react";
import Image from "next/image";
import { contentBlocks } from "@/componets/ServiceData/Overview";

const Overview = ({ slug }) => {
  // const block = contentBlocks.find((b) => b.slug === slug);
  console.log("slug>>>>>>",slug)

  if (!slug?.content_blocks?.length) return null;
  const advantages = [
    "Performed along with surgery so that anesthesia is used only one time.",
    "The typical structures are pushed away from the tumor bed so that the dose to these areas is reduced, and in turn, the duration of external radiation is reduced",
    "IORT has opportunities for dose escalation beyond EBRT dose and re-irradiation in recurrent cancers where EBRT may not be possible",
    "Since it is a low-energy X-ray (50kV), the exposure to the staff is almost nil and requires minimal shielding"
  ];

  return (
    <div className="container bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,#FFF_33.84%,#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px] rounded-[40px]">
      <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
        <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
          {slug?.content_blocks?.[0]?.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
        {/* Text Content with Scroll */}
        <div className="md:col-span-7 md:order-1 order-2 h-full md:max-h-[440px] overflow-y-auto pr-4 pb-2 space-y-4">
          {/* {block.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
            >
              {para}
            </p>
          ))} */}
          {/* {slug?.content_blocks?.[1]?.content} */}
          <div dangerouslySetInnerHTML={{ 
                            __html: slug?.content_blocks[1]?.content || '' 
                        }}
                        />
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 md:order-2 order-1 w-full">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
            <Image
              src={slug?.content_blocks?.[2]?.media_files?.[0]?.media_file?.file_url}
              alt={slug?.content_blocks?.[2]?.media_files?.[0]?.media_file?.filename}
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
      {
        slug === "ramaiah-institute-oncosciences/radiation-oncology" && (
          <div>
            <span className="min-[1200px]:text-[27px] min-[800px]:text-[22px] text-[17px] font-bold text-[#3D3D3D]">"Advantages of IORT"</span>
            {advantages.map((text, idx) => (
              <div key={idx} className="flex items-center min-[1200px]:mt-[32px] min-[800px]:mt-[24px] mt-[10px]">
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
