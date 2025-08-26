import React from "react";
import Image from "next/image";
import ChronicPancreatitis from "../ChronicPancreatitis/ChronicPancreatitis";

const AcutePancreatitis = () => (
  <div className="container">
    <div className=" flex flex-col md:flex-row md:items-stretch gap-6">
      {/* Image Section */}
      <div className="flex-shrink-0 min-[1400px]:h-[340px] min-[768px]:h-[380px] min-[1400px]:w-[340px] min-[768px]:w-[380px] w-full h-[340px]">
        <Image
          src="/assets/AcutePancreatitis.svg"
          alt="Acute Pancreatitis"
          width={140}
          height={140}
          className="rounded-[24px] object-cover h-full w-full"
        />
      </div>
      {/* Content Section */}
      <div className="flex-1 h-auto md:h-[380px] md:overflow-y-auto pr-2">
        <div className="min-[1345px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D]">
          <h2>
            Acute <span className="Text-color2">Pancreatitis</span>
          </h2>
        </div>
        <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] font-medium min-[1200px]:mt-[24px] mt-[16px]">
          Acute pancreatitis refers to inflammation of the pancreas that occurs
          suddenly and is frequently accompanied by significant intermittent
          upper abdominal pain that can be prolonged for several days.
        </p>
        <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] font-medium mt-[16px]">
          Common causes of acute pancreatitis include alcohol intake, stones in
          the gall bladder, certain genetic disorders and even a few drugs have
          been known to cause acute pancreatitis.
        </p>
        <p className="text-[#3A3A3A] min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] font-medium mt-[16px]">
          Though most patients with acute pancreatitis recover completely, a
          proportion of patients require long-term follow-up in high-risk
          clinics for pancreas in order to look for early changes of chronic
          pancreatitis which will necessitate a different line of management.
        </p>
      </div>
    </div>
    <ChronicPancreatitis />
  </div>
);

export default AcutePancreatitis;
