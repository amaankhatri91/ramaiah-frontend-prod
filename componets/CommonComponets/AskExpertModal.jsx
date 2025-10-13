"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]{7,}$/i, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(300, "Max 300 characters"),
});

const AskExpertModal = ({ isOpen, onClose }) => {
  const [isHospitalOpen, setIsHospitalOpen] = useState(false)
  const formik = useFormik({
    initialValues: { fullName: "", phone: "", email: "", message: "" },
    validationSchema,
    onSubmit: (values) => {
      // Replace with submit handler
      // eslint-disable-next-line no-console
      console.log("Ask Expert Submit:", values);
      onClose?.();
    },
  });

  if (!isOpen) return null;
  const HOSPITAL_OPTIONS = [
    { value: "", label: "Enter your Specialty" },
    { value: "ramaiah", label: "Ramaiah Memorial Hospital" },
    { value: "ramaiahheart", label: "Ramaiah Institute of Cardiac Sciences" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[40px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] p-6 md:p-8 shadow-xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
        >
          ✕
        </button>
        <h2 className="mb-5 text-center font-bold text-[#3D3D3D] min-[1220px]:text-[32px] min-[800px]:text-[25px] text-[20px]">
          Ask Our Experts
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              placeholder="Please enter your full name"
              className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none focus:border-[#305FC2] ${(formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName
                  ? "border-red-500"
                  : "border-[#DDC7E7]"
                }`}
            />
            {(formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName && (
              <div className="mt-1 text-xs text-red-500">{formik.errors.fullName}</div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={"in"}
              value={formik.values.phone}
              onChange={(phone) => formik.setFieldValue("phone", phone)}
              onBlur={() => formik.setFieldTouched("phone", true)}
              inputProps={{
                name: "phone",
                required: true,
              }}
              inputClass="!w-full !h-[50px]"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="mail@someemail.com"
              className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none focus:border-[#305FC2] ${(formik.touched.email || formik.submitCount > 0) && formik.errors.email
                  ? "border-red-500"
                  : "border-[#DDC7E7]"
                }`}
            />
            {(formik.touched.email || formik.submitCount > 0) && formik.errors.email && (
              <div className="mt-1 text-xs text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
              Specialty<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                name="hospital"
                value={formik.values.hospital}
                onChange={formik.handleChange}
                onClick={() => setIsHospitalOpen(!isHospitalOpen)}
                onBlur={(e) => { setIsHospitalOpen(false); formik.handleBlur(e) }}
                className={`w-full p-3 pr-10 rounded-[26px] border ${(formik.touched.hospital || formik.submitCount > 0) && formik.errors.hospital
                    ? "border-red-500"
                    : "border-[#DDC7E7]"
                  } bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none focus:border-[#305FC2] appearance-none`}
              >
                {HOSPITAL_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <Image
                  src="/assets/down-arrow.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ease-in-out ${isHospitalOpen ? "rotate-180" : ""} min-[800px]:w-[16px] w-[10px] h-[9px]`}
                />
              </div>
            </div>
            {(formik.touched.hospital || formik.submitCount > 0) && formik.errors.hospital && (
              <div className="mt-1 text-xs text-red-500">{formik.errors.hospital}</div>
            )}
          </div>

          <div>
            <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
            Expert Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              placeholder="Please enter your full name"
              className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none focus:border-[#305FC2] ${
                (formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName
                  ? "border-red-500"
                  : "border-[#DDC7E7]"
              }`}
            />
            {(formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName && (
              <div className="mt-1 text-xs text-red-500">{formik.errors.fullName}</div>
            )}
          </div>

          <div>
            <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Add description here..."
              maxLength={300}
              className="w-full rounded-[20px] border border-[#DDC7E7] p-3 bg-white focus:outline-none focus:border-[#305FC2]"
            />
             <div className="font-manrope font-medium text-[12px] text-[#3A3A3A] mt-1 text-right">
              {`You have ${Math.max(0, 300 - (formik.values.message?.length || 0))} characters remaining`}
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-white Background-color shadow hover:opacity-90 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskExpertModal;


