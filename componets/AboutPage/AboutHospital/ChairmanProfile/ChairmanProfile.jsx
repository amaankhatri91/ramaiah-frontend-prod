import Image from "next/image";

const ChairmanProfile = () => {
  return (
    <div className="container min-[1200px]:pt-[57px] min-[800px]:pt-[35px] pt-[25px]">
      <div className="bg-[radial-gradient(247.77%_202.26%_at_46.45%_-32.32%,_#FFF_33.84%,_#EEF9FF_97.64%)] shadow-[3.987px_11.962px_27.911px_rgba(0,0,0,0.06)] rounded-[40px] min-[1200px]:p-8 min-[800px]:p-6">
        <div className="p-4 pb-0 grid grid-cols-1 min-[1211px]:grid-cols-[35%_60%] min-[1410px]:grid-cols-[30%_70%] gap-8  items-stretch">
          {/* Image Section */}
          <div className="hidden min-[1211px]:block w-full aspect-[4/5] min-[768px]:aspect-[3/4] min-[1100px]:aspect-[4/5] min-[1410px]:aspect-[3/4] relative rounded-[32px] overflow-hidden">
            <Image
              src="/assets/chairman.svg"
              alt="Dr. M. R. Jayaram"
              fill
              className="object-cover object-center rounded-[32px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 35vw, (max-width: 1410px) 30vw, 25vw"
              priority
            />
          </div>

          <div className="min-[1211px]:hidden relative min-[500px]:h-[400px] h-[380px] min-[500px]:w-[300px] w-full">
            <Image
              src="/assets/chairman.svg"
              alt="Dr. M. R. Jayaram"
              fill
              className="object-cover object-center rounded-[32px]"
              //   sizes="(max-width: 768px) 100vw, (max-width: 1100px) 35vw, (max-width: 1410px) 30vw, 25vw"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="text-gray-800 h-full">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="Text-color2 min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold">
                DR. M. R. JAYARAM
              </span>
              <span className="block min-[1200px]:text-[24px] text-[18px] font-bold text-[#3D3D3D min-[1200px]:mt-[10px] mt-[8px]">
                (Chairman)
              </span>
            </h2>

            <h5 className="font-semibold min-[1200px]:text-[20px] text-[16px] min-[1200px]:mt-[20px] mt-[15px] text-[#3D3D3D]">
              Dr.M R Jayaram is the chairman of Gokula Education Foundation and
              Gokula
            </h5>

            <div className="">
              <p className="mt-4 space-y-4 min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium  ">
                Dr. M R Jayaram is the chairman of Gokula Education Foundation
                and Gokula Education Foundation (Medical) which manages the
                Ramaiah Group of Institutions. Continuing with his late father M
                S Ramaiah’s legacy, he added many additional institutions to the
                group, transforming it into a global destination for education
                and health care. He believed in ‘Inclusive Excellence & Growth,’
                which revolutionized education and the development of modern
                India.
              </p>
              <p className="mt-4 space-y-4 min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium  ">
                Dr. M R Jayaram defines himself as “Destiny’s Child,” and says
                that “giving back to society is his mission.” This has made
                Ramaiah a preferred destination for students from all over India
                and outside, particularly for those who seek Medical and
                Engineering Education. His vision in imparting education and
                qualitative research has resulted in the group collaborating
                with top premier universities across the world.
              </p>
              <p className="mt-4 space-y-4 min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium  ">
                He is a highly spiritual and ardent devotee of Kaiwara Tataiah
                at Sri Kshethra Kaiwara. He is the Dharmadhikari of Yogi
                Narayana Yathindrara Ashrama at Kaiwara and the Convener for
                Alambagiri Sree Venkataramanaswamy temple.
              </p>
              <p className="hidden min-[1410px]:block mt-4 space-y-4 min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium">
                He was awarded an Honorary Doctorate by Coventry University,
                United Kingdom, in 2006, and by the University of Illinois,
                Chicago, USA, in 2021, for his exemplary leadership role in
                promoting education and global research.
              </p>
              <p className="hidden min-[1410px]:block mt-4 space-y-4 min-[1200px]:text-[16px] text-[14px] text-[#414049] font-medium">
                To add another feather to his remarkable career, the Federation
                of Karnataka Chambers of Commerce and Industry (FKCCI) conferred
                him with the renowned “Sir M Visvesvaraya Memorial Award” in the
                presence of His Excellency Shri M Venkaiah Naidu, Hon’ble Vice
                President of India, in the year 2021.
              </p>
            </div>
          </div>
        </div>
        <p className="min-[1410px]:hidden w-full px-4 min-[1200px]:text-[16px] text-[#414049] text-[14px] font-medium mt-4">
          He was awarded an Honorary Doctorate by Coventry University, United
          Kingdom, in 2006, and by the University of Illinois, Chicago, USA, in
          2021, for his exemplary leadership role in promoting education and
          global research.
        </p>
        <p className="min-[1410px]:hidden w-full mt-4 px-4 min-[1200px]:text-[16px] text-[14px] font-medium text-[#414049] pb-4">
          To add another feather to his remarkable career, the Federation of
          Karnataka Chambers of Commerce and Industry (FKCCI) conferred him with
          the renowned “Sir M Visvesvaraya Memorial Award” in the presence of
          His Excellency Shri M Venkaiah Naidu, Hon’ble Vice President of India,
          in the year 2021.
        </p>
      </div>
    </div>
  );
};

export default ChairmanProfile;
