import React from "react";
import Image from "next/image";



const WhyChoose = ({ slug }) => {
  if(!slug?.content_blocks?.length) return null;
  const whyChooseItems = [
    {
      id: 1,
      icon: slug?.content_blocks?.[0]?.media_files?.[0]?.media_file?.file_url,
      label: slug?.content_blocks?.[0]?.title,
    },
    {
      id: 2,
      icon: slug?.content_blocks?.[1]?.media_files?.[0]?.media_file?.file_url,
      label: slug?.content_blocks?.[1]?.title,
    },
    {
      id: 3,
      icon: slug?.content_blocks?.[2]?.media_files?.[0]?.media_file?.file_url,
      label: slug?.content_blocks?.[2]?.title,
    },
    {
      id: 4,
      icon: slug?.content_blocks?.[3]?.media_files?.[0]?.media_file?.file_url,
      label: slug?.content_blocks?.[3]?.title,
    },
  ];
  return (
    <div className="container bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] min-[1024px]:p-[40px] p-[25px] rounded-[32px]">
      <div className="min-[1200px]:py-[10px] py-[6px]">
        <h2 className="text-[#3D3D3D] min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[18px] font-bold">
          {/* Why Choose <span className="Text-color2">RMH</span> */}
          {slug?.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-[1024px]:gap-6 gap-[60px] min-[1024px]:mt-[80px] min-[800px]mt-[72px] mt-[50px]">
        {whyChooseItems.map((item) => (
          <div
            key={item.id}
            className="relative  bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.06)] px-6 min-[1024px]:pt-[60px] pt-[40px] pb-4 flex flex-col items-center text-center"
          >
            {/* Absolute, centered badge with gradient ring */}
            <div className="absolute min-[1024px]:top-[-60px] top-[-40px] left-1/2 -translate-x-1/2 w-[115px] h-[115px]">
              <div className="">
                <div className="w-full h-full rounded-full  flex items-center justify-center">
                  <div className="relative min-[1024px]:w-[115px] w-[80px] min-[1024px]:h-[115px] h-[80px]">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      fill
                      className="object-cover "
                      sizes="76px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[14px] font-semibold mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
