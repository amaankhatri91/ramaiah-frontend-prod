import Image from "next/image";
import React from "react";
import BoneMarrowTransplantPart2 from "./BoneMarrowTransplantPart2";

const BoneMarrowTransplant = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-[1024px]:h-[538px]">
        {/* Image Section */}
        <div className="min-[1024px]:h-[538px] flex items-center">
          <Image
            src="/assets/Dr-bone-marrow1.svg"
            alt="Bone Marrow Transplant"
            width={532}
            height={438}
            className="object-cover w-full h-full max-h-[538px] rounded-[30px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col min-[1024px]:h-[538px] overflow-y-auto">
          <div className="pr-4">
            <h2 className="min-[1200px]:text-[32px] min-[800px]:text-[24px] text-[18px] font-bold text-[#3D3D3D] mb-6">
              Bone Marrow Transplant for Autoimmune Diseases at Ramaiah Memorial
              Hospital
            </h2>
            <p className="min-[1200px]:mt-[24px] mt-[16px] text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium leading-relaxed">
              At Ramaiah Memorial Hospital, we are dedicated to delivering
              exceptional care and expertise in performing Bone Marrow
              Transplants for patients suffering from autoimmune disorders. Our
              specialized team of medical professionals utilizes advanced
              techniques and state-of-the-art technology to ensure the highest
              standards of treatment and patient safety.
            </p>
            <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium leading-relaxed">
              We understand the complexities of autoimmune conditions and work
              closely with each patient to develop personalized treatment plans,
              providing comprehensive support throughout their healing journey.
              With a commitment to excellence, we strive to improve the quality
              of life for our patients and help them regain their health.
            </p>
            <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium leading-relaxed">
              We focus on conditions such as Multiple Sclerosis (MS), Refractory
              Rheumatoid Arthritis (RRA), and Systemic Lupus Erythematosus
              (SLE), especially after relapses from other standard treatments,
              to ensure our patients receive the best possible care and
              treatment. This treatment often involves a supportive hospital
              stay of three to four weeks, where patients can feel confident and
              reassured in the expert care they will receive.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium leading-relaxed">
          At our centre, the myeloablative transplant procedure for Multiple
          Sclerosis offers a unique advantage. This method uses higher
          chemotherapy doses than non-myeloablative transplants to better
          suppress the patient’s overactive immune response. Consequently, these
          patients’ neurological disabilities are likely to stabilize over time,
          greatly enhancing their quality of life. The potential for an improved
          quality of life instils a strong sense of encouragement and unwavering
          hope in our patients.
        </p>
        <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium leading-relaxed">
          In myeloablative transplants for Multiple Sclerosis, we employ
          necessary conditioning and medications that effectively destroy the
          patient’s overactive immune system, thereby stabilizing the
          neurological condition. During the transplantation process, we check
          the organs’ function and determine if the patient is suitable for the
          transplant. Stem cells should be collected from the patient’s
          peripheral veins without any invasive procedures, stored separately,
          and cryo-preserved in a deep freezer to ensure they remain viable for
          later use.
        </p>
      </div>
      <div>
        <BoneMarrowTransplantPart2 />
      </div>
    </div>
  );
};

export default BoneMarrowTransplant;
