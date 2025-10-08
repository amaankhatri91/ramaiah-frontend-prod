import React from "react";
import Image from "next/image";
import { contentBlocks } from "@/componets/ServiceData/Overview";
import { useHomePage } from "@/lib/hooks";

const Ourjournyhome = ({ slug }) => {
    const { data } = useHomePage();

    // Extract Journey section data from API response
    const journeySection = data?.data?.sections?.find(section => section.section_type === "journey");
    const contentBlocks = journeySection?.content_blocks || [];
    
    // Sort content blocks by display_order
    const sortedContentBlocks = [...contentBlocks].sort((a, b) => a.display_order - b.display_order);
    
    // Get the main content block
    const mainContentBlock = sortedContentBlocks.find(block => block.block_type === "text");
    
    // Get media files for image
    const imageFile = mainContentBlock?.media_files?.[0];

    // Fallback content
    const fallbackTitle = "Our Journey";
    const fallbackContent = "We are always indebted to Our Founder DR. M S Ramaiah, a visionary who built Institutions that redefined learning. It was his dream to impart Technical and Medical education to all, that made him establish two prestigious institutions, M S Ramaiah Institute of Technology (1962) and Ramaiah Medical College (1979). These are presently considered major hubs for education in the country. He believed that investment in education was the way forward for the development & progress of the nation. His thoughts & spirit have been the driving force for the Ramaiah Group of Institutions to uphold his values and spiritual thoughts for the future. Dr.M S Ramaiah said What we have done for ourselves alone, dies with us. What we have done for others and the world remains, and is immortal.His vision was to build numerous educational institutions which paved the way for us in building the nation. Today under the umbrella of the Ramaiah Group there are more than 30 educational institutions. One of his dream projects was to establish a hospital that delivered high-quality healthcare to all sections of society at an affordable cost in the most ethical way. In 2004, this dream transformed to the establishment of Ramaiah Memorial Hospital.";
    const fallbackImage = "/assets/sardarrahmaih.svg";

    return (
        <div className="container min-[1300px]:pt-[100px] min-[800px]:pt-[50px] pt-[30px]">
            <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
                <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
                {journeySection?.content_blocks[0]?.title}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
                {/* Text Content with Scroll */}
                <div className="md:col-span-7 md:order-1 order-2  pr-4  space-y-4 Background-color2 rounded-[30px] p-[15px] md:p-[30px] w-full md:h-[600px] md:overflow-y-auto">

                    <p
                        className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
                    >
                        {journeySection?.content_blocks[1]?.content }
                    </p>

                </div>

                {/* Image Content */}
                <div className="md:col-span-5 md:order-2 order-1 w-full">
                    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px]">
                        <Image
                            // src={journeySection?.content_blocks[2]?.media_files?.[0]?.file_url ? 
                            //     journeySection.content_blocks[2].media_files[0].file_url : 
                            //     fallbackImage
                            // }
                            src={fallbackImage}
                            alt={journeySection?.content_blocks[2]?.media_files?.[0]?.alt_text || "Our journey home"}
                            fill
                            className="object-cover rounded-[40px] shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourjournyhome;
