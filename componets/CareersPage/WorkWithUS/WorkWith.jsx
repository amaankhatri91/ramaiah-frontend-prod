import HeroSection from "@/componets/CommonComponets/HeroSection/HeroSection";
import React from "react";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import LatestRoles from "./LatestRoles/LatestRoles";
import EnquireNowWorkWith from "./EnquireNowWorkWith/EnquireNowWorkWith";
import EventSection from "./EventSection/EventSection";

const WorkWith = () => {
  return (
    <div>
      <div>
        <HeroSection
          BgImage="/assets/WorkWithUs-bg.svg"
          Title="Work With Us"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <WhyChooseUs />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <LatestRoles />
      </div>
      <div>
        <EnquireNowWorkWith />
      </div>
      <div className="min-[1200px]:mt-[65px] min-[800px]:mt-[50px] mt-[40px]">
        <EventSection />
      </div>
    </div>
  );
};

export default WorkWith;
