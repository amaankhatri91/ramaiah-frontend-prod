"use client";

import React from "react";
import Image from "next/image";
import { specialties } from "@/componets/ServiceData/SpecialtiesHeroData";

export default function DoctorHeroSection({ doctorEntry }) {
  if (!doctorEntry) return null;

  const { doctor, deptSlug, sectionTitle, overlayImage } = doctorEntry;
  const formatValue = (value) => {
    if (Array.isArray(value)) {
      const items = value.filter(Boolean);
      if (items.length <= 1) return items[0] || "";
      return (
        <ul className="list-disc ml-5 space-y-1 marker:text-[#8B5CF6]">
          {items.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      );
    }
    return value;
  };

  const infoItems = [
    { label: "Department", value: "HOD & Consultant – Department of Medical Oncology & Chief – Bone Marrow Transplant" },
    { label: "Education", value: "DM (Medical Oncology), MD (Internal Medicine)" },
    { label: "Experience", value: "15 Years Experience" },
    { label: "Speciality", value: "Medical Oncology" },
    { label: "Language Known", value: "Kannada, English, Hindi" },
  ].filter((item) => Boolean(item.value));

  const matchedSpecialty = specialties.find((s) => s.slug === deptSlug);

  return (
    <div className="flex flex-col gap-16">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url('${overlayImage || "/assets/doctordetailsttci.svg"}'), url('${matchedSpecialty?.bgImage || ""}')`,
          }}
          className="bg-no-repeat bg-cover bg-center relative z-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-85 z-0"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full container pb-[50px] pt-[25px]">
            <div className="flex items-center">
              <div className="min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[400px] overflow-y-auto bg-white border border-[#EFEFEF] shadow-md rounded-[24px] min-[1200px]:p-[24px] p-4">
                <h1 className="font-bold text-[#3D3D3D] min-[1220px]:text-[32px] min-[800px]:text-[25px] text-[20px]">
                  {doctor?.name}
                </h1>
                {/* {doctor?.designation && (
                  <p className="text-[#3A3A3A] font-medium min-[1200px]:text-[16px] min-[800px]:text-[15px] text-[14px] mt-1">
                    {doctor.designation}
                  </p>
                )} */}

                <div className="min-[768px]:mt-6 mt-4 flex flex-col gap-4">
                  {infoItems.map((item) => (
                    <div className="flex items-start gap-3" key={item.label}>
                      {/* <span className="mt-[6px] w-3 h-3 rounded-full bg-[linear-gradient(180deg,#8B5CF6_0%,#F43F5E_100%)] shadow-sm"></span> */}
                      <Image
                            src="/assets/dots.svg"
                            alt="bullet"
                            width={20}
                            height={20}
                            className="mt-[5px] w-3.5 h-3.5 min-[800px]:w-4 min-[800px]:h-4 min-[1200px]:w-5 min-[1200px]:h-5"
                            priority
                          />
                      <div>
                        <p className="text-[#3D3D3D] font-manrope font-bold min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[14px]">
                          {item.label}
                        </p>
                        <div className="text-[#414049] font-manrope font-medium min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] mt-1">
                          {formatValue(item.value)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex justify-end">
                  <button className="text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all">
                    Book An Appointment
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] shadow-md overflow-hidden">
              <Image
                // src={doctor?.image}
                 src="/assets/doctordetailsttci.svg"
                alt={doctor?.name || "Doctor image"}
                width={530}
                height={632}
                className="w-full min-[1200px]:h-[600px] min-[800px]:h-[450px] h-[400px] object-cover rounded-[32px] p-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


