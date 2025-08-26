import Image from "next/image";
import Link from "next/link";
import React from "react";

const Appointment = () => {
  return (
    <>
      <div
        className="hidden lg:block bg-white rounded-bl-[40px] rounded-br-[40px] relative top-[-24px]"
        style={{
          boxShadow: "3.987px 11.962px 27.911px 0 rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="flex container flex-wrap justify-between items-center ">
          {/* Book Appointment */}
          <Link href={"https://msrmh.com/appointment/booking.php"}>
            <div className="flex flex-col items-center ">
              <Image
                src="/assets/book-appointment.svg"
                alt="book-appointments"
                width={64}
                height={64}
              />
              <span className="mt-2 text-center font-semibold text-[#3D3D3D] text-[16px] hover:text-[#e14b8b]">
                Book Appointment
              </span>
            </div>
          </Link>

          {/* Book Video Consultation */}
          <Link href={"https://msrmh.com/appointment/video_consultation.php"}>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/book-video-consultation.svg"
              alt="book-video-consultation"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center font-semibold text-[#3D3D3D] text-[16px] hover:text-[#e14b8b]">
              Book Video Consultation
            </span>
          </div>
          </Link>

          {/* Highlighted Center Button */}
          <div className="relative !top-[-40px] z-10 sm:top-0 sm:w-auto sm:order-none order-first">
            <div className="flex flex-col Background-color items-center justify-center w-[327px] rounded-[24px] text-[#FFFFFF] h-[137px] mx-auto">
              <div
                className="absolute flex items-center justify-center top-[-48px]"
                style={{
                  backgroundImage: "url('/assets/Ellipse.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "86px",
                  width: "86px",
                  zIndex: 10,
                  padding: "1rem",
                }}
              >
                <Image
                  src="/assets/book-ramaiah-prime.svg"
                  alt="book-ramaiah-prime"
                  width={64}
                  height={64}
                />
              </div>

              <div className="text-center text-[18px] font-bold mt-[16px] px-10">
                Book Ramaiah Prime Clinic Appointment
              </div>
            </div>
          </div>

          {/* Book Lab Tests */}
          <Link href={"https://msrmh.com/"}>
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-lab-tests.svg"
              alt="book-lab-tests"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center text-[16px] text-[#3D3D3D] font-semibold hover:text-[#e14b8b]">
              Book Lab Tests
            </span>
          </div>
          </Link>

          {/* Book Radiology */}
          <Link href={"https://msrmh.com/"}>
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-radiology.svg"
              alt="book-radiology"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center text-[16px] text-[#3D3D3D] font-semibold hover:text-[#e14b8b]">
              Book Radiology
            </span>
          </div>
          </Link>
        </div>
      </div>

      {/* Mobile View (<1024px) */}
      <div className="block lg:hidden bg-[#f5f7f9] rounded-bl-[40px] rounded-br-[40px] px-4 py-6">
        {/* Highlighted Center Button */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center justify-center w-[327px] h-[137px] rounded-[24px] Background-color text-[#FFFFFF] relative">
            <div
              className="absolute top-[-52px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/assets/Ellipse.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "86px",
                width: "86px",
                padding: "1rem",
                zIndex: 10,
              }}
            >
              <Image
                src="/assets/book-ramaiah-prime.svg"
                alt="book-ramaiah-prime"
                width={64}
                height={64}
              />
            </div>
            <div className="text-center text-[16px] font-bold mt-[16px] px-10">
              Book Ramaiah Prime Clinic Appointment
            </div>
          </div>
        </div>

        {/* 4 Options in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6 place-items-center">
          {/* Book Appointment */}
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-appointment.svg"
              alt="book-appointments"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center text-[11px] text-[#3D3D3D]">
              Book Appointment
            </span>
          </div>

          {/* Book Video Consultation */}
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-video-consultation.svg"
              alt="book-video-consultation"
              width={64}
              height={64}
            />
            <div className="mt-2 text-[#3D3D3D]  text-[11px]">
              Book Video Consultation
            </div>
          </div>

          {/* Book Lab Tests */}
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-lab-tests.svg"
              alt="book-lab-tests"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center text-[11px] text-[#3D3D3D]">
              Book Lab Tests
            </span>
          </div>

          {/* Book Radiology */}
          <div className="flex flex-col items-center text-gray-700">
            <Image
              src="/assets/book-radiology.svg"
              alt="book-radiology"
              width={64}
              height={64}
            />
            <span className="mt-2 text-center text-[11px] text-[#3D3D3D]">
              Book Radiology
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
