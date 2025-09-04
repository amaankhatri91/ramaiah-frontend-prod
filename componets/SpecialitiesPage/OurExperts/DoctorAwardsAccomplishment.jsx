import Image from 'next/image'
import React from 'react'

const DoctorAwardsAccomplishment = ({ doctorEntry }) => {
  const expertiseFromData = Array.isArray(doctorEntry?.doctor?.expertise)
    ? doctorEntry.doctor.expertise.filter(Boolean)
    : [];

  const fallbackExpertise = [
    'Leadership Awards: Recognized for effective leadership in multidisciplinary teams, including training programs and collaborative projects that improved departmental efficiency.',
    'Innovative Care Award: Awarded for implementing new approaches to patient care and rehabilitation, enhancing overall treatment protocols.',
    'Publications and Citations: Authored influential peer-reviewed articles and studies that have been widely cited by fellow medical professionals.',
    'Community Service Recognition: Acknowledged for efforts in patient education, public health initiatives, and participation in health camps and awareness drives.',
    'Professional Memberships: Elected as a member of leading medical societies and organizations, often holding committee or leadership positions.',
    'Teaching Excellence: Awarded for exceptional teaching in medical training programs, contributing to the development of the next generation of healthcare professionals.',
    'International Conference Speaker: Invited to speak at renowned medical conferences and symposiums, sharing insights on oncology, transplant procedures, and surgical advancements.'
  ];

  const items = (expertiseFromData.length ? expertiseFromData : fallbackExpertise).slice(0, 7);

  return (
    <div className="container md:col-span-3 flex flex-col justify-center">
      <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
        <span className="Text-color2 ">Awards/Accomplishment</span>
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

export default DoctorAwardsAccomplishment