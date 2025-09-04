"use client";

import React from "react";
import Image from "next/image";

export default function DoctorDetail({ doctorEntry }) {
  if (!doctorEntry) return null;

  const { doctor, deptSlug, sectionTitle } = doctorEntry;

  return (
    <div className="container">
      <div className="flex flex-col min-[768px]:gap-10 gap-5">
        <div className="bg-[#FFFFFF] rounded-[40px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="flex items-center justify-center">
              <div className="w-[220px] h-[220px] rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="min-[1200px]:text-[32px] min-[800px]:text-[26px] text-[20px] font-bold text-[#3D3D3D]">
                {doctor.name}
              </h1>
              {doctor.designation && (
                <p className="text-[#3A3A3A] font-medium min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[14px] mt-1">
                  {doctor.designation}
                </p>
              )}
              {doctor.specialty && (
                <p className="text-[#77817D] font-medium min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] mt-1">
                  {doctor.specialty}
                </p>
              )}
              {doctor.qualification && (
                <p className="text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] mt-3">
                  {doctor.qualification}
                </p>
              )}
              <div className="text-[#6B7280] text-[12px] mt-4">
                <span className="font-medium">Department: </span>
                <span>{deptSlug}</span>
              </div>
              {sectionTitle && (
                <div className="text-[#6B7280] text-[12px] mt-1">
                  <span className="font-medium">Section: </span>
                  <span className="inline-block align-middle">{sectionTitle}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overview and placeholder sections */}
        <div className="bg-[#FFFFFF] rounded-[40px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] p-6">
          <h2 className="min-[1200px]:text-[24px] min-[800px]:text-[20px] text-[18px] font-bold text-[#3D3D3D] mb-3">
            Overview
          </h2>
          <p className="text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px]">
            Detailed biography and achievements of the doctor will appear here. This is a placeholder section. Integrate actual content once available.
          </p>
        </div>
      </div>
    </div>
  );
}


