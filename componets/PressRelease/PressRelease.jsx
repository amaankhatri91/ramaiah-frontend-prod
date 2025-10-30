import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PressRelease = () => {
  const pressReleaseData = [
    {
      id: 1,
      title: "Press Release 1",
      description:
        "Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned Save data.",
      image: "/assets/press-release.svg",
      dateImage: "/assets/celender.svg",
      date: "01 Dec, 2025",
      //   heading:"By meditest"
    },
    {
      id: 2,
      title: "Press Release 1",
      description:
        "Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned Save data.",
      image: "/assets/press-release.svg",
      dateImage: "/assets/celender.svg",
      date: "01 Dec, 2025",
      //   heading:"By meditest"
    },
  ];
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[100px]">
        {pressReleaseData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-start relative"
          >
            {/* Image Container */}
            <div className="w-full  rounded-[48px] border-[10px] border-gray-200">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content Box */}
            <div className="w-[85%] bg-[#FFFFFF] p-4 rounded-[18px] shadow-md -mt-[70px] relative z-10">
                <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={item.dateImage}
                  alt={item.date}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[16px] text-gray-600">{item.date}</p>
              </div>
              <p>By <span className="Text-color2">Meditest</span></p>
              </div>
              <h2 className="text-[24px] font-semibold text-[#3D3D3D] mt-[12px]">
                {item.title}
              </h2>
              <p className="text-[16px] text-[#212121] font-medium mt-2">
                {item.description}
              </p>
              <div className="flex justify-end">
              <Link
              href="#"
              className="inline-flex underline items-center w-max mt-3 px-4 py-2 rounded-full text-[#3d3d3d] font-bold min-[800px]:text-[18px] text-[16px]"
            >
              <span className="Text-color2 text-[16px]">Read More</span>
              <Image
                src="/assets/up-arrow.svg"
                alt="up-arrow"
                width={16}
                height={16}
                className="h-[30px] w-[30px]"
              />
            </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
