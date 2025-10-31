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
import DoctorExpetsblog from "./DoctorExpetsblog";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;
  const doctorDetailSlug = doctorEntry?.doctor?.id
    ? `doctor-detail`
    : (doctorEntry?.doctor?.slug || doctorEntry?.deptSlug);
  return (
    <div className="">
      <DoctorHeroSection doctorEntry={doctorEntry} />
      <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[25px]">
        <DoctorOverview doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorExpertice doctorEntry={doctorEntry} />
      </div>
      <div className="">
        <FacilitiesServices slug={doctorDetailSlug} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorFellowships doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorAwardsAccomplishment doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorExperience doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorMembership doctorEntry={doctorEntry} />
      </div>
      <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[40px] mt-[25px]">
        <DoctorExpetsblog doctorEntry={doctorEntry} />
      </div>
    </div>
  );
}


