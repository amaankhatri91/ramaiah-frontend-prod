"use client";

import React from "react";
import DoctorHeroSection from "./DoctorHeroSection";
import DoctorOverview from "./DoctorOverview";
import DoctorExpertice from "./DoctorExpertice";
import FacilitiesServices from "../FacilitiesServices/FacilitiesServices";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;
  console.log("doctorEntry", doctorEntry);
  const doctorDetailSlug = doctorEntry?.doctor?.id
    ? `doctor-detail`
    : (doctorEntry?.doctor?.slug || doctorEntry?.deptSlug);
  return (
    <div className="">
      <DoctorHeroSection doctorEntry={doctorEntry} />
      <DoctorOverview doctorEntry={doctorEntry} />
      <DoctorExpertice doctorEntry={doctorEntry} />
      <div className="">
        <FacilitiesServices slug={doctorDetailSlug} />
      </div>
    </div>
  );
}


