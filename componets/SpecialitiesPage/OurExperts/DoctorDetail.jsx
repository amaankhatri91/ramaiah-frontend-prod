"use client";

import React from "react";
import DoctorHeroSection from "./DoctorHeroSection";
import DoctorOverview from "./DoctorOverview";
import DoctorExpertice from "./DoctorExpertice";
import FacilitiesServices from "../FacilitiesServices/FacilitiesServices";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;
  console.log("doctorEntry", doctorEntry);
  return (
    <div className="flex flex-col gap-10">
      <DoctorHeroSection doctorEntry={doctorEntry} />
      <DoctorOverview doctorEntry={doctorEntry} />
      <DoctorExpertice doctorEntry={doctorEntry} />
      <div className="">
        <FacilitiesServices slug={doctorEntry?.doctor?.slug || doctorEntry?.deptSlug} />
      </div>
    </div>
  );
}


