import React from 'react'
import Image from 'next/image'

const RadioDiagnosisStatic = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Image - 25% */}
        <div className="md:col-span-3 order-1 md:order-1 w-full h-full flex items-center">
          <Image
            src="/assets/RadioDiagnosis.svg"
            alt="Radiodiagnosis"
            width={800}
            height={800}
            className="w-full h-auto max-h-[240px] md:max-h-[260px] object-contain rounded-[24px]"
            sizes="(min-width: 768px) 25vw, 100vw"
            priority
          />
        </div>

        {/* Content - 75% */}
        <div className="md:col-span-9 order-2 md:order-2 pr-2">
          <div className="min-[1345px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold text-[#3D3D3D]">
            <h2>
              <span className="Text-color2">Highlights</span> of Dept.
            </h2>
          </div>
          <p className="text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium min-[1200px]:mt-[16px] mt-[12px]">
            A wide range of facilities are available in the department besides routine imaging and contrast
            investigations. Special investigations like musculoskeletal ultrasonography, CT angiography and imaging
            guided procedures are performed.
          </p>
          <p className="text-[#3A3A3A] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium mt-[12px]">
            The modern model and equipment facilities available at our institute and department are as follows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RadioDiagnosisStatic
