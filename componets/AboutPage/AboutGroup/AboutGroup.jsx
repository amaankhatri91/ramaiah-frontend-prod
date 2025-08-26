import HeroSection from "@/componets/CommonComponets/HeroSection/HeroSection";
import React from "react";
import AboutFounderSection from "./AboutFounderSection/AboutFounderSection";
import FounderCard from "./FounderCard/FounderCard";

const AboutGroup = () => {
  return (
    <div className="">
      <div>
        <HeroSection
          Title="Ramaiah Group"
          Paragraph={true}
          BgImage="/assets/RamaiahGroup.svg"
           MainVideo="https://www.w3schools.com/howto/rain.mp4"
          ParagraphContent="We are always indebted to Our Founder DR. M S Ramaiah, a visionary who built Institutions that redefined learning."
        />
      </div>
      <div>
        <AboutFounderSection />
      </div>
      <div>
        <FounderCard />
      </div>
    </div>
  );
};

export default AboutGroup;
