import Image from "next/image";

const BoneMarrowSystemic = () => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Content Section (Fixed height with scroll) */}
        <div className="order-2 lg:order-1 lg:h-[425px] overflow-y-auto pr-2">
          <div className="flex items-center mb-3">
            <Image
              src="/assets/dots.svg"
              alt="Dots Icon"
              width={24}
              height={24}
              className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
            />
            <h3 className="ml-4 min-[1200px]:text-[20px] min-[800px]:text-[18px] text-[16px] font-bold text-[#3D3D3D]">
             Systemic Lupus Erythematosus (SLE)
            </h3>
          </div>

          <p className="min-[1200px]:text-[16px] pl-11 min-[800px]:text-[14px] text-[12px] text-[#414049] leading-relaxed">
            This autoimmune disorder can lead to widespread inflammation and
            damage to tissues in the joints, heart, skin, lungs, brain, blood,
            and kidneys. The symptoms and severity of Lupus vary among
            individuals, depending on the organs and systems affected and
            damaged.
          </p>
          <p className="mt-3 min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] text-[#414049] leading-relaxed">
            Diagnosing Lupus can be challenging due to its impact on various
            organs and diverse symptoms like fever, swollen glands, mouth
            sores, seizures, anaemia, and heart or kidney problems.
          </p>
          <p className="mt-3 min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[12px] text-[#414049] leading-relaxed">
            Understanding this complexity is essential! While autoimmune
            disorders can’t be cured, with proactive management and treatment,
            we can significantly reduce flare-ups and protect our organs from
            serious damage. Let’s embrace this journey together!
          </p>
        </div>

        {/* Right Image Section (Fixed height) */}
        <div className="order-1 lg:order-2 relative min-[1024px]:h-[425px] h-[350px] w-full rounded-[40px] overflow-hidden">
          <Image
            src="/assets/Bone-Marrow-feture2.svg"
            alt="Bone Marrow Transplantation Process"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BoneMarrowSystemic;
