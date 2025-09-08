import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header3 = () => {
  const accreditations = [
    { img: "/assets/joint-comission.svg", alt: "Joint Commission International" },
    { img: "/assets/AmericanHeartAssociation.svg", alt: "American Heart Association" },
    { img: "/assets/AmericanHeartAssociation.svg", alt: "American Stroke Association" },
    { img: "/assets/NABH.svg", alt: "NABH" },
    { img: "/assets/rahiyaccordiongreen.svg", alt: "NABH" },
    { img: "/assets/mcseventwo.svg", alt: "NABL" },
  ];

  return (
    <div>
      <header
        className="max-[1024px]:hidden"
        style={{
          background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
        }}
      >
        <div className="container flex justify-between items-center">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Ramaiah Memorial Hospital"
                className="min-[1200px]:w-[170px] h-[70px]"
                width={197}
                height={70}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {accreditations.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                alt={item.alt}
                width={64}
                height={64}
                className="w-16 h-16"
              />
            ))}
          </div>
          <div>
            <h2 className="min-[1200px]:text-[42px] text-[30px] font-bold Text-color2">#LifeGetsBetter</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header3;
