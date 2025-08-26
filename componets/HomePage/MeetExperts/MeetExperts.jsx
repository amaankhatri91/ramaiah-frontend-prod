"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experts = [
  {
    title: "Oncosciences",
    video: "https://www.w3schools.com/howto/rain.mp4",
    description: [
      "The Ramaiah Institute of Oncosciences, a Center of Excellence at Ramaiah Memorial Hospital, is a state-of-the-art, ultramodern facility that prides itself in providing a most Comprehensive Cancer Care under one roof where a renowned team of expert clinicians comprising of medical oncologists, surgical oncologists, radiation oncologists, haemato-oncologists and nuclear medicine experts comes together to ensure complete cancer care from preventive to diagnostic, to therapeutic, to palliative and to rehabilitative perspective for all our patients.",
      "The team of expert clinicians at the Ramaiah Institute of Oncosciences works towards preventing, diagnosing, and treating cancer by offering the most advanced and evidence-based treatment protocols and customized multi-modality therapies backed by advanced, cutting-edge medical technologies and world-class infrastructure. It merges the vital aspects of quality-of-life-oriented patient care goals through palliation, life prolongation, and cure by understanding cancer development, diagnosis, treatment, and prevention, thereby enabling the most appropriate conditions to fight and defeat cancers of all kinds.",
      "The team of expert clinicians at the Ramaiah Institute of Oncosciences works towards preventing, diagnosing, and treating cancer by offering the most advanced and evidence-based treatment protocols and customized multi-modality therapies backed by advanced, cutting-edge medical technologies and world-class infrastructure. It merges the vital aspects of quality-of-life-oriented patient care goals through palliation, life prolongation, and cure by understanding cancer development, diagnosis, treatment, and prevention, thereby enabling the most appropriate conditions to fight and defeat cancers of all kinds.",
    ],
  },
  {
    title: "Cardiology",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: [
      "Our Cardiology department offers comprehensive heart care with a team of experienced cardiologists and state-of-the-art technology.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
    ],
  },
  {
    title: "Oncosciences",
    video: "https://www.w3schools.com/howto/rain.mp4",
    description: [
      "The Ramaiah Institute of Oncosciences, a Center of Excellence at Ramaiah Memorial Hospital, is a state-of-the-art, ultramodern facility that prides itself in providing a most Comprehensive Cancer Care under one roof where a renowned team of expert clinicians comprising of medical oncologists, surgical oncologists, radiation oncologists, haemato-oncologists and nuclear medicine experts comes together to ensure complete cancer care from preventive to diagnostic, to therapeutic, to palliative and to rehabilitative perspective for all our patients.",
      "The Ramaiah Institute of Oncosciences, a Center of Excellence at Ramaiah Memorial Hospital, is a state-of-the-art, ultramodern facility that prides itself in providing a most Comprehensive Cancer Care under one roof where a renowned team of expert clinicians comprising of medical oncologists, surgical oncologists, radiation oncologists, haemato-oncologists and nuclear medicine experts comes together to ensure complete cancer care from preventive to diagnostic, to therapeutic, to palliative and to rehabilitative perspective for all our patients.",
    ],
  },
  {
    title: "Cardiology",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: [
      "Our Cardiology department offers comprehensive heart care with a team of experienced cardiologists and state-of-the-art technology.",
      "We provide advanced diagnostics, interventional procedures, and rehabilitation for a wide range of cardiac conditions.",
    ],
  },
];

const MeetExperts = () => {
  return (
    <div className="container select-none">
      <div>
        <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] min-[1200px]:pt-[80px] min-[800px]:pt-[50px] pt-[30px] font-bold text-center">
          Choose A Speciality{" "}
          <span className="Text-color2">Meet Our Experts</span>
        </h2>
      </div>

      <div className="h-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          // navigation
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 30,
            },
            1024: {
              spaceBetween: 40,
            },
            1280: {
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          style={{ paddingBottom: "50px" }}
        >
          {experts.map((expert, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-7 gap-5 bg-white min-[1200px]:pt-14 pt-8">
                {/* Video Section */}
                <div className="rounded-[32px] overflow-hidden w-full min-[1200px]:h-[600px] min-[800px]:h-[400px] bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    src={expert.video}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Description Section */}
                <div className="flex justify-center">
                  <div className="w-[98%] flex flex-col justify-between min-[1200px]:h-[600px] min-[800px]:h-[400px] h-[350px] bg-white rounded-3xl cursor-pointer p-6 BoxShadow overflow-hidden">
                    <div>
                      <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[30px] text-[22px] font-bold text-[#3D3D3D] mb-4">
                        {expert.title}
                      </h2>
                    </div>

                    <div className="overflow-y-auto h-[400px] pr-2">
                      {expert.description.map((desc, i) => (
                        <p
                          key={i}
                          className="text-[#414049] min-[1200px]:text-[16px] text-[13px] text-left leading-relaxed mb-4 flex"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                    <div>
                      <button className="flex mt-4 items-center Background-color text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-90 transition-all">
                        Book Appointment
                        <MdArrowOutward className="ml-[8px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MeetExperts;
