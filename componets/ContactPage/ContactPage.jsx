import React from "react";
import HeroSection from "../CommonComponets/HeroSection/HeroSection";
import CallUs from "./CallUs/CallUs";
import ContactMap from "./ContactMap/ContactMap";
import RamaiahMemorial from "../HomePage/RamaiahMemorial/RamaiahMemorial";

const ContactPage = () => {
  return (
    <div>
      <div>
        <HeroSection
          BgImage="/assets/Contact-bg.svg"
          Title="Contact Us"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[30px]">
        <CallUs />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <ContactMap />
      </div>
      <div>
        <RamaiahMemorial />
      </div>
    </div>
  );
};

export default ContactPage;
