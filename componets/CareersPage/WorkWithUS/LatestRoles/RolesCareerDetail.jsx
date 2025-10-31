"use client";

import React, { useMemo, useState } from "react";
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

const RolesCareerDetail = ({ id }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No File Chosen");

  // Role-specific sections as an array with internal id
  const roleDetails = useMemo(
    () => [
      {
        id: 1,
        sections: [
          {
            title: "Qualification",
            items: [
              "MD/DNB General Medicine",
              "MD/DNB Paediatrics ",
              "MD/DNB Radiology  ",
              "MS/DNB Orthopaedics  ",
              "MS/DNB OBG  ",
              "MS/DNB General Surgery  ",
              "MD/DNB/ fellowship in Emergency Medicine  ",
              "DNB/ fellowship in Critical Care  ",
              "MD/DNB Anaesthesia  ",
              "Certified Robotic Surgeons ",
            ],
          },
          { title: "Experience", items: ["N/A"] },
          { title: "Department", items: ["N/A"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["N/A"] },
          { title: "Job Descriptions", items: ["+91 80 4050 3272","hr@msrmh.com"] },
        ],
      },
      {
        id: 2,
        sections: [
          {
            title: "Qualification",
            items: ["MD/DNB Obstetrics & Gynaecology"],
          },
          { title: "Experience", items: ["3–8 years"] },
          { title: "Department", items: ["Obstetrics & Gynaecology"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 3,
        sections: [
          {
            title: "Qualification",
            items: [
              "MS/DNB General Surgery",
              "Fellowship in Laparoscopy preferred",
            ],
          },
          { title: "Experience", items: ["5+ years"] },
          { title: "Department", items: ["Surgery"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational/On-call"] },
        ],
      },
      {
        id: 4,
        sections: [
          { title: "Qualification", items: ["MD/DNB Radiology"] },
          { title: "Experience", items: ["2–6 years"] },
          { title: "Department", items: ["Radiology"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 5,
        sections: [
          {
            title: "Qualification",
            items: ["Diploma/ITI in Electrical/Mechanical or equivalent"],
          },
          { title: "Experience", items: ["3–7 years facility maintenance"] },
          { title: "Department", items: ["Engineering & Maintenance"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 6,
        sections: [
          {
            title: "Qualification",
            items: ["B.Pharm/M.Pharm with PCI registration"],
          },
          {
            title: "Experience",
            items: ["1–4 years Hospital/Clinical pharmacy"],
          },
          { title: "Department", items: ["Pharmacy"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 7,
        sections: [
          { title: "Qualification", items: ["ITI/Diploma"] },
          { title: "Experience", items: ["2–5 years"] },
          { title: "Department", items: ["Maintenance"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 8,
        sections: [
          {
            title: "Qualification",
            items: ["Graduate; certification in Supply Chain preferred"],
          },
          { title: "Experience", items: ["2–5 years"] },
          { title: "Department", items: ["Purchase & Stores"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Day/Rotational"] },
        ],
      },
      {
        id: 9,
        sections: [
          {
            title: "Qualification",
            items: ["MBA/PGDM Marketing or equivalent"],
          },
          { title: "Experience", items: ["1–3 years"] },
          { title: "Department", items: ["Marketing"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Day Shift"] },
        ],
      },
      {
        id: 10,
        sections: [
          { title: "Qualification", items: ["B.Com/M.Com or equivalent"] },
          {
            title: "Experience",
            items: ["2–6 years hospital billing/accounts"],
          },
          { title: "Department", items: ["Billing & Accounts"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Day/Rotational"] },
        ],
      },
      {
        id: 11,
        sections: [
          {
            title: "Qualification",
            items: ["Graduate with excellent communication skills"],
          },
          {
            title: "Experience",
            items: ["1–4 years front office/guest relations"],
          },
          { title: "Department", items: ["Front Office"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
      {
        id: 12,
        sections: [
          { title: "Qualification", items: ["D.Pharm/B.Pharm"] },
          { title: "Experience", items: ["0–3 years"] },
          { title: "Department", items: ["Pharmacy"] },
          { title: "Schedule", items: ["Full Time"] },
          { title: "Shift", items: ["Rotational"] },
        ],
      },
    ],
    []
  );

  const leftPanelSections = useMemo(() => {
    const numericId = Number(id);
    const role = roleDetails.find((r) => r.id === numericId);
    return role ? role.sections : [];
  }, [id, roleDetails]);


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
    <div className="container">
      <div className="flex flex-col min-[768px]:gap-16 gap-5 ">
        <div className="relative">
          <div>
            <div className="relative z-10 grid md:grid-cols-2 min-[800px]:gap-10 gap-5 pb-[50px] pt-[25px] items-stretch">
              <div className="flex">
                <div className="min-[1200px]:p-6 min-[800px]:p-5 p-4 w-full md:h-[650px] min-[1200px]:h-[750px] overflow-y-auto bg-[#FFFFFF] rounded-[40px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)]">
                  <h2 className="min-[1200px]:text-[32px] min-[800px]:text-[25px] text-[20px] text-[#3D3D3D] font-bold">
                    Consultants & Visiting Consultants
                  </h2>

                  <div className="mt-6">
                    {leftPanelSections.map((section) => (
                      <div key={section.title} className="mb-4">
                        <div className="flex items-start gap-3">
                          <Image
                            src="/assets/dots.svg"
                            alt="bullet"
                            width={20}
                            height={20}
                            className="mt-[2px] w-3.5 h-3.5 min-[800px]:w-4 min-[800px]:h-4 min-[1200px]:w-5 min-[1200px]:h-5"
                            priority
                          />
                          <p className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[13px] text-[#3A3A3A] font-bold">
                            {section.title}
                          </p>
                        </div>
                        <ul className="list-disc list-inside mt-2 min-[1200px]:pl-[38px] min-[800px]:pl-[35px] pl-[30px] text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium">
                          {section.items.map((text, idx) => (
                            <li key={idx}>{text}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] shadow-md overflow-hidden">
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
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-[#00ADEF]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
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

export default RolesCareerDetail;
