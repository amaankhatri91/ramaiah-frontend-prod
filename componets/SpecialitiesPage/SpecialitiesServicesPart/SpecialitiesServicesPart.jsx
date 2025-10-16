import React from 'react'

export const SpecialitiesServicesPart = ({ slug }) => {
  // const section = getFeaturesPage(slug);

  if (!slug?.content_blocks?.length) return null;

  const hasOverflow = slug?.content_blocks[0]?.statistics.length > 9;

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
           {slug?.content_blocks?.[0]?.title}
           </h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-[30px] pr-[30px]">
           {slug?.content_blocks[0]?.statistics.map((feature, index) => (
             <div
               key={index}
               className="bg-white text-[#3A3A3A] hover:text-white flex justify-center items-center px-4 py-6 text-center rounded-[24px] cursor-pointer transition-all duration-200 transform hover:scale-[1.02] hover:bg-gradient-to-r from-[#00ADEF] via-[#8F4FBF] to-[#D60F8C]"
             >
               <p className="min-[1200px]:text-[20px] min-[800px]:text-[16px] text-[13px] font-medium">
               {feature.statistic_text}
               </p>
             </div>
           ))}
         </div>
       </section>
     </div>
    </div>
   );
}
