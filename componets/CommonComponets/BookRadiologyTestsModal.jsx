"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";

const validationSchema = Yup.object({
  testName: Yup.string(),
  date: Yup.string(),
  time: Yup.string(),
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]{7,}$/i, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .max(300, "Max 300 characters"),
});

const TEST_OPTIONS = [
  { value: "", label: "Select Test" },
  { value: "blood", label: "Blood Test" },
  { value: "xray", label: "X-Ray" },
  { value: "mri", label: "MRI" },
];

const TIME_OPTIONS = [
  { value: "", label: "Available Time" },
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "15:00", label: "03:00 PM" },
];

const BookRadiologyTestsModal = ({ isOpen, onClose }) => {
  const [isTestOpen, setIsTestOpen] = React.useState(false);
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      testName: "",
      date: "",
      time: "",
      fullName: "",
      phone: "",
      email: "",
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
            <h2 className="text-center flex-1 font-bold text-[#3D3D3D] min-[1220px]:text-[32px] min-[800px]:text-[25px] text-[20px]">
              Book Radiology Tests
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
            id="radiology-form"
          >
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Test Name
              </label>
              <div className="relative w-full">
                <select
                  name="testName"
                  value={formik.values.testName}
                  onChange={formik.handleChange}
                  onClick={() => setIsTestOpen(!isTestOpen)}
                  onBlur={(e) => {
                    setIsTestOpen(false);
                    formik.handleBlur(e);
                  }}
                  className={`w-full p-3 pr-10 rounded-[26px] border ${
                    (formik.touched.testName || formik.submitCount > 0) &&
                    formik.errors.testName
                      ? "border-red-500"
                      : "border-[#00ADEF]"
                  } bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none appearance-none`}
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
              {(formik.touched.testName || formik.submitCount > 0) &&
                formik.errors.testName && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.testName}
                  </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                  className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none ${
                    (formik.touched.date || formik.submitCount > 0) &&
                    formik.errors.date
                      ? "border-red-500"
                      : "border-[#00ADEF]"
                  }`}
                />
                {(formik.touched.date || formik.submitCount > 0) &&
                  formik.errors.date && (
                    <div className="mt-1 text-xs text-red-500">
                      {formik.errors.date}
                    </div>
                  )}
              </div>

              <div>
                <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                  Available Slote
                </label>
                <div className="relative w-full">
                  <select
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onClick={() => setIsTimeOpen(!isTimeOpen)}
                    onBlur={(e) => {
                      setIsTimeOpen(false);
                      formik.handleBlur(e);
                    }}
                    className={`w-full p-3 pr-10 rounded-[26px] border ${
                      (formik.touched.time || formik.submitCount > 0) &&
                      formik.errors.time
                        ? "border-red-500"
                        : "border-[#00ADEF]"
                    } bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none appearance-none`}
                  >
                    {TIME_OPTIONS.map((opt) => (
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
                        isTimeOpen ? "rotate-180" : ""
                      } min-[800px]:w-[16px] w-[10px] h-[9px]`}
                    />
                  </div>
                </div>
                {(formik.touched.time || formik.submitCount > 0) &&
                  formik.errors.time && (
                    <div className="mt-1 text-xs text-red-500">
                      {formik.errors.time}
                    </div>
                  )}
              </div>
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
              <label className="block text-gray-700 font-medium mb-1">
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
                Message<span className="text-red-500">*</span>
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
            form="radiology-form"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-white Background-color shadow hover:opacity-90 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRadiologyTestsModal;
