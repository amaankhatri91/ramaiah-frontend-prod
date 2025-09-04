"use client";

import React from "react";
import DoctorHeroSection from "./DoctorHeroSection";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;

  return (
    <div className="flex flex-col gap-10">
      <DoctorHeroSection doctorEntry={doctorEntry} />
    </div>
  );
}


