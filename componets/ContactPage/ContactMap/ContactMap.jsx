import ContactUsForm from "@/componets/CommonComponets/ContactUs/ContactUsForm";
import React from "react";

const ContactMap = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-[800px]:gap-10 gap-5 items-stretch">
        <div className="bg-[#FFFFFF] rounded-[40px] shadow-[0_32.557px_43.409px_0_rgba(148,153,170,0.10)] overflow-hidden md:h-full h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=13.02822,77.56978&z=16&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="">
          <div className="flex flex-col">
            <div className="">
              <ContactUsForm Title="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
