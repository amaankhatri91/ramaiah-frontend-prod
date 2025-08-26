import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestRoles = () => {
  const jobRoles = [
    {
      id: 1,
      title: "Marketing Executives",
      image: "/assets/MarketingExecutives.svg",
      link: "Know More",
    },
    {
      id: 2,
      title: "Obstetrics & Gynaecologist",
      image: "/assets/Obstetrics&Gynaecologist.svg",
      link: "Know More",
    },
    {
      id: 3,
      title: "Laparoscopic Surgeon",
      image: "/assets/LaparoscopicSurgeon.svg",
      link: "Know More",
    },
    {
      id: 4,
      title: "Radiologist",
      image: "/assets/Radiologist.svg",
      link: "Know More",
    },
    {
      id: 5,
      title: "Maintenance Technician",
      image: "/assets/MaintenanceTechnician.svg",
      link: "Know More",
    },
    {
      id: 6,
      title: "Pharmacist",
      image: "/assets/Pharmacist.svg",
      link: "Know More",
    },
    {
      id: 7,
      title: "Maintenance",
      image: "/assets/Maintenance.svg",
      link: "Know More",
    },
    {
      id: 8,
      title: "Purchase & Stores",
      image: "/assets/Purchase&Stores.svg",
      link: "Know More",
    },
    {
      id: 9,
      title: "Marketing Executives",
      image: "/assets/MarketingExecutives2.svg",
      link: "Know More",
    },
    {
      id: 10,
      title: "Billing & Accounts Staff",
      image: "/assets/BillingAccountsStaff.svg",
      link: "Know More",
    },
    {
      id: 11,
      title: "Guest Relation Executive",
      image: "/assets/GuestRelationExecutive.svg",
      link: "Know More",
    },
    {
      id: 12,
      title: "Pharmacy Assistants",
      image: "/assets/PharmacyAssistants.svg",
      link: "Know More",
    },
  ];

  return (
    <div className="container">
      <div className="">
        {/* Header */}
        <div className="min-[800px]:mb-8 mb-4">
          <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D]">
            Latest <span className="Text-color2">Roles</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobRoles.map((role) => (
            <div
              key={role.id}
              className="bg-[#FFFFFF] rounded-[32px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] hover:shadow-xl transition-shadow duration-300 overflow-hidden  p-[10px]"
            >
              {/* Image */}
              <div className="w-full h-[300px] md:h-[200px] flex rounded-[28px] items-center justify-center">
                <Image
                  src={role.image}
                  alt={role.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-[28px]"
                />
              </div>

              {/* Content */}
              <div className="mt-[16px]">
                <h3 className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] font-semibold text-[#3D3D3D]">
                  {role.title}
                </h3>

                {/* Know More Link */}
                <div className="flex items-center group mt-[8px] mb-[8px]">
                  <Link
                    href={`/careers/work-with/${role.id}`}
                    className="Text-color2 font-medium flex items-center gap-1 transition-colors duration-200"
                  >
                    <span className="Text-color2 relative inline-block top-[1px] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-[linear-gradient(267deg,#00ADEF_-49.54%,#D60F8C_110.23%)]">
                      {role.link}
                    </span>
                    <Image
                      src="/assets/up-arrow.svg"
                      alt="up-arrow"
                      width={18}
                      height={18}
                      className="h-[24px] w-[24px] relative top-[3px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRoles;
