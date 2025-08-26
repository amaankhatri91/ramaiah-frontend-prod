import Image from "next/image";
import React from "react";

const InternationalPatientServices = () => {
  return (
    <div className="container bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,#FFF_33.84%,#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-[25px] rounded-[40px]">
      {/* <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
        <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
          Overview
        </h2>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
        {/* Text Content with Scroll */}
        <div className="md:col-span-7 md:order-1 order-2 h-full md:max-h-[380px] overflow-y-auto pr-4 pb-2 space-y-4">
            <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D]">International Patient Services</h2>
          <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium">
            Ramaiah Memorial Hospital is renowned for its world class patient
            centric care and continues to be a favourite with international
            patients and their care providers. Over the past decade, we have
            successfully provided best in class specialized care and treatment
            to international patients from over 30 countries.
          </p>
          <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium">
            Building on our good work, we have dedicated ourselves to offer the
            best-in-class, affordable patient centric care by investing in
            latest technologies, equipment and learning (through our dedicated
            medical college).
          </p>
          <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium">
            We are committed to creating a disease free world, where people can
            enjoy life, living to their fullest potential.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 md:order-2 order-1 w-full">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[380px]">
            <Image
              src="/assets/international-patient-services.svg"
              alt="International Patient Services"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalPatientServices;
