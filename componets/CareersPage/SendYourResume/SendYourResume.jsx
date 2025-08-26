"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  currentCity: Yup.string().required("Current City is required"),
  qualification: Yup.string().required("Qualification is required"),
  resume: Yup.mixed().required("Resume is required"),
  message: Yup.string(),
});

const SendYourResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No File Chosen");
  const [isCityOpen, setIsCityOpen] = useState(false);

  const BgImage = "/assets/Resume-bg.svg";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      currentCity: "",
      qualification: "",
      resume: null,
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Log all form values to console
      console.log("Form submitted with values:", {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        currentCity: values.currentCity,
        qualification: values.qualification,
        resume: values.resume,
        fileName: fileName,
        message: values.message,
      });

    //   alert("Form submitted successfully! Check console for values.");
      resetForm();
      setSelectedFile(null);
      setFileName("No File Chosen");
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      formik.setFieldValue("resume", file);
    }
  };

  const handleCityClick = () => {
    setIsCityOpen(!isCityOpen);
  };

  const cities = [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
  ];

  return (
    <div>
      <div className="flex flex-col min-[768px]:gap-16 gap-5 min-[768px]:pb-[80px]">
        <div className="relative">
          <div
            style={{ backgroundImage: `url('${BgImage}')` }}
            className="bg-no-repeat bg-cover bg-center relative z-0"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(84deg,#F2D5CF_0%,#E2EEFE_100%)] opacity-85 z-0"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full container pb-[50px] pt-[25px]">
              <div className="flex items-center">
                <div className="min-[1200px]:p-6 rounded-lg">
                  <h2 className="min-[1480px]:text-[56px] min-[1200px]:text-[35px] min-[800px]:text-[26px] text-[22px] font-bold Text-color2">
                    Send Your Resume
                  </h2>
                </div>
              </div>

              <div className="relative min-[768px]:bottom-[-86px] bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] shadow-md overflow-hidden">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] p-8 space-y-5"
                  >
                    <div>
                      <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        className={`w-full px-4 bg-[#FFFFFF] py-2 rounded-[26px] border ${
                          formik.touched.fullName && formik.errors.fullName
                            ? "border-red-500"
                            : "border-[#00ADEF]"
                        } focus:outline-none`}
                        placeholder="Please enter your full name"
                      />
                      {formik.touched.fullName && formik.errors.fullName && (
                        <div className="text-red-500 text-xs mt-1">
                          {formik.errors.fullName}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        country={"in"}
                        value={formik.values.phone}
                        onChange={(phone) =>
                          formik.setFieldValue("phone", phone)
                        }
                        onBlur={() => formik.setFieldTouched("phone", true)}
                        inputProps={{
                          name: "phone",
                          required: true,
                        }}
                        inputClass="!w-full"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="text-red-500 text-xs mt-1">
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full px-4 bg-[#FFFFFF] py-2 rounded-[26px] border ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : "border-[#00ADEF]"
                        } focus:outline-none`}
                        placeholder="mail@someemail.cl"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-xs mt-1">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                        Current City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="currentCity"
                          onClick={handleCityClick}
                          onChange={formik.handleChange}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setIsCityOpen(false);
                          }}
                          value={formik.values.currentCity}
                          className={`w-full px-4 pr-10 bg-[#FFFFFF] py-2 rounded-[26px] border appearance-none ${
                            formik.touched.currentCity &&
                            formik.errors.currentCity
                              ? "border-red-500"
                              : "border-[#00ADEF]"
                          } focus:outline-none`}
                        >
                          <option value="">Please Select</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                          <Image
                            src="/assets/down-arrow.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                            className={`transition-transform duration-300 ease-in-out ${
                              isCityOpen ? "rotate-180" : ""
                            } min-[800px]:w-[16px] w-[10px] h-[9px]`}
                          />
                        </div>
                      </div>
                      {formik.touched.currentCity &&
                        formik.errors.currentCity && (
                          <div className="text-red-500 text-xs mt-1">
                            {formik.errors.currentCity}
                          </div>
                        )}
                    </div>

                    <div>
                      <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                        Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="qualification"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.qualification}
                        className={`w-full px-4 bg-[#FFFFFF] py-2 rounded-[26px] border ${
                          formik.touched.qualification &&
                          formik.errors.qualification
                            ? "border-red-500"
                            : "border-[#00ADEF]"
                        } focus:outline-none`}
                        placeholder="Please enter your full name"
                      />
                      {formik.touched.qualification &&
                        formik.errors.qualification && (
                          <div className="text-red-500 text-xs mt-1">
                            {formik.errors.qualification}
                          </div>
                        )}
                    </div>

                    <div>
                      <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                        Upload Resume <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          value={fileName}
                          className="w-full px-4 pr-32 bg-[#FFFFFF] py-2 rounded-[26px] border border-[#00ADEF] focus:outline-none text-[#3A3A3A]"
                          placeholder="No File Chosen"
                        />
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="absolute right-0 top-0 px-6 py-2 rounded-[26px] border border-[#00ADEF] bg-[#FFFFFF] text-[#3A3A3A] cursor-pointer hover:bg-[#F8F9FA] transition-colors whitespace-nowrap"
                        >
                          Choose File
                        </label>
                      </div>
                      {formik.touched.resume && formik.errors.resume && (
                        <div className="text-red-500 text-xs mt-1">
                          {formik.errors.resume}
                        </div>
                      )}
                    </div>

                    {/* <div>
                  <label className="block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="w-full px-4 py-2 bg-[#FFFFFF] rounded-[26px] border border-[#00ADEF] focus:outline-none"
                    placeholder="Add description here..."
                    rows={3}
                  />
                </div> */}

                    <div className="flex justify-center mt-5">
                      <button
                        type="submit"
                        className="text-[#FFFFFF] Background-color cursor-pointer px-6 py-3 rounded-full min-[1024px]:text-[16px] text-[14px] font-medium shadow hover:opacity-90 transition-all"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendYourResume;
