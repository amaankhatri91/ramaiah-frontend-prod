"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getOurTreatmentsPage } from "@/componets/ServiceData/OurTreatment";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string(),
});

const EnquireNowWorkWith = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <div className="min-[1200px]:mt-[90px] min-[800px]:mt-[50px] mt-[30px]">
      <div className="container ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:gap-16 min-[800px]:gap-10 gap-5">
            {/* Treatment List - 60% */}
            <div className="md:col-span-1 flex flex-col">
              <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold text-[#3D3D3D]">
                Why Choose <span className="Text-color2 ">RMH</span>
              </h2>
              <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium min-[800px]:mt-[24px] mt-[16px]">
                Healthcare at Ramaiah Memorial hospital is not just about
                treating ailments, but a haven for spreading compassion, warmth,
                congeniality and care.
              </p>
              <p className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] text-[13px] font-medium min-[800px]:mt-[16px] mt-[12px]">
                {" "}
                With an indomitable team of doctors and experts whose
                proficiency is backed by cutting-edge equipment and techno-sharp
                amenities, we constantly strive to upgrade ourselves to the
                latest technology and developments in medical care to provide
                unmatched service to our patients.
              </p>

              <h5 className="min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] font-bold text-[#414049] min-[800px]:mt-[16px] mt-[16px]">
                Don’t find any suitable job post?{" "}
                <span className="Text-color2">Drop your resume here.</span>
              </h5>
            </div>

            {/* Enquiry Form - 40% */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <form
                onSubmit={formik.handleSubmit}
                className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[48px] p-8 space-y-5"
              >
                <h3 className="min-[1220px]:text-[32px] min-[800px]:text-[25] text-[18px] font-bold text-[#3D3D3D] mb-4 text-center">
                  Enquire Now
                </h3>
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
                    onChange={(phone) => formik.setFieldValue("phone", phone)}
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
                </div>
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
  );
};

export default EnquireNowWorkWith;
