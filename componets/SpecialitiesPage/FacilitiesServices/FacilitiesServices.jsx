import React from "react";
import { getFeaturesPage } from "@/componets/ServiceData/FacilitiesServices";

const FacilitiesServices = ({ slug }) => {
  const section = getFeaturesPage(slug);

  if (!section) return null;

  const hasOverflow = section.features.length > 9;

  return (
   <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">

    <div className="container space-y-10 ">
      <section
        className={`bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] rounded-[32px] pt-[0px] pb-[30px] ${
          hasOverflow ? "h-[404px] overflow-y-auto" : "h-auto"
        }`}
      >
        <div className="min-[1200px]:pt-[30px] min-[800px]:pt-[20px] pt-[18px] rounded-[32px] pl-[30px] sticky z-10 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] pb-[15px] top-0">
          <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
            {section.MainTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-[30px] pr-[30px]">
          {section.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[#3A3A3A] hover:text-white flex justify-center items-center px-4 py-6 text-center rounded-[24px] cursor-pointer transition-all duration-200 transform hover:scale-[1.02] hover:bg-gradient-to-r from-[#00adef] via-[#8f4fbf] to-[#d60f8c]"
            >
              <p className="min-[1200px]:text-[20px] min-[800px]:text-[16px] text-[13px] font-medium">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
   </div>

  );
};

export default FacilitiesServices;
