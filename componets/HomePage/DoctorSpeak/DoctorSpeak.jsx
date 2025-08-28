"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";

const DoctorSpeak = () => {
  const [isSpecialityOpen, setIsSpecialityOpen] = useState(false);
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    speciality: Yup.string().required("Please select a speciality"),
    specialist: Yup.string().required("Please select a specialist"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      speciality: "",
      specialist: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSpecialityClick = () => {
    setIsSpecialityOpen(!isSpecialityOpen);
  };

  const handleSpecialistClick = () => {
    setIsSpecialistOpen(!isSpecialistOpen);
  };

  return (
    <div className="container ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enquire Now Form */}
        {/* <form
          onSubmit={formik.handleSubmit}
          style={{
            background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
          }}
          className=" p-8 rounded-[40px] "
        >
          <h3 className="min-[1220px]:text-[32px] min-[800px]:text-[25] text-[18px] font-bold text-[#3D3D3D] mb-4 text-center">
            Enquire Now
          </h3> */}

        {/* Full Name */}
        {/* <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            placeholder="Please enter your full name"
            className={`w-full min-[800px]:mb-[28px] mb-[20px] p-3 rounded-[26px] border ${
              (formik.touched.fullName || formik.submitCount > 0) &&
              formik.errors.fullName
                ? "border-red-500"
                : "border-[#00ADEF]"
            } bg-[#FFFFFF] focus:outline-none`}
          /> */}
        {/* {(formik.touched.fullName || formik.submitCount > 0) &&
            formik.errors.fullName && (
              <div className="text-red-500 text-xs min-[800px]:-mt-6 -mt-4 min-[800px]:mb-[15px] mb-[10px]">
                {formik.errors.fullName}
              </div>
            )} */}

        {/* Speciality */}
        {/* <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
            Choose Speciality
          </label> */}
        {/* <div className="relative w-full min-[800px]:mb-[28px] mb-[20px]">
            <select
              name="speciality"
              onClick={handleSpecialityClick}
              onBlur={(e) => {
                setIsSpecialityOpen(false);
                formik.handleBlur(e);
              }}
              onChange={formik.handleChange}
              value={formik.values.speciality}
              className={`w-full p-3 pr-10 rounded-[26px]  border ${
                (formik.touched.speciality || formik.submitCount > 0) &&
                formik.errors.speciality
                  ? "border-red-500"
                  : "border-[#00ADEF]"
              } bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none  appearance-none`}
            >
              <option value="">Please Select</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
            </select> */}

        {/* Custom arrow */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <Image
                src="/assets/down-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className={`transition-transform duration-300 ease-in-out ${
                  isSpecialityOpen ? "rotate-180" : ""
                } min-[800px]:w-[16px] w-[10px] h-[9px]`}
              />
            </div>
          </div> */}
        {/* {(formik.touched.speciality || formik.submitCount > 0) &&
            formik.errors.speciality && (
              <div className="text-red-500 text-xs min-[800px]:-mt-6 -mt-4 min-[800px]:mb-[15px] mb-[10px]">
                {formik.errors.speciality}
              </div>
            )} */}

        {/* Specialist */}
        {/* <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
            Choose Specialist
          </label>
          <div className="relative w-full min-[800px]:mb-[28px] mb-[20px]">
            <select
              name="specialist"
              onClick={handleSpecialistClick}
              onBlur={(e) => {
                setIsSpecialistOpen(false);
                formik.handleBlur(e);
              }}
              onChange={formik.handleChange}
              value={formik.values.specialist}
              className={`w-full p-3 pr-10 rounded-[26px] border ${
                (formik.touched.specialist || formik.submitCount > 0) &&
                formik.errors.specialist
                  ? "border-red-500"
                  : "border-[#00ADEF]"
              } bg-white text-gray-700 focus:outline-none appearance-none`}
            >
              <option value="">Please Select</option>
              <option value="dr_smith">Dr. Smith</option>
              <option value="dr_jones">Dr. Jones</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <Image
                src="/assets/down-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className={`transition-transform duration-300 ease-in-out ${
                  isSpecialistOpen ? "rotate-180" : ""
                } min-[800px]:w-[16px] w-[10px] h-[9px]`}
              />
            </div>
          </div>
          {(formik.touched.specialist || formik.submitCount > 0) &&
            formik.errors.specialist && (
              <div className="text-red-500 text-xs min-[800px]:-mt-6 -mt-4 min-[800px]:mb-[20px] mb-[15px]">
                {formik.errors.specialist}
              </div>
            )} */}

        {/* Buttons */}
        {/* <div className="flex flex-wrap gap-4 min-[500px]:gap-0 items-center justify-between">
            <button
              type="submit"
              className=" text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all"
            >
              Ask Our Expert
            </button>
            <button
              type="button"
              className="Background-color2 cursor-pointer text-[#3A3A3A] border border-[#00ADEF] px-6 py-3 rounded-full font-medium hover:bg-gray-100"
            >
              Request A Callback
            </button>
          </div> */}
        {/* </form> */}

        {/* Doctor Speak Section */}
        <div className="">
          {/* Header */}
          <div className="flex items-center justify-between min-[1200px]:mb-5 mb-4">
            <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[28px] text-[22px] font-bold text-[#3D3D3D]">
              <span className="Text-color2">Doctor </span>Speak
            </h2>
          </div>
          {/* Video or Image Preview */}
          <div className="text-end">
            <video
              src="https://www.w3schools.com/howto/rain.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full min-[1200px]:h-[400px] min-[800px]:h-[350px] h-[300px] object-cover rounded-[30px]"
            />
            <Link
              href="#"
              className="inline-flex underline items-center gap-2 w-max mt-3 px-4 py-2 rounded-full text-[#3d3d3d] font-bold min-[800px]:text-[18px] text-[16px]"
            >
              <span>View More</span>
              <Image
                src="/assets/down-arrow.svg"
                alt="Right arrow"
                width={16}
                height={16}
                className="rotate-[-90deg] min-[800px]:w-[16px] w-[12px] h-[12px]"
              />
            </Link>
          </div>
        </div>
        <div className="text-end">
          {/* Header */}
          <div className="flex items-center justify-between min-[1200px]:mb-5 mb-4">
            <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[28px] text-[22px] font-bold text-[#3D3D3D]">
              <span className="Text-color2">Patient </span>Speak
            </h2>

          </div>

          {/* Video or Image Preview */}
          <div className="">
            <video
              src="https://www.w3schools.com/howto/rain.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full min-[1200px]:h-[400px] min-[800px]:h-[350px] h-[300px] object-cover rounded-[30px]"
            />
            <Link
              href="#"
              className="inline-flex underline items-center gap-2 w-max mt-3 px-4 py-2 rounded-full text-[#3d3d3d] font-bold min-[800px]:text-[18px] text-[16px]"
            >
              <span>View More</span>
              <Image
                src="/assets/down-arrow.svg"
                alt="Right arrow"
                width={16}
                height={16}
                className="rotate-[-90deg] min-[800px]:w-[16px] w-[12px] h-[12px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSpeak;
