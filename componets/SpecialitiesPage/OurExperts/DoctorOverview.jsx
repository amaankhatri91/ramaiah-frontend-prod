"use client";

import React from "react";

export default function DoctorOverview({ doctorEntry }) {
  const name = doctorEntry?.doctor?.name || "";

  // Prefer explicit overview paragraphs if provided on the doctor entry
  const providedParagraphs = Array.isArray(doctorEntry?.doctor?.overviewParagraphs)
    ? doctorEntry.doctor.overviewParagraphs.filter(Boolean)
    : [];

  // Support a single overview string, split by double line breaks or periods as a fallback
  const overviewString = typeof doctorEntry?.doctor?.overview === "string" ? doctorEntry.doctor.overview : "";
  const splitFromString = overviewString
    ? overviewString
        .split(/\n\n|(?<=\.)\s{2,}/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  // Gentle default copy so the UI renders even if content isn't wired yet
  const defaultParagraphs = [
    "Dr. Santhosh Kumar Devadas, HOD & Consultant – Department of Medical Oncology at Ramaiah Institute of Oncosciences, Ramaiah Memorial Hospital is an accomplished medical professional specializing in Medical Oncology and Bone Marrow Transplant. With a career spanning over 15 years, Dr. Santhosh has held various academic and clinical positions, including serving as an Associate and Assistant Professor in the same field.",
    "He completed his advanced training in Medical Oncology (DM) at Tata Memorial Hospital, Mumbai, and his Internal Medicine residency (MD) at St. John’s Medical College, Bangalore. His early medical education culminated in earning his MBBS from K.S. Hegde Medical Academy, Mangalore.",
    "Dr. Devadas has received numerous accolades for his work, such as being awarded the Research Excellence Award by Ramaiah Medical College and elected a Member of the National Academy of Medical Sciences, New Delhi. He has also been honored with fellowships like the ESMO Travelling Fellowship and ACORD Fellowship, contributing significantly to his specialization in hematology and oncology.",
    "His extensive publication record includes numerous articles and research papers in renowned medical journals, covering topics from hematologic malignancies and stem cell transplants to treatment regimens and clinical outcomes. Notable presentations include international conferences such as ASH, ASCO, and ESMO, showcasing his expertise on issues like acute leukemia, multiple myeloma, and stem cell transplant strategies.",
    "Dr. Santhosh is actively involved in education and has delivered faculty lectures and workshops on advanced medical topics, including nutrition management in stem cell transplantation and radiotherapy. His commitment to the field is evident through his dedication to research, teaching, and advancing clinical practices in oncology and transplant medicine.",
  ];

  const paragraphs = providedParagraphs.length
    ? providedParagraphs
    : splitFromString.length
    ? splitFromString
    : defaultParagraphs;

  return (
    <div className="container bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,#FFF_33.84%,#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px] rounded-[40px]">
      <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
        <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
          Overview
        </h2>
      </div>

      <div className="space-y-4 min-[1200px]:pr-[6px] md:max-h-[460px] overflow-y-auto">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}


