import Image from "next/image";

const galleryData = [
  {
    title: "1 Billion Vaccine Jabs Celebrations",
    images: [
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 1",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 2",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 3",
      },
    ],
  },
  {
    title: "Christmas Day Celebrations",
    images: [
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 1",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 2",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 3",
      },
    ],
  },
  {
    title: "Dialysis extension at Ramaiah Leena",
    images: [
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 1",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 2",
      },
      {
        src: "/assets/Celebrations.svg",
        alt: "Celebration 3",
      },
    ],
  },
];

const Celebration = () => {
  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
      <div>
        {galleryData.map((section, index) => (
          <div key={index} className="p-4 mb-8">
            <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold Text-color2 mb-4">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {section.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
