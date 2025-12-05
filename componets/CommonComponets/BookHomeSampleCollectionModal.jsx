"use client";
import React from "react";
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

const TEST_OPTIONS = [
  { value: "", label: "Select Test" },
  { value: "cbc", label: "CBC" },
  { value: "lipid", label: "Lipid Profile" },
  { value: "thyroid", label: "Thyroid Panel" },
];

const BookHomeSampleCollectionModal = ({ isOpen, onClose }) => {
  const [isTestOpen, setIsTestOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      testType: "",
      fullName: "",
      phone: "",
      email: "",
      date: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      onClose?.();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative w-full max-w-[560px] max-h-[90vh] rounded-[40px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 px-6 md:px-8 pt-2 md:pt-4 pb-2 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <h2 className="text-center flex-1 font-bold text-[#3D3D3D] min-[1220px]:text-[30px] min-[800px]:text-[25px] text-[20px]">
              Book Home Sample Collection
            </h2>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400">
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4"
            id="home-sample-form"
          >
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Test Name
              </label>
              <div className="relative w-full">
                <select
                  name="testType"
                  value={formik.values.testType}
                  onChange={formik.handleChange}
                  onClick={() => setIsTestOpen(!isTestOpen)}
                  onBlur={() => setIsTestOpen(false)}
                  className="w-full p-3 pr-10 rounded-[26px] border border-[#00ADEF] bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none appearance-none"
                >
                  {TEST_OPTIONS.map((opt) => (
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
                    className={`transition-transform duration-300 ease-in-out ${
                      isTestOpen ? "rotate-180" : ""
                    } min-[800px]:w-[16px] w-[10px] h-[9px]`}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                className="w-full rounded-[26px] border border-[#00ADEF] p-3 bg-white focus:outline-none"
              />
            </div>

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
                className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none ${
                  (formik.touched.fullName || formik.submitCount > 0) &&
                  formik.errors.fullName
                    ? "border-red-500"
                    : "border-[#00ADEF]"
                }`}
              />
              {(formik.touched.fullName || formik.submitCount > 0) &&
                formik.errors.fullName && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.fullName}
                  </div>
                )}
            </div>
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"in"}
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue("phone", phone)}
                onBlur={() => formik.setFieldTouched("phone", true)}
                inputProps={{ name: "phone", required: true }}
                inputClass="!w-full"
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
                className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none ${
                  (formik.touched.email || formik.submitCount > 0) &&
                  formik.errors.email
                    ? "border-red-500"
                    : "border-[#00ADEF]"
                }`}
              />
              {(formik.touched.email || formik.submitCount > 0) &&
                formik.errors.email && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.email}
                  </div>
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
                className={`w-full rounded-[20px] border p-3 bg-white focus:outline-none ${
                  (formik.touched.message || formik.submitCount > 0) &&
                  formik.errors.message
                    ? "border-red-500"
                    : "border-[#00ADEF]"
                }`}
              />
              {(formik.touched.message || formik.submitCount > 0) &&
                formik.errors.message && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.message}
                  </div>
                )}
              <div className="font-manrope font-medium text-[12px] text-[#3A3A3A] mt-1 text-right">
                {`You have ${Math.max(
                  0,
                  300 - (formik.values.message?.length || 0)
                )} characters remaining`}
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-4 md:px-6 pt-2 pb-4 md:pb-6 border-t border-gray-200/50 text-center">
          <button
            type="submit"
            form="home-sample-form"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-white Background-color shadow hover:opacity-90 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookHomeSampleCollectionModal;
