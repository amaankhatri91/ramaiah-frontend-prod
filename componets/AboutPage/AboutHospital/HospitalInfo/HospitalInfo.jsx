import Image from "next/image";
import React from "react";

const HospitalInfo = () => {
  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
      <section className="flex flex-col lg:flex-row justify-between gap-8 ">
      
        {/* Image Container with Fixed Height */}
        <div className="flex-shrink-0 w-full lg:w-1/2 rounded-2xl overflow-hidden min-[1200px]:h-[471px]">
          <Image
            src="/assets/about-hospital-section2.svg"
            alt="Hospital Equipment"
            className="object-cover w-full h-full"
            width={600}
            height={471}
          />
        </div>

        <div className="flex-1 text-[#414049] space-y-4 min-[1200px]:text-[16px] text-[14px] font-medium">
          <p>
            Ramaiah Memorial Hospital located in the Garden
            City of Bengaluru has been recognized as a leading one-stop solution
            to offer high-quality, patient-centric care at an affordable cost.
          </p>
          <p>
            We believe in a holistic approach, and our goal is to create a haven
            that spreads compassion, warmth, congeniality & care not merely
            treat ailments.
          </p>
          <p>
            We continually aim to upgrade ourselves to the latest technology and
            progress in medical care to deliver unparalleled service to our
            patients, with a team of dedicated Doctors, Nurses, and Allied
            experts whose competency is backed by cutting-edge equipment and
            techno-sharp amenities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HospitalInfo;
