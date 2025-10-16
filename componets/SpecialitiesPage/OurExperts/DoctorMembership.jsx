import Image from 'next/image'
import React from 'react'

const DoctorMembership = ({ doctorEntry }) => {
  const membershipsFromData = Array.isArray(doctorEntry?.doctor?.memberships)
    ? doctorEntry.doctor.memberships.filter(Boolean)
    : [];

  const fallbackExpertise = [
  '2016 – Member, Bangalore Hematology Group',
  '2016 – Member, Association of Medical Oncologists of India (AMOI)',
  '2015 – Life Member, Indian Society of Medical & Pediatric Oncology (ISMPO)',
  '2014 – Member, European Society of Medical Oncology (ESMO)',
  '2017 – Member, American Society of Hematology (ASH)',
  '2022 – Member, American Society of Clinical Oncology (ASCO)',
  'Reviewer – Indian Journal of Surgical Oncology, Cancer Reports',
  ];

  const items = (membershipsFromData.length ? membershipsFromData : fallbackExpertise).slice(0, 7);

  return (
    <div className="container md:col-span-3 flex flex-col justify-center">
      <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-4 mb-4">
        <span className="Text-color2 ">Membership & Scientific Committee Roles</span>
      </h2>
      {items.map((text, idx) => (
        <div key={idx} className="flex pb-4">
          <Image
            src="/assets/dots.svg"
            alt=""
            width={24}
            height={24}
            className="min-[1200px]:h-6 mt-[2px] min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
          />
          <p className="ml-3 min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px] text-[#3A3A3A]">
            {text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DoctorMembership