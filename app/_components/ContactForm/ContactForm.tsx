import React from "react";
import LogoText from "../LogoText/LogoText";
import Image from "next/image";
const ContactForm = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-20">
        <div className="flex flex-col gap-2 pb-5">
          <LogoText title="CONTACT WITH US!" />
          <h1 className="text-[40px]">Have Any Questions?</h1>
          <p className="max-w-[680px] text-gray-500">
            Enthusiastically disintermediate one-to-one leadership via business
            e-commerce. Dramatically reintermediate compelling process
            improvements rather than empowered relationships.
          </p>
        </div>
        <div className="flex ">
          <form className="rounded-lg w-full max-w-xl">
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border border-gray-300 p-2 rounded-sm "
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray-300 p-2 rounded-sm w-full"
              />
              <select className="border border-gray-300 p-2 rounded-sm w-full">
                <option>Select Subject</option>
                <option>Subject 1</option>
                <option>Subject 2</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-sm w-full"
              />
            </div>
            <textarea
              placeholder="Write Your Message"
              className="border border-gray-300 p-2 rounded-sm w-full mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#684DF4] text-white p-3 rounded-sm w-full hover:bg-black duration-300"
            >
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
