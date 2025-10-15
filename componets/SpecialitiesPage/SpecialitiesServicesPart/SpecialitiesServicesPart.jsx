import React from 'react'

export const SpecialitiesServicesPart = ({ slug }) => {
  // const section = getFeaturesPage(slug);

  if (!slug) return null;

  // const hasOverflow = section.features.length > 9;

  return (
   <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">

    <div className="container space-y-10 ">
      <section
        className={`bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] rounded-[32px] pt-[0px] pb-[30px] h-auto `}
        // className={`bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] rounded-[32px] pt-[0px] pb-[30px] ${
        //   hasOverflow ? "h-[404px] overflow-y-auto" : "h-auto"
        // }`}
      >
        <div className="min-[1200px]:pt-[30px] min-[800px]:pt-[20px] pt-[18px] rounded-[32px] pl-[30px] sticky z-10 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] pb-[15px] top-0">
          <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
            {slug.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-[30px] pr-[30px] md:mt-[20px] mt-[10px]">
          {slug?.content_blocks[0]?.specialties.map((feature, index) => (
            <div
              key={index}
              className="text-[#FFFFFF] flex justify-center md:h-[122px] h-[80px] items-center px-4 py-6 text-center rounded-[24px] cursor-pointer transition-all duration-200 transform hover:scale-[1.02] bg-[linear-gradient(267deg,_#00ADEF_-49.54%,_#D60F8C_110.23%)]"
            >
              <p className="min-[1200px]:text-[20px] min-[800px]:text-[16px] text-[13px] font-medium">
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
   </div>

  );
}
