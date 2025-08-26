"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string(),
});

const ContactDetails = () => {
  const contacts = [
    {
      id: 1,
      name: "Mr. Anoop Kumar",
      title: "Deputy General Manager",
      phone: "+9199996 49688",
      email: "anoop.kurnar@ramaiahgroup.org",
    },
    {
      id: 2,
      name: "Mr. Anil",
      title: "Head: International Marketing",
      phone: "+9177953 05596",
      email: "anilkumar.b@msrmh.com",
    },
  ];
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
    <div className="">
      <div className="container ">
        <div className="mb-6">
          <div className="">
            <h2 className="min-[1300px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold min-[1200px]:mb-8 mb-4">
              <span className="Text-color2 ">Contact</span> Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 items-stretch min-[1200px]:gap-10 min-[800px]:gap-7 gap-5">
            {/* Contacts List */}
            <div className="md:col-span-3 flex flex-col gap-5 h-full">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className="bg-[#fff] rounded-[32px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)]  p-5 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Left: avatar and text */}
                    <div className="flex items-center gap-4 sm:gap-5">
                      {/* Avatar image */}
                      <div className="relative w-[145px] h-[140px] flex items-center justify-center">
                        <Image
                          src="/assets/ContactDetailsProfile.svg"
                          alt={`${c.name} avatar`}
                          width={145}
                          height={140}
                          className="w-[145px] h-[140px] object-contain"
                          priority
                        />
                      </div>
                      <div>
                        <p className="text-[#3D3D3D] font-bold min-[1200px]:text-[32px] min-[800px]:text-[24px] text-[16px]">
                          {c.name}
                        </p>
                        <p className="text-[#77817D] min-[1200px]:text-[20px] min-[800px]:text-[16px] text-[14px] font-semibold">
                          {c.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact lines */}
                  <div className="mt-7">
                    <div className="flex items-center justify-between gap-3">
                      {/* Phone icon image */}
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/circle-phone.svg"
                          alt="phone"
                          width={24}
                          height={24}
                          className="md:w-6 md:h-6 w-5 h-5"
                        />
                        <span className="text-[#3D3D3D] min-[1200px]:text-[20px] min-[850px]:text-[16px] min-[400px]:text-[13px] text-[12px] font-semibold">
                          {c.phone}
                        </span>
                      </div>
                      <Link
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1 text-[12px] md:text-[13px] lg:text-[16px] font-semibold"
                      >
                        <span className="Text-color2 relative inline-block after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-[linear-gradient(267deg,#00ADEF_-49.54%,#D60F8C_110.23%)]">
                          Call Now
                        </span>
                        <Image
                          src="/assets/up-arrow.svg"
                          alt="up-arrow"
                          width={18}
                          height={18}
                          className="h-[19px] w-[19px]"
                        />
                      </Link>
                    </div>
                    <div className="flex items-center justify-between mt-[24px] gap-3">
                      {/* Mail icon image */}
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/circle-mail.svg"
                          alt="email"
                          width={24}
                          height={24}
                          className="md:w-6 md:h-6 w-5 h-5"
                        />
                        <span className="text-[#3D3D3D] break-all min-[1200px]:text-[20px] w-[65%] sm:w-full min-[850px]:text-[16px] min-[400px]:text-[13px] text-[12px] font-semibold">
                          {c.email}
                        </span>
                      </div>
                      <Link
                        href={`mailto:${c.email}`}
                        className="inline-flex items-center gap-1 text-[12px] md:text-[13px] lg:text-[16px] font-semibold"
                      >
                        <span className="Text-color2 relative inline-block after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-[linear-gradient(267deg,#00ADEF_-49.54%,#D60F8C_110.23%)]">
                          Send Mail
                        </span>
                        <Image
                          src="/assets/up-arrow.svg"
                          alt="up-arrow"
                          width={18}
                          height={18}
                          className="h-[19px] w-[19px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enquiry Form - 40% */}
            <div className="md:col-span-2 flex flex-col h-full">
              <form
                onSubmit={formik.handleSubmit}
                className="bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[24px] md:rounded-[48px] p-6 md:p-8 space-y-5 h-full flex flex-col"
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
                <div className="flex justify-center mt-auto pt-2">
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

export default ContactDetails;
