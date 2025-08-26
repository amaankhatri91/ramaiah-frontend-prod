import React from "react";
import Image from "next/image";
import BoneMarrowSystemic from "../BoneMarrowSystemic/BoneMarrowSystemic";

const BoneMarrowPage = () => {
  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
      <div className="rounded-[40px] min-[1200px]:p-8 min-[800px]:p-6 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Single Image */}
          <div className="relative min-[1024px]:h-full min-[800px]:h-[500px] h-[300px] rounded-[40px] overflow-hidden">
            <Image
              src="/assets/Bone-Marrow-feture1.svg"
              alt="Bone Marrow Transplantation Process"
              fill
              className="object-cover rounded-[32px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>

          {/* Right Column - Content (stretches to match image height) */}
          <div className="flex flex-col justify-between ">
            <div className="space-y-6">
              <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D]">
                Features
              </h2>

              <p className="min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] text-[#414049] leading-relaxed">
                Living with autoimmune disorders such as Multiple Sclerosis
                (MS), Systemic Lupus Erythromatosus (SLE), or Rheumatoid
                Arthritis (RA) can be incredibly challenging. It's important to
                recognize the struggles faced by those affected, as these
                conditions can profoundly impact everyday life. Your experiences
                and feelings are valid, and seeking support can make a
                meaningful difference.
              </p>

              <div className="space-y-6">
                {/* General Anaesthesia Section */}
                <div className="">
                  <div className="flex">
                    <Image
                      src="/assets/dots.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
                    />
                    <h3 className="ml-[16px] min-[1200px]:text-[20px] min-[800px]:text-[18px] text-[16px] font-bold text-[#3D3D3D] mb-3">
                      General Anaesthesia
                    </h3>
                  </div>
                  <div>
                    <p className="min-[1200px]:text-[16px] min-[800px]:text-[14px] pl-11 text-[12px] text-[#414049] leading-relaxed">
                      This autoimmune disease affects the brain and spinal cord
                      when the immune system mistakenly attacks the myelin
                      cells. These cells serve as protective sheaths that
                      surround the nerves in the brain and spinal cord.
                    </p>
                    <p className="min-[1200px]:text-[16px] min-[800px]:text-[14px] pl-11 text-[12px] text-[#414049] leading-relaxed mt-3">
                      Damage to these cells disrupts the signals nerves send to
                      the body, affecting functions like movement, vision, and
                      sensation.Multiple sclerosis can manifest through various
                      signs, such as vision changes, numbness, fatigue, muscle
                      weakness, cognitive challenges, and bladder
                      irregularities. Episodes of remission can occur when
                      treatment successfully alleviates symptoms, highlighting
                      the importance of effective medical care.
                    </p>
                  </div>
                </div>

                {/* Rheumatoid Arthritis Section */}
                <div className="">
                  <div className="flex">
                    <Image
                      src="/assets/dots.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
                    />
                    <h3 className="ml-[16px] min-[1200px]:text-[20px] min-[800px]:text-[18px] text-[16px] font-bold text-[#3D3D3D] mb-3">
                      Rheumatoid Arthritis (RA)
                    </h3>
                  </div>
                  <div>
                    <p className="min-[1200px]:text-[16px] min-[800px]:text-[14px] pl-11 text-[12px] text-[#414049] leading-relaxed">
                      Rheumatoid arthritis is a chronic autoimmune condition
                      that leads to swelling, stiffness, and pain in the joints.
                      It often affects the fingers, wrists, hands, ankles,
                      knees, toes, and feet. Inflammation in the joints damages
                      the cartilage, which serves as a shock absorber, leading
                      to deformities in these joints.
                    </p>
                    <p className="min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] text-[#414049] leading-relaxed mt-3 pl-11">
                      The bones begin to erode, which can lead to joint fusion.
                      In addition to affecting joints, Rheumatoid Arthritis can
                      also impact the skin, mouth, lungs, eyes, and heart. This
                      condition typically develops between the ages of 30 and
                      60. Starting treatment for Rheumatoid Arthritis quickly
                      after diagnosis is essential to prevent permanent joint
                      damage. Initially, the treatment aims to minimize joint
                      pain and swelling while improving joint function. The
                      long-term objective is to prevent further damage to the
                      joints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BoneMarrowSystemic />
    </div>
  );
};

export default BoneMarrowPage;
