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

const OurTreatment = ({ slug }) => {
  // const group = getOurTreatmentsPage(slug);

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

  if (!slug?.content_blocks?.length) return null; 

  return (
    <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
      <div className="container ">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 min-[1200px]:gap-10 min-[800px]:gap-7 gap-5">
            {/* Treatment List - 60% */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
                {/* Our <span className="Text-color2 ">Treatment & Procedure</span> */}
               <span className="Text-color2 ">{slug.title}</span>
              </h2>
              {/* <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
               <span className="Text-color2 ">Services & Facilities</span>
              </h2> */}
              {slug?.content_blocks[0]?.facilitySpecialties.map((item, index) => (
                <div key={index} className="flex pb-4">
                  <Image
                    src="/assets/dots.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="min-[1200px]:h-6 mt-[2px] min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
                  />
                  <p className="ml-3 min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px] text-[#3A3A3A]">
                    {item?.facility?.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Enquiry Form - 40% */}
            <div className="md:col-span-2 flex flex-col justify-center">
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
                        : "border-[#DDC7E7]"
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
                    inputClass="!w-full !h-[50px]"
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
                        : "border-[#DDC7E7]"
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
                    className="w-full px-4 py-2 bg-[#FFFFFF] rounded-[26px] border border-[#DDC7E7] focus:outline-none"
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

export default OurTreatment;
