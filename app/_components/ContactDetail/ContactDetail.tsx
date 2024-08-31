import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import "./ContactDetail.scss";
const contactDetails = [
  {
    id: 1,
    icon: <IoLocation className="text-white text-[30px]" />,
    title: "Our Office Address",
    description: "Burnsville, MN 55337 Streat, United States",
  },
  {
    id: 2,
    icon: <FaPhone className="text-white text-[30px]" />,
    title: "Call Us Anytime",
    description: ["(+65) - 48596 - 5789", "+190-8800-0393"],
  },
  {
    id: 3,
    icon: <FaEnvelope className="text-white text-[30px]" />,
    title: "Send An Email",
    description: ["info.example@traga.com", "info@traga.com"],
  },
];

const ContactDetail = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className=" flex  contactJustify justify-between   gap-2 flex-wrap py-20">
        {contactDetails.map((detail) => (
          <div
            key={detail.id}
            className="flex items-center   shadow-[0px_0px_20px_rgba(104,77,244,0.7)] bg-white w-[25rem] px-5 py-5 rounded gap-5"
          >
            <div className="bg-[#684DF4]  shadow-[0px_0px_20px_rgba(104,77,244,0.7)]  h-[5rem]  rounded flex items-center justify-center w-[5rem]">
              {detail.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] font-semibold">{detail.title}</h2>
              {Array.isArray(detail.description) ? (
                detail.description.map((line, index) => (
                  <p
                    key={index}
                    className="max-w-[200px] hover:text-[#684DF4] duration-300 text-gray-500"
                  >
                    {line}
                  </p>
                ))
              ) : (
                <p className="max-w-[200px] hover:text-[#684DF4] duration-300 text-gray-500">
                  {detail.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetail;
