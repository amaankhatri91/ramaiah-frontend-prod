import Image from "next/image";
import React from "react";

const ExclusiveServices = () => {
  const services = [
    "Providing one to one Tele-consultation / Video Consultation with Treating Doctor",
    "Medical Queries addressed within 24 hours",
    "Dedicated relationship manager",
    "Visa assistance",
    "Complimentary airport pickup and drop services",
    "Assistance in choice of accommodation in the vicinity of the hospital",
    "Dedicated person for FRRO registration / visa extension process through our dedicated Help-Desk.",
    "In house 24/7 translation services",
    "In house forex services / travel assistance",
    "Availability of international TV channels",
    "Priority to international patient in OPD and diagnostics",
    "Spacious & well appointed Executive / Deluxe rooms / Suites for International guests.",
  ];

  const half = Math.ceil(services.length / 2);
  const leftServices = services.slice(0, half);
  const rightServices = services.slice(half);

  return (
    <div className="container">
      <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold">
        <span className="Text-color2">Exclusive Services</span> For Our{" "}
        <span className="Text-color2">International Patients</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-6 mt-6 md:mt-8">
        {/* Left column */}
        <div className="space-y-3 md:space-y-4">
          {leftServices.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Image
                src="/assets/dots.svg"
                alt="bullet"
                width={20}
                height={20}
                className="mt-[2px] w-3.5 h-3.5 min-[800px]:w-4 min-[800px]:h-4 min-[1200px]:w-5 min-[1200px]:h-5"
                priority
              />
              <p className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] text-[#3A3A3A] font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3 md:space-y-4">
          {rightServices.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Image
                src="/assets/dots.svg"
                alt="bullet"
                width={20}
                height={20}
                className="mt-[2px] w-3.5 h-3.5 min-[800px]:w-4 min-[800px]:h-4 min-[1200px]:w-5 min-[1200px]:h-5"
                priority
              />
              <p className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[14px] text-[#3A3A3A] font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServices;
