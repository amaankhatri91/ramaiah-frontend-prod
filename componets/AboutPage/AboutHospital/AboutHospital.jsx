import HeroSection from "@/componets/CommonComponets/HeroSection/HeroSection";
import React from "react";
import HospitalInfo from "./HospitalInfo/HospitalInfo";
import VisionMission from "./VisionMission/VisionMission";
import ChairmanProfile from "./ChairmanProfile/ChairmanProfile";
import ExecutiveCard from "./ExecutiveCard/ExecutiveCard";
import AwardsAccolades from "./AwardsAccolades/AwardsAccolades";

const AboutHospital = () => {
  return (
    <div>
      <div>
        <HeroSection
          Title="Our Hospital - A Safe Destination for Health Care"
          BgImage="/assets/about-hospital.svg"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div>
        <HospitalInfo />
      </div>
      <div>
        <VisionMission />
      </div>
      <div>
        <ChairmanProfile />
      </div>
      <div>
        <ExecutiveCard />
      </div>
      <div>
        <AwardsAccolades />
      </div>
    </div>
  );
};

export default AboutHospital;
