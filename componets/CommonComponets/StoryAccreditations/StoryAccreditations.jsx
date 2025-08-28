"use client";
import React from "react";
import Image from "next/image";

const stats = [
  { icon: "/assets/beds.svg", value: "550+", label: "Beds" },
  { icon: "/assets/ICU.svg", value: "110+", label: "ICU Beds" },
  { icon: "/assets/consultant.svg", value: "300+", label: "Consultant" },
  { icon: "/assets/nursing-staff.svg", value: "600+", label: "Nursing Staff" },
  { icon: "/assets/patients.svg", value: "2.5M", label: "Patients Treated" },
  { icon: "/assets/procedures.svg", value: "1.5M", label: "Procedures" },
  { icon: "/assets/Simplificationhomeison.svg", value: "5", label: "Of Excellence" },
  { icon: "/assets/specialities.svg", value: "30+", label: "Specialities" },
];

const accreditations = [
  { img: "/assets/joint-comission.svg", alt: "Joint Commission International" },
  { img: "/assets/AmericanHeartAssociation.svg", alt: "American Heart Association" },
  { img: "/assets/AmericanHeartAssociation.svg", alt: "American Stroke Association" },
  { img: "/assets/NABH.svg", alt: "NABH" },
  { img: "/assets/rahiyaccordiongreen.svg", alt: "NABH" },
  { img: "/assets/mcseventwo.svg", alt: "NABH" },
];

export default function StoryAccreditations() {
  return (
    <section className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[25px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-14 min-[800px]:gap-10 gap-6 items-start">
          {/* Left: Our Story */}
          <div className="rounded-[24px] p-6 min-[800px]:p-8 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)]">
            <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D] mb-6">
              Our <span className="Text-color2">Story</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-[18px] p-4 BoxShadow"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="min-[800px]:w-[40px] w-[32px] min-[800px]:h-[40px] h-[32px]"
                  />
                  <div>
                    <div className="min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] font-bold text-[#3D3D3D] leading-[1.2]">
                      {item.value} {item.label === "Of Excellence" ?  <span className="font-medium text-[16px] md:text-[18px]">Centers</span> : ""}
                    </div>
                    <div className="min-[1200px]:text-[14px] min-[800px]:text-[13px] text-[12px] text-[#616161] font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accreditations & Certifications */}
          <div>
            <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D] mb-6">
              Our <span className="Text-color2">Accreditations</span> & Certifications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-start">
              {accreditations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={120}
                    height={120}
                    className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


