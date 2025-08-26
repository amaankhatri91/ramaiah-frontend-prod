import HeroSection from "@/componets/CommonComponets/HeroSection/HeroSection";
import React from "react";

const ALC = () => {
  return (
    <div>
      <div>
        <HeroSection
          BgImage="/assets/(ALC)-bg.svg"
          Title="Advance Learning Center (ALC)"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div>
        <div className="min-[1200px]:pt-[47px] min-[800px]:pt-[35px] pt-[20px] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] pb-[40px] rounded-bl-[40px] rounded-br-[40px]">
          <div className="space-y-2 container">
            <div className="min-[1345px]:text-[48px] min-[800px]:text-[40px] text-[22px] font-bold text-[#3D3D3D]">
              <h2>
                Looking{" "}
                <span className="Text-color2">
                  for opportunities for the latest learning{" "}
                </span>
                experiences?
              </h2>
            </div>
            <div className=" items-center justify-between min-[800px]:mt-[32px] mt-[20px] flex flex-col min-[840px]:flex-row">
              <p className=" text-[#3A3A3A]  min-[1200px]:text-[24px] min-[800px]:text-[18px] text-[14px] font-semibold">
                Check out our upcoming Advanced Learning conferences and
                programs: 
              </p>
              <button
                type="submit"
                className="text-[#FFFFFF] min-[840px]:mt-0 mt-[16px] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALC;
