import React from "react";
import HeroSection from "../CommonComponets/HeroSection/HeroSection";
import Audio from "../SpecialitiesPage/Audio/Audio";
import InternationalPatientServices from "./InternationalPatientServices/InternationalPatientServices";
import WhyChoose from "./WhyChoose/WhyChoose";
import ExclusiveServices from "./ExclusiveServices/ExclusiveServices";
import PreDeparture from "./Pre-Departure/PreDeparture";
import ContactDetails from "./ContactDetails/ContactDetails";
import TravelAccommodation from "./Travel&Accommodation/TravelAccommodation";
import RamaiahMemorial from "../HomePage/RamaiahMemorial/RamaiahMemorial";

const InternationalPatients = () => {
  return (
    <div>
      <div>
        <HeroSection
          BgImage="/assets/InternationalPatients.svg"
          Title="International Patients"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      {/* <div>
        <Audio slug="international-patients" />
      </div> */}
      <div className="min-[1200px]:mt-[50px] min-[800px]:mt-[30px] mt-[18px]">
        <InternationalPatientServices />
      </div>
      <div className="min-[1024px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px] ">
        <WhyChoose />
      </div>
      <div className="min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
        <ExclusiveServices />
      </div>
      <div className="min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
        <PreDeparture />
      </div>
      <div className="min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
        <TravelAccommodation />
      </div>
      <div className="min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
        <ContactDetails />
      </div>
      <div>
        <RamaiahMemorial />
      </div>
    </div>
  );
};

export default InternationalPatients;
