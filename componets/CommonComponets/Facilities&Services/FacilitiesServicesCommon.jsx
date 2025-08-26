import React from "react";

const FacilitiesServicesCommon = ({ Title, FacilitiesServicesData }) => {
  const facilitiesData = [
    {
      id: 1,
      description:
        "Pure Tone Audiometry, Impedance Audiometry, BERA ENG, NST And MST With Highly Trained & Experienced Audiologists And Speech Therapists.",
    },
    {
      id: 2,
      description:
        "Nasal Endoscopy, Septoplasty, Rhinoplasty, Endoscopic Surgery (FESS, DCR, CSF Leak Closure, Optic/Orbital Decompression)",
    },
    {
      id: 3,
      description:
        "Micro Laryngeal Surgeries, Therapy For Voice Disorders And Speech Rehabilitation, Broncho-Esophagoscopy, Videolaryngoscopy",
    },
    {
      id: 4,
      description:
        "Treatment Of Benign Conditions In The Head And Neck (Thyroid & Parotid) As Well As Various Cancer Surgeries Involving Oral Cavity.",
    },
    {
      id: 5,
      description:
        "Skull Base Tumour Surgeries Such As Glomus Tumor, Acoustic Neuroma And Schwannoma",
    },
    {
      id: 6,
      description:
        "ENT Emergencies, Maxilla - Facial Fractures, Re-Animation And Re-implantation Surgeries.",
    },
  ];

  return (
    <div className="container rounded-[32px] bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] p-8">
      <div className="">
        <div className="min-[1200px]:mb-[32px] mb-[20px]">
          <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
            {Title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {FacilitiesServicesData?.map((facility, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] cursor-pointer flex items-center rounded-[61px] p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <p className="text-[#3A3A3A] min-[1200px]:text-[20px] text-[800px]:text-[16px] text-[14px] font-medium">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesServicesCommon;
