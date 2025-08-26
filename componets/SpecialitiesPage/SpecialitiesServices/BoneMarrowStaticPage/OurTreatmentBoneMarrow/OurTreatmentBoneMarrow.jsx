"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { getOurTreatmentsPage } from "@/componets/ServiceData/OurTreatment";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string(),
});

const OurTreatmentBoneMarrow = () => {
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
    <div className="container">
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 min-[1200px]:gap-10 min-[800px]:gap-7 gap-5">
          {/* Treatment List - 60% */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-6 mb-4">
              Our <span className="Text-color2 ">Treatment</span>
            </h2>
            <h4 className="text-[#3D3D3D] min-1200px]:text-[32px] min-[800px]:text-[24px] text-[18px] font-semibold">
              How can Bone Marrow Transplantation Help?
            </h4>
            {/* {group.items.map((item, index) => (
              <div key={index} className="flex items-center pb-4">
                <Image
                  src="/assets/dots.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="min-[1200px]:h-6 min-[800px]:h-5 h-4 min-[1200px]:w-6 min-[800px]:w-5 w-4"
                />
                <p className="ml-3 min-[1200px]:text-[18px] min-[800px]:text-[15px] text-[13px] text-[#3A3A3A]">
                  {item}
                </p>
              </div>
            ))} */}
            <p className="min-[1200px]:mt-[24px] mt-[18px] min-[1024px]:text-[16px] text-[800px]:text-[14px] text-[12px] text-[#414049] font-medium">
              Bone Marrow Transplants, also called stem cell transplants, are a
              standard treatment method for various blood disorders and cancers.
              The procedure involves replacing cancerous, damaged, or abnormal
              cells with healthy cells. Most transplants involve peripheral
              blood stem cells. Bone marrow transplants are typically used to
              treat blood cancers, some types of tumors, blood disorders, and
              autoimmune disorders.
            </p>
            <p className="mt-[16px] min-[1024px]:text-[16px] text-[800px]:text-[14px] text-[12px] text-[#414049] font-medium">
              There are two types of bone marrow or stem cell transplants:
              Allogeneic, using donated stem cells, and Autologous, using one’s
              healthy cells. Autologous stem cell transplants are commonly used
              to treat autoimmune disorders. While Bone Marrow Transplantation
              can be an effective alternative for patients with autoimmune
              diseases, it’s important to note that it is a complex and
              intensive procedure.
            </p>
            <p className="mt-[16px] min-[1024px]:text-[16px] text-[800px]:text-[14px] text-[12px] text-[#414049] font-medium">
              There are potential risks and side effects, including infection
              and organ damage. However, with careful monitoring and management,
              these risks can be minimized. The idea behind Bone Marrow
              Transplantation is to entirely reset the immune system and attempt
              to eradicate autoimmune disorders.
            </p>
          </div>
          {/* Enquiry Form - 40% */}
          <div className="md:col-span-3 flex flex-col justify-center">
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
  );
};

export default OurTreatmentBoneMarrow;
