"use client";

import React from "react";
import DoctorHeroSection from "./DoctorHeroSection";
import DoctorOverview from "./DoctorOverview";
import DoctorExpertice from "./DoctorExpertice";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;

  return (
    <div className="flex flex-col gap-10">
      <DoctorHeroSection doctorEntry={doctorEntry} />
      <DoctorOverview doctorEntry={doctorEntry} />
      <DoctorExpertice doctorEntry={doctorEntry} />
    </div>
  );
}


