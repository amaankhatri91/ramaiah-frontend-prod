import Image from 'next/image'
import React from 'react'

const DoctorFellowships = ({ doctorEntry }) => {
  const fellowshipsFromData = Array.isArray(doctorEntry?.doctor?.fellowships)
    ? doctorEntry.doctor.fellowships.filter(Boolean)
    : [];

  const fallbackExpertise = [
    'Fellowship in Hematology/Oncology or related disciplines.',
    'Additional training in Bone Marrow Transplant and stem cell research.',
    'Certifications: Completion of specialized certification programs in medical oncology and transplantation medicine.',
    'Continued Medical Education: Ongoing participation in workshops, seminars, and conferences focused on oncology and bone marrow transplant advancements.',
    'Research Training: Participation in clinical research training, focusing on developing and implementing innovative cancer treatment protocols.'
  ];

  const items = (fellowshipsFromData.length ? fellowshipsFromData : fallbackExpertise).slice(0, 5);

  return (
    <div className="container md:col-span-3 flex flex-col justify-center">
      <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
        <span className="Text-color2 ">Fellowships</span>
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

export default DoctorFellowships