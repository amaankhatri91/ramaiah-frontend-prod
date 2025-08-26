import Image from "next/image";

const ExecutiveCard = () => {
  return (
    <div className="container min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px]">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-9 bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,_#FFF_33.84%,_#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_rgba(0,0,0,0.06)] rounded-[40px] min-[1200px]:p-[40px] min-[800px]:p-[20px] p-[16px]">
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/ChiefExecutive.svg"
              alt="M. R. Sreenivasa Murthy"
              width={324}
              height={324}
              className="object-cover w-auto h-[324px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-2 flex-3/4">
          <h2 className="Text-color2 min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold">
            M. R. SREENIVASA MURTHY
          </h2>
          <p className="min-[1200px]:text-[24px] text-[18px] font-bold text-[#3D3D3D min-[1200px]:mt-[10px]">
            (Chief Executive)
          </p>
          <p className="min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium min-[800px]:mt-4 mt-2 pb-3">
            At Ramesh Hospitals, we are guided by the motive to provide
            affordable and quality care for all. We feel privileged to serve our
            patients with our highly qualified team of clinicians, nurses, and
            support staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCard;
