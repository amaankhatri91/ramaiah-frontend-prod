import Image from "next/image";

const ScopeOfServices = () => {
  const services = [
    {
      title: "Conservative Dentistry & Endodontics",
      services: [
        "Root canal treatment",
        "Smile designing",
        "Veneers",
        "Crowns",
        "Tooth coloured Fillings",
        "Bleaching",
      ],
    },
    {
      title: "Periodontics",
      services: [
        "Scaling and root planning",
        "Bone augmentation and soft tissue grafting",
        "Advanced gum treatment assisted with laser",
        "De-pigmentation with laser",
        "Splinting",
      ],
    },
    {
      title: "Oral & Maxillofacial Surgery",
      services: [
        "Simple and complex extractions",
        "Surgical impactions",
        "Fracture fixation/cyst enucleation",
        "Biopsy",
      ],
    },
    {
      title: "Prosthodontics",
      services: [
        "Implants for missing teeth",
        "Implant supported dentures",
        "Flexible dentures",
        "Cast partial dentures",
        "Full mouth rehabilitation",
      ],
    },
    {
      title: "Orthodontics",
      services: [
        "Correction of malalignment with fixed orthodontic braces",
        "Aligners",
        "Removable appliances",
        "Functional appliances",
      ],
    },
    {
      title: "Pedodontics",
      services: [
        "Preventive & restorative treatment for children",
        "Fluoride application",
        "Space maintainer",
        "Habit breaking appliance",
        "Surgical procedure under GA",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="">
        {/* Title Section */}
        <div className="min-[1200px]:mb-[32px] mb-[20px]">
           <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
              <span className="Text-color2 ">Scope</span> Of Services
            </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1200px]:gap-8 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-[40px] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] cursor-pointer p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="min-[1200px]:text-[18px] text-[16px] font-bold text-[#3D3D3D] mb-4 leading-tight">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.services.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center font-medium text-[#414049] min-[1200px]:text-[16px] text-[13px]"
                  >
                   
                    <Image
                      src="/assets/01-align-center.svg"
                      alt="01-align-center"
                      width={16}
                      height={16}
                      className="mr-2 h-[13px] w-[13px]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeOfServices;
