import Image from 'next/image'
import React from 'react'

const DoctorExperience = ({ doctorEntry }) => {
  const experienceFromData = Array.isArray(doctorEntry?.doctor?.experience)
    ? doctorEntry.doctor.experience.filter(Boolean)
    : [];

  const fallbackExpertise = [
    'Medical Oncologist: Extensive experience in diagnosing and treating various types of cancers, specializing in personalized cancer therapies.',
    'Bone Marrow Transplant Specialist: In-depth work in performing autologous and allogeneic bone marrow transplants, managing pre-and post-transplant care, and ensuring optimal patient outcomes.',
    'Multidisciplinary Team Collaboration: Worked closely with surgeons, radiologists, pathologists, and supportive care teams to develop comprehensive treatment plans.',
    'Clinical Research and Trials: Led or participated in clinical trials to assess new cancer therapies, contributing to peer-reviewed publications and advancements in treatment methodologies.',
    'Patient Education and Counselling: Provide guidance to patients and their families regarding treatment options, potential side effects, and post-treatment care.',
    'Leadership Roles: Supervised and mentored junior oncologists and medical students, fostering a collaborative learning environment.',
    'Teaching and Workshops: Conducted lectures, workshops, and training programs to share expertise in oncology, transplantation, and patient management.',
    'Administrative Roles: Experience in departmental management, including protocol development, resource allocation, and optimizing workflow efficiency in medical practice.',
    'Continuous Professional Development: Regularly updated knowledge on the latest oncology treatments, transplant techniques, and patient care standards through conferences and continuing education.'
  ];

  const items = (experienceFromData.length ? experienceFromData : fallbackExpertise).slice(0, 9);

  return (
    <div className="container md:col-span-3 flex flex-col justify-center">
      <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-4 mb-4">
        <span className="Text-color2 ">Experience</span>
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

export default DoctorExperience