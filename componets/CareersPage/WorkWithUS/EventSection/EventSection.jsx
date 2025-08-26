import React from "react";
import Image from "next/image";

const EventSection = () => {
  const preDepartureItems = [
    {
      id: 1,
      image: "/assets/HandHygieneEtiquettes.svg",
      label: "Hand Hygiene Etiquettes",
    },
    {
      id: 2,
      image: "/assets/GroomingEtiquette.svg",
      label: "Grooming Etiquette Session",
    },
    {
      id: 3,
      image: "/assets/YogaSession.svg",
      label: "Yoga Session for Staff",
    },
  ];
  return (
    <div className="">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 lg:gap-6 mt-6 sm:mt-10">
          {preDepartureItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#fff] justify-center rounded-[24px] shadow-[0_32px_44px_0_rgba(148,153,170,0.12)] px-2 sm:px-3 pb-4 pt-[265px] flex flex-col items-center text-center"
            >
              <div className="absolute inset-x-2 -top-3 sm:-top-4 h-[263px] rounded-[24px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 220px, (min-width:640px) 200px, 160px"
                  priority
                />
              </div>
              <p className="text-[#3A3A3A] min-[1200px]:text-[14px] min-[800px]:text-[13px] text-[12px] font-medium leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
