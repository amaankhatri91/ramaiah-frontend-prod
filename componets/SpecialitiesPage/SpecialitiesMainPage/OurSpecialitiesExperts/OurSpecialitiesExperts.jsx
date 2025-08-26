import Image from "next/image";
import Link from "next/link";
import React from "react";
// data/departments.js
export const departments = [
  {
    name: "Accident & Emergency",
    image: "/assets/accident-emergency.svg",
    link: "specialities/accident-emergency",
  },
  {
    name: "Anaesthesiology",
    image: "/assets/anaesthesiology.svg",
    link: "specialities/anaesthesiology",
},
{
    name: "Cardiothoracic Surgery",
    image: "/assets/Cardiothoracic-Surgery.svg",
    link: "specialities/cardiothoracic-surgery",
  },
  {
    name: "Cardiology",
    image: "/assets/Cardiology.svg",
    link: "specialities/cardiology",
},
{
    name: "Critical Care Medicine",
    image: "/assets/CriticalCareMedicine.svg",
    link: "specialities/critical-care-medicine",
  },
  {
    name: "Dental Surgery",
    image: "/assets/DentalSurgery.svg",
    link: "specialities/dental-surgery",
  },
  {
    name: "Dermatology",
    image: "/assets/Dermatology.svg",
    link: "specialities/dermatology-cosmetology",
  },
  {
    name: "Endocrinology",
    image: "/assets/Endocrinology.svg",
    link: "specialities/endocrinology",
  },
  {
    name: "ENT",
    image: "/assets/ENT.svg",
    link: "specialities",
  },
  {
    name: "General Medicine",
    image: "/assets/GeneralMedicine.svg",
    link: "specialities",
  },
  {
    name: "General Surgery",
    image: "/assets/GeneralSurgery.svg",
    link: "specialities",
  },
  {
    name: "Medical Gastroenterology",
    image: "/assets/MedicalGastroenterology.svg",
    link: "specialities",
  },
  {
    name: "Neonatology",
    image: "/assets/Neonatology.svg",
    link: "specialities",
  },
  {
    name: "Nephrology",
    image: "/assets/Nephrology.svg",
    link: "specialities",
  },
  {
    name: "Neurocritical Care",
    image: "/assets/NeurocriticalCare.svg",
    link: "specialities",
  },
  {
    name: "Neurology",
    image: "/assets/Neurology.svg",
    link: "specialities",
  },
  {
    name: "Neurosurgery",
    image: "/assets/Neurosurgery.svg",
    link: "specialities",
  },
  {
    name: "Obstetrics & Gynecology",
    image: "/assets/Obstetrics&Gynecology.svg",
    link: "specialities",
  },
  {
    name: "Ophthalmology",
    image: "/assets/Ophthalmology.svg",
    link: "specialities",
  },
  {
    name: "Orthopaedics",
    image: "/assets/Orthopaedics.svg",
    link: "specialities",
  },
  {
    name: "Paediatric Surgery",
    image: "/assets/PaediatricSurgery.svg",
    link: "specialities",
  },
  {
    name: "Paediatrics",
    image: "/assets/Paediatrics.svg",
    link: "specialities",
  },
  {
    name: "Radiation Oncology",
    image: "/assets/RadiationOncology.svg",
    link: "specialities",
  },
  {
    name: "Radio Diagnosis",
    image: "/assets/RadioDiagnosis.svg",
    link: "specialities",
  },
  {
    name: "Pulmonology",
    image: "/assets/Pulmonology.svg",
    link: "specialities",
  },
  {
    name: "Surgical Gastroenterology",
    image: "/assets/SurgicalGastroenterology.svg",
    link: "specialities",
  },
  {
    name: "Surgical Oncology",
    image: "/assets/SurgicalOncology.svg",
    link: "specialities",
  },
  {
    name: "Urology",
    image: "/assets/Urology.svg",
    link: "specialities",
  },
  {
    name: "Vascular Surgery",
    image: "/assets/VascularSurgery.svg",
    link: "specialities",
  },
  {
    name: "Bone Marrow Trans.",
    image: "/assets/BoneMarrowTrans..svg",
    link: "specialities",
  },
  {
    name: "Center For Rehabilitation",
    image: "/assets/CenterForRehabilitation.svg",
    link: "specialities",
  },
  {
    name: "Neuroanesthesia",
    image: "/assets/Neuroanesthesia.svg",
    link: "specialities",
  },
];

const OurSpecialitiesExperts = () => {
  return (
    <div className="container">
      <div>
        <h1 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-center">
          Meet our Experts{" "}
          <span className="Text-color2">Choose a Specialty</span>
        </h1>
      </div>
      <div>
        <div className="min-[1200px]:pt-[48px] min-[800px]:pt-[30px] pt-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="rounded-[24px] overflow-hidden shadow-md hover:shadow-xl bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] transition duration-300"
              >
                <Link href={dept.link ? dept.link : ""}>
                  <div className="">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      width={262}
                      height={162}
                      // layout="fill"
                      // objectFit="cover"
                      // className="h-[162px] object-cover rounded-tl-[24px] rounded-tr-[24px]"
                      className="object-cover w-full min-[1200px]:h-[232px] h-[232px]"
                    />
                  </div>
                  <div className="min-[1200px]:h-auto min-[600px]:min-h-[80px] !px-[16px] min-[600px]:p-0 p-[16px] min-[1220px]:text-[18px] min-[800px]:text-[16px] text-[14px] text-center font-medium hover:text-[#e14b8b] hover:font-bold flex items-center justify-center ">
                    {dept.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialitiesExperts;
