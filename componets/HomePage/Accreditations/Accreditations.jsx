import Image from "next/image";

const accreditations = [
  {
    img: "/assets/joint-comission.svg",
    alt: "Stroke Association",
  },
  {
    img: "/assets/AmericanHeartAssociation.svg",
    alt: "JCI Accreditation",
  },
  {
    img: "/assets/AmericanHeartAssociation.svg",
    alt: "Heart Association",
  },
  {
    img: "/assets/NABH.svg",
    alt: "NABH Accreditation",
  },
];

export default function Accreditations() {
  return (
    <section className=" min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
      <div className="container">
        <div className=" min-[800px]:mb-10 mb-5">
          <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D]">
            Our <span className="Text-color2">Accreditations</span> &
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center items-start">
          {accreditations.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.img}
                alt={item.alt}
                width={324}
                height={204}
                className="mb-4 min-[800px]:h-[200px] h-[150px] min-[800px]:w-[200px] w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
