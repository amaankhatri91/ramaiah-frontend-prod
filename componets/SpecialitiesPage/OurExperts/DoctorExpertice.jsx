import Image from 'next/image'
import React from 'react'

const DoctorExpertice = ({ doctorEntry }) => {
  const expertiseFromData = Array.isArray(doctorEntry?.doctor?.expertise)
    ? doctorEntry.doctor.expertise.filter(Boolean)
    : [];

  const fallbackExpertise = [
    'Management of various types of cancer, including solid tumors and hematologic malignancies',
    'Stem cell and bone marrow transplants for treatment of Blood Cancers and Auto-Immune Diseases',
    'Involvement in clinical studies and research for advanced treatment protocols',
    'Proficiency in specialized techniques related to stem cell transplantation and related oncology care',
  ];

  const items = (expertiseFromData.length ? expertiseFromData : fallbackExpertise).slice(0, 4);

  return (
    <div className="container md:col-span-3 flex flex-col justify-center">
      <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
        <span className="Text-color2 ">Expertise</span>
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

export default DoctorExpertice