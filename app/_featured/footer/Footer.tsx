import AnimatedButton from "@/app/_components/Buttons/AnimatedButton";
import { ItServicesLink, QuickLinks } from "@/app/_static/mockdb";
import Image from "next/image";
import React from "react";
import {
  FaAngleRight,
  FaCalendar,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <div
      className="bg-[#080E1C] py-10"
      style={{
        backgroundImage:
          "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/footer_bg_2.png')",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex  flex-col gap-10">
          <div className="flex gap-5 flex-wrap items-center footerCenter justify-between">
            <div className="max-w-[300px] border-[#684DF4] border-r-2 flex items-center pr-[2rem]">
              <Image
                height={100}
                width={200}
                alt=""
                src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/logo-white.svg"
              />
            </div>
            <div className="flex text-white flex-col">
              <h2 className=" text-[36px] font-semibold">News Subscription</h2>
              <p className="text-[16px]">
                Get Latest Deals from Waker’s Inbox & Subscribe Now
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex w-full px-3 py-4 border rounded-md items-center">
                <input
                  className=" w-full outline-none bg-transparent text-white"
                  placeholder="Email Address"
                  type="text"
                />

                <FaEnvelope className="text-[#684DF4]" />
              </div>
              <AnimatedButton title="SUBSCRIBE" />
            </div>
          </div>
          <div className="flex gap-1 flex-wrap justify-center items-center">
            <div className="w-[20rem]">
              <h2 className="text-white text-[24px] font-semibold">
                ABOUT COMPANY
              </h2>
              <div className="flex items-center">
                <div className="h-[2px] w-[30%] bg-[#684DF4]"></div>
                <div className="h-3 w-3 bg-white rounded-full  border-[2px] border-[#684DF4]"></div>
              </div>
              <p className="text-gray-500">
                Professionally redefine transparent ROI through low-risk
                high-yield imperatives. Progressively create empowered. cost
                effective users via team driven.
              </p>
              <div className="flex mt-3 gap-2">
                <div className="border hover:bg-[#684DF4] duration-300 px-3 py-3 rounded-full text-white">
                  <FaFacebookF />
                </div>
                <div className="border hover:bg-[#684DF4] duration-300 px-3 py-3 rounded-full text-white">
                  <FaTwitter />
                </div>
                <div className="border hover:bg-[#684DF4] duration-300 px-3 py-3 rounded-full text-white">
                  <FaInstagram />
                </div>
                <div className="border hover:bg-[#684DF4] duration-300 px-3 py-3 rounded-full text-white">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="w-[20rem]">
              <h2 className="text-white text-[24px] font-semibold">
                QUICK LINKS
              </h2>
              <div className="flex items-center">
                <div className="h-[2px] w-[30%] bg-[#684DF4]"></div>
                <div className="h-3 w-3 bg-white rounded-full  border-[2px] border-[#684DF4]"></div>
              </div>
              <ul className="text-white flex flex-col gap-1">
                {QuickLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="flex hover:text-[#684DF4] duration-300 items-center gap-1"
                    >
                      <FaAngleRight /> {link}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[20rem]">
              <h2 className="text-white text-[24px] font-semibold">
                IT SERVICES
              </h2>
              <div className="flex items-center">
                <div className="h-[2px] w-[30%] bg-[#684DF4]"></div>
                <div className="h-3 w-3 bg-white rounded-full  border-[2px] border-[#684DF4]"></div>
              </div>
              <ul className="text-white flex flex-col gap-1">
                {ItServicesLink.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="flex hover:text-[#684DF4] duration-300 items-center gap-1"
                    >
                      <FaAngleRight /> {link}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[20rem]">
              <h2 className="text-white text-[24px] font-semibold">
                RECENT POSTS
              </h2>
              <div className="flex items-center">
                <div className="h-[2px] w-[30%] bg-[#684DF4]"></div>
                <div className="h-3 w-3 bg-white rounded-full  border-[2px] border-[#684DF4]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className=" rounded overflow-hidden max-w-[5rem] max-h-[5rem]">
                    <Image
                      height={500}
                      width={500}
                      className="hover:scale-110 duration-300"
                      src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-1-80x80.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-white flex flex-col gap-2">
                    <h2 className="hover:text-[#684DF4] duration-300 ">
                      Unsatiable entreaties may collecting Power.
                    </h2>
                    <p className="flex items-center gap-1">
                      <FaCalendar className="text-[#684DF4]" />
                      <span className="hover:text-[#684DF4] duration-300">
                        Feb 13, 2023
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className=" rounded overflow-hidden max-w-[5rem] max-h-[5rem]">
                    <Image
                      height={500}
                      width={500}
                      className="hover:scale-110 duration-300"
                      src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-4-80x80.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-white flex flex-col gap-2">
                    <h2 className="hover:text-[#684DF4] duration-300 ">
                      Unsatiable entreaties may collecting Power.
                    </h2>
                    <p className="flex items-center gap-1">
                      <FaCalendar className="text-[#684DF4]" />
                      <span className="hover:text-[#684DF4] duration-300">
                        Feb 13, 2023
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
