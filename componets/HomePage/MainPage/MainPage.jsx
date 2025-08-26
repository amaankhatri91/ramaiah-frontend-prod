import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Appointment from "../Appointment/Appointment";
import MeetExperts from "../MeetExperts/MeetExperts";
import LegacyClinical from "@/componets/HomePage/LegacyClinical/LegacyClinical";
import RamaiahMemorial from "@/componets/HomePage/RamaiahMemorial/RamaiahMemorial";
import ListenOur from "../ListenToOur/ListenOur";
import Review from "../Review/Review";
import ExpertsSpeak from "../ExpertsSpeak/ExpertsSpeak";
import DoctorSpeak from "../DoctorSpeak/DoctorSpeak";
import Accreditations from "../Accreditations/Accreditations";
import ServiceGrid from "../ServiceGrid/ServiceGrid";

const MainPage = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      {/* <div>
        <Appointment />
      </div> */}
      <div className="lg:relative lg:top-[-76px] lg:mt-0 md:mt-[40px] mt-[25px]">
        <ServiceGrid />
      </div>
      <div className="lg:mt-0 md:mt-[40px] mt-[25px]">
        <DoctorSpeak />
      </div>
      <div>
        <MeetExperts />
      </div>
      <div>
        <LegacyClinical />
      </div>
      <div>
        <RamaiahMemorial />
      </div>
      <div>
        <Accreditations />
      </div>
      <div>
        <ListenOur />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ExpertsSpeak />
      </div>
    </div>
  );
};

export default MainPage;
