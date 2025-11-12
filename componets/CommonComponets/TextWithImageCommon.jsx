import React from "react";
import Image from "next/image";

const TextWithImageCommon = ({ title = "", paragraphs = [], image, alt = "" }) => {
    if (!paragraphs?.length && !image) return null;

    return (
        <div className="container   rounded-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
                <div className="md:col-span-7 md:order-1 order-2 h-full md:max-h-[440px] bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[40px] overflow-y-auto p-[36px] space-y-4">
                    {paragraphs?.map((para, idx) => (
                        <p
                            key={idx}
                            className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
                        >
                            {para}
                        </p>
                    ))}
                </div>

                <div className="md:col-span-5 md:order-2  order-1 w-full">
                    <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
                        {image ? (
                            <Image src={image} alt={alt || ""} fill className="object-cover rounded-[40px] shadow-md " />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextWithImageCommon;


