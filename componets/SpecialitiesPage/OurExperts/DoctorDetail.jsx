"use client";

import React from "react";
import DoctorHeroSection from "./DoctorHeroSection";
import DoctorOverview from "./DoctorOverview";
import DoctorExpertice from "./DoctorExpertice";
import FacilitiesServices from "../FacilitiesServices/FacilitiesServices";
import DoctorFellowships from "./DoctorFellowships";
import DoctorAwardsAccomplishment from "./DoctorAwardsAccomplishment";
import DoctorExperience from "./DoctorExperience";
import DoctorMembership from "./DoctorMembership";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;
  console.log("doctorEntry", doctorEntry);
  const doctorDetailSlug = doctorEntry?.doctor?.id
    ? `doctor-detail`
    : (doctorEntry?.doctor?.slug || doctorEntry?.deptSlug);
  return (
    <div className="">
      <DoctorHeroSection doctorEntry={doctorEntry} />
      <div className="min-[1200px]:mt-[40px] min-[800px]:mt-[30px] mt-[18px]">
        <DoctorOverview doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <DoctorExpertice doctorEntry={doctorEntry} />
      </div>
      <div className="">
        <FacilitiesServices slug={doctorDetailSlug} />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <DoctorFellowships doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <DoctorAwardsAccomplishment doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <DoctorExperience doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
        <DoctorMembership doctorEntry={doctorEntry} />
      </div>
    </div>
  );
}


