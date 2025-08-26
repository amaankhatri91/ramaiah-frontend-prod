import Image from "next/image";
import React from "react";

const HeroSection = ({
  BgImage,
  Title,
  Button,
  MainVideo,
  Paragraph,
  ParagraphContent,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="relative">
          <div
            style={{ backgroundImage: `url('${BgImage}')` }}
            className="bg-no-repeat bg-cover bg-center relative z-0"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-85 z-0"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full container pb-[50px] pt-[25px]">
              <div className="flex items-center">
                <div className="min-[1200px]:p-6 rounded-lg">
                  <h2 className="min-[1480px]:text-[56px] min-[1200px]:text-[35px] min-[800px]:text-[26px] text-[22px] font-bold Text-color2">
                    {Title}
                  </h2>
                  {Button ? (
                    <button className="mt-5 text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
                      Book Appointment
                    </button>
                  ) : (
                    ""
                  )}
                  {Paragraph ? (
                    <p className="min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] text-[#3D3D3D] font-normal">
                      {ParagraphContent}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] shadow-md overflow-hidden">
                <video
                  src={MainVideo} 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[400px] object-cover rounded-[52px] p-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
