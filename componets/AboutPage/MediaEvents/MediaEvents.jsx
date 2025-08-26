import HeroSection from "@/componets/CommonComponets/HeroSection/HeroSection";
import React from "react";
import Celebration from "./Celebration/Celebration";

const MediaEvents = () => {
  return (
    <div>
      <div>
        <HeroSection
          Title="Media and Events"
          BgImage="/assets/about-hospital.svg"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div>
        <Celebration />
      </div>
    </div>
  );
};

export default MediaEvents;
