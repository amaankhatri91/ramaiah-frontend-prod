import Image from "next/image";
import React from "react";

const BoneMarrowTransplantPart2 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-[1400px]:h-[610px] min-[1024px]:h-[500px] mt-[16px]">
        {/* Content Section */}
        <div className="order-2 lg:order-1 flex flex-col min-[1400px]:h-[610px] min-[1024px]:h-[500px] overflow-y-auto">
          <div className="pr-4">
            <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium ">
              High doses of chemotherapy (called BEAM conditioning) is followed
              by anti-thymocyte globulin (ATG) to suppress the patient’s immune
              system. Since the good cells also get destroyed in the process,
              the previously collected stem cells are re-infused into the
              patient’s body. During this period of chemotherapy followed by
              re-infusion, patients are usually stable but may experience side
              effects after 10-12 days of the chemotherapy. Patients may also
              require blood and platelet transfusions to support their blood
              count.
            </p>
            <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium ">
              The patients start showing signs of recovery after the re-infused
              stem cells begin to function, blood counts increase, and the side
              effects resolve. The patient is then ready to go home. Our
              dedicated Hematology / Oncology and BMT team passionately supports
              our patients, following up regularly to ensure they’re recovering
              well, enjoying nutritious meals, and staying healthy and
              infection-free.
            </p>
            <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium ">
              Ramaiah Memorial Hospital has a long history of treating various
              hematological disorders through Bone Marrow Transplants. At
              Ramaiah Memorial Hospital, we have been performing advanced
              procedures for patients with haematological cancers and bone
              marrow failure syndromes, in both adult and paediatric settings.
            </p>
            <p className="text-[#414049] mt-[16px] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] font-medium ">
              While bone marrow transplants were primarily developed to treat
              haematological disorders, our work encompasses a wider range of
              treatments. Auto transplant for Multiple Sclerosis (MS) is a new
              kind of treatment that we have gained expertise in the last few
              years. Our objective is to increase treatment accessibility for
              more patients with multiple sclerosis, enabling them to benefit
              significantly from this innovative therapy.
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="order-1 lg:order-2 min-[1400px]:h-[610px] min-[1024px]:h-[500px] flex items-center">
          <Image
            src="/assets/Dr-bone-marrow2.svg"
            alt="Bone Marrow Transplant"
            width={532}
            height={438}
            className="object-cover w-full h-full max-h-[610px] rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BoneMarrowTransplantPart2;
