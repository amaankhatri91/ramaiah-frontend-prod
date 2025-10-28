"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";


const Counter = ({ value, start }) => {
  const [count, setCount] = useState(0);
  const isMillion = value?.includes("M") || false;
  const hasPlus = value?.includes("+") || false;
  const isStatic = value === "NABH & NABL" || value === null || value === undefined;

  useEffect(() => {
    if (!start || isStatic || !value) return;

    const number = parseFloat(value.replace(/[^\d.]/g, ""));
    const duration = 2000;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = number / totalFrames;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(interval);
      }
      setCount(current);
    }, frameDuration);

    return () => clearInterval(interval);
  }, [start, value, isStatic]);

  if (isStatic) return <span>{value || "NABH & NABL"}</span>;

  return (
    <span>
      {isMillion ? count.toFixed(1) : count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {isMillion ? "M" : ""}
      {hasPlus ? "+" : ""}
    </span>
  );
};

const RamaiahMemorial = ({ slug }) => {
  if(!slug?.content_blocks?.length) return null;
  const content_blocks = slug?.content_blocks;
  
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { icon: "/assets/beds.svg", value: "550+", label: "Beds" },
    { icon: "/assets/ICU.svg", value: "110+", label: "ICU Beds" },
    { icon: "/assets/consultant.svg", value: "300+", label: "Consultant" },
    { icon: "/assets/nursing-staff.svg", value: "600+", label: "Nursing Staff" },
    { icon: "/assets/accredited.svg", value: "NABH & NABL", label: "Accredited" },
    { icon: "/assets/patients.svg", value: "2.5M", label: "Patients" },
    { icon: "/assets/procedures.svg", value: "1.5M", label: "Procedures" },
    { icon: "/assets/specialities.svg", value: "30+", label: "Specialities" },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" min-[800px]:pt-[70px] pt-[30px]">
      <div
        ref={statsRef}
        className="container p-7 rounded-[32px]"
        style={{
          background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
        }}
      >
        <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] min-[580px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
          {/* Ramaiah Memorial <span className="Text-color2">Hospital</span>,
          Bengaluru */}
          {slug?.title}
        </h2>
        <p className="mt-2 text-[#414049] min-[1400px]:text-[16px] text-[14px] font-medium">
          {/* Has touched more than a million lives */}
          {slug?.content_blocks[0]?.content}
        </p>

        <div className="min-[1200px]:mt-10 mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content_blocks[0]?.statistics?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center border w-full py-[24px] min-[1298px]:px-[24px] px-[12px] border-purple-200 rounded-[24px] shadow-sm mx-auto bg-white hover:shadow-md transition"
            >
              {/* {console.log("item???",item)} */}
              <div>
                <Image
                  src={item?.statistics_image}
                  alt={item?.label}
                  height={56}
                  width={56}
                  className="h-[75px] w-[75px]"
                />
              </div>
              <div className="ml-[16px]">
                <div
                  className={`text-left font-bold text-[#3D3D3D] ${
                    item.statistic_text === "NABH & NABL"
                      ? "min-[1298px]:text-[22px] min-[882px]:text-[16px] text-[16px]"
                      : "min-[1298px]:text-[37px] min-[882px]:text-[30px] text-[25px]"
                  } ${item.label === "Accredited" ? "mb-[10px] mt-[10px]" : ""}`}
                >
                  <Counter value={item?.number} start={startCount} />
                </div>
                <div className="min-[1298px]:text-[20px] min-[882px]:text-[16px] text-[16px] text-[#3A3A3A] font-medium text-left">
                  {item?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RamaiahMemorial;
