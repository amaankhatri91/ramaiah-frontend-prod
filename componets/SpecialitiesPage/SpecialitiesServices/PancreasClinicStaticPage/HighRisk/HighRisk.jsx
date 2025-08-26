import Image from "next/image";
import React from "react";

const HighRisk = () => {
  return (
    <div className="min-[1200px]:mt-[60px] min-[800px]:mt-[30px] mt-[20px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6 mt-[16px]">
        {/* Left image - 25% */}
        <div className="lg:col-span-3 order-1 lg:order-2 w-full h-full flex items-center">
          <Image
            src="/assets/High-Risk.svg"
            alt="High Risk"
            width={800}
            height={800}
            className="w-full object-cover min-[1024px]:h-auto min-[700px]:h-[500px] h-[360px] rounded-[24px]"
            // sizes="(min-width: 768px) 25vw, 100vw"
            priority
          />
        </div>

        {/* Content - 75% with a right image inside */}
        <div className="lg:col-span-9 order-2 lg:order-1 pr-2">
          <div className="min-[1345px]:text-[48px] min-[800px]:text-[40px] text-[22px] font-bold text-[#3D3D3D]">
            <h2>
              <span className="Text-color2">High-Risk</span> Pancreas Clinic
            </h2>
          </div>
          <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] min-[1200px]:mt-[24px] mt-[16px] font-medium">
            Chronic pancreatitis is a disease that causes permanent damage to
            the pancreas resulting in progressive deterioration of pancreatic
            function over time. Chronic pancreatitis may present with an acute
            episode of pancreatitis at first and might be mistaken for acute
            pancreatitis because the symptoms are similar.
          </p>
          <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] font-medium mt-[16px]">
            A thorough evaluation by an expert in pancreatic disorders is
            essential. In the long term patients with chronic pancreatitis can
            have weight loss, oily stools, diabetes with poorly controlled
            sugars, malnutrition with vitamin deficiency and chronic abdominal
            pain. The most dreaded complication of chronic pancreatitis is
            pancreatic cancer. All patients of chronic pancreatitis require
            regular medical check-up with an expert in pancreatic diseases in
            order to screen for malignancies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighRisk;
