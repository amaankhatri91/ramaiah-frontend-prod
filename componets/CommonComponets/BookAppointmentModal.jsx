"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const validationSchema = Yup.object({
  visitType: Yup.string().required("Please select a visit type"),
  date: Yup.string().required("Please select a date"),
  time: Yup.string().required("Please select a time"),
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]{7,}$/i, "Enter a valid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(300, "Max 300 characters"),
});

const VISIT_OPTIONS = [
  { value: "", label: "Please Select" },
  { value: "first", label: "First Visit" },
  { value: "followup", label: "Follow-up" },
];

const TIME_OPTIONS = [
  { value: "", label: "Please Select" },
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "15:00", label: "03:00 PM" },
];

const BookAppointmentModal = ({ isOpen, onClose }) => {
  const [isVisitOpen, setIsVisitOpen] = React.useState(false);
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      visitType: "",
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
      console.log("Book Appointment submit:", values);
      onClose?.();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative mx-4 w-full max-w-[560px] rounded-[20px] bg-white p-6 md:p-8 shadow-xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
        >
          ✕
        </button>
        <h2 className="mb-5 text-center font-bold text-[#3D3D3D] min-[1220px]:text-[32px] min-[800px]:text-[25px] text-[20px]">
          Book Appointment
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Visit Type<span className="text-red-500">*</span>
              </label>
              <div className="relative w-full">
                <select
                  name="visitType"
                  value={formik.values.visitType}
                  onChange={formik.handleChange}
                  onClick={() => setIsVisitOpen(!isVisitOpen)}
                  onBlur={(e) => {
                    setIsVisitOpen(false);
                    formik.handleBlur(e);
                  }}
                  className={`w-full p-3 pr-10 rounded-[26px] border ${
                    (formik.touched.visitType || formik.submitCount > 0) && formik.errors.visitType
                      ? "border-red-500"
                      : "border-[#00ADEF]"
                  } bg-[#FFFFFF] text-[#3A3A3A] focus:outline-none appearance-none`}
                >
                  {VISIT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              {(formik.touched.visitType || formik.submitCount > 0) && formik.errors.visitType && (
                <div className="mt-1 text-xs text-red-500">{formik.errors.visitType}</div>
              )}
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Select Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className={`w-full rounded-[26px] border p-3 bg-white focus:outline-none ${
                  (formik.touched.date || formik.submitCount > 0) && formik.errors.date
                    ? "border-red-500"
                    : "border-[#00ADEF]"
                }`}
              />
              {(formik.touched.date || formik.submitCount > 0) && formik.errors.date && (
                <div className="mt-1 text-xs text-red-500">{formik.errors.date}</div>
              )}
            </div>
            <div>
              <label className="mb-1 block min-[1200px]:text-[16px] text-[14px] font-medium text-[#3A3A3A]">
                Select Time
              </label>
              <input
                type="text"
                disabled
                value="Please Select"
                className="w-full rounded-[26px] border p-3 bg-gray-50 text-gray-400"
              />
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
                (formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName
                  ? "border-red-500"
                  : "border-[#00ADEF]"
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
              inputProps={{ name: "phone", required: true }}
              inputClass="!w-full"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.phone}</div>
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
                (formik.touched.email || formik.submitCount > 0) && formik.errors.email
                  ? "border-red-500"
                  : "border-[#00ADEF]"
              }`}
            />
            {(formik.touched.email || formik.submitCount > 0) && formik.errors.email && (
              <div className="mt-1 text-xs text-red-500">{formik.errors.email}</div>
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
              className="w-full rounded-[20px] border border-[#00ADEF] p-3 bg-white focus:outline-none"
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

export default BookAppointmentModal;


