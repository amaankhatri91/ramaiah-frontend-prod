"use client";

import React from "react";
import Image from "next/image";

export default function DoctorHeroSection({ doctorEntry }) {
  if (!doctorEntry) return null;

  const { doctor, deptSlug, sectionTitle } = doctorEntry;
  const formatValue = (value) =>
    Array.isArray(value) ? value.filter(Boolean).join(", ") : value;

  const infoItems = [
    { label: "Department", value: deptSlug },
    { label: "Education", value: doctor?.education || doctor?.qualification },
    { label: "Experience", value: doctor?.experience },
    { label: "Speciality", value: doctor?.specialty },
    { label: "Language Known", value: doctor?.languages },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#FFFFFF] rounded-[40px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] p-6">
          <h1 className="min-[1200px]:text-[28px] min-[800px]:text-[24px] text-[20px] font-bold text-[#3D3D3D]">
            {doctor?.name}
          </h1>
          {doctor?.designation && (
            <p className="text-[#3A3A3A] font-medium min-[1200px]:text-[16px] min-[800px]:text-[15px] text-[14px] mt-1">
              {doctor.designation}
            </p>
          )}

          <div className="min-[768px]:mt-6 mt-4 flex flex-col gap-4">
            {infoItems.map((item) => (
              <div className="flex items-start gap-3" key={item.label}>
                <span className="mt-[6px] w-3 h-3 rounded-full bg-[#8B5CF6]"></span>
                <div>
                  <p className="text-[#3D3D3D] font-semibold min-[1200px]:text-[16px] min-[800px]:text-[15px] text-[14px]">
                    {item.label}
                  </p>
                  <p className="text-[#3A3A3A] min-[1200px]:text-[15px] min-[800px]:text-[14px] text-[13px] mt-1">
                    {formatValue(item.value)}
                  </p>
                </div>
              </div>
            ))}

            {sectionTitle && (
              <div className="flex items-start gap-3">
                <span className="mt-[6px] w-3 h-3 rounded-full bg-[#8B5CF6]"></span>
                <div>
                  <p className="text-[#3D3D3D] font-semibold min-[1200px]:text-[16px] min-[800px]:text-[15px] text-[14px]">
                    Section
                  </p>
                  <p className="text-[#3A3A3A] min-[1200px]:text-[15px] min-[800px]:text-[14px] text-[13px] mt-1">
                    {sectionTitle}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button className="text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
              Book An Appointment
            </button>
          </div>
        </div>

        <div className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] shadow-md overflow-hidden flex items-center justify-center p-4">
          <Image
            src={doctor?.image}
            alt={doctor?.name || "Doctor image"}
            width={530}
            height={632}
            className="w-full min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[380px] object-cover rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
}


