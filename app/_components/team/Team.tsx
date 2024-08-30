"use client";
import React from "react";
import LogoText from "../LogoText/LogoText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import RippleDiv from "../Effects/RippleDiv";
import RippleBlue from "../Effects/RippleBlue";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlus,
  FaTwitter,
} from "react-icons/fa6";
const teamMembers = [
  {
    name: "Alex Furnandes",
    role: "Project Manager",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_2.jpg",
  },
  {
    name: "Maria Garcia",
    role: "UI/UX Designer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_1.jpg",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_3.jpg",
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/team_3_4.jpg",
  },
];

const Team = () => {
  return (
    <div className="max-w-[1300px] py-20 mx-auto">
      <div>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <LogoText title="GREAT TEAM" />
          <h1 className="text-[40px] font-bold">
            See Our Skilled Expert <span className="text-[#684DF4]">Team</span>
          </h1>
        </div>
        <div className="mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1260: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="teamSwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                style={{
                  transition: "background-color 0.3s, color 0.3s",
                }}
                className="rounded-md max-h-[30rem] group overflow-hidden hover:bg-[#684DF4] transition-colors hover:text-white  duration-300 shadow-lg"
              >
                <div className=" overflow-hidden">
                  <div className="overflow-hidden relative p-5 pb-10">
                    <Image
                      className="rounded-md max-h-[20rem]"
                      width={1000}
                      height={1000}
                      alt={member.name}
                      src={member.imageUrl}
                    />

                    <div className="absolute  right-10 bottom-5">
                      <ul className="mb-5 flex relative right-1 flex-col gap-3 opacity-0 h-0 w-0 group-hover:opacity-100 group-hover:h-auto  group-hover:w-auto">
                        <li className="bg-white  text-[#684DF4]   flex items-center justify-center px-4 py-4 rounded-full">
                          <FaInstagram />
                        </li>
                        <li className="bg-white text-[#684DF4] flex items-center justify-center px-4 py-4 rounded-full">
                          <FaFacebook />
                        </li>
                        <li className="bg-white  text-[#684DF4] flex items-center justify-center px-4 py-4 rounded-full">
                          <FaLinkedin />
                        </li>
                        <li className="bg-white text-[#684DF4] flex items-center justify-center px-4 py-4 rounded-full">
                          <FaTwitter />
                        </li>
                      </ul>

                      <RippleBlue>
                        <div className="p-3">
                          <FaPlus />
                        </div>
                      </RippleBlue>
                    </div>
                  </div>
                  <div className="flex flex-col pb-5">
                    <h2 className="font-bold text-[24px]">{member.name}</h2>
                    <p className="text-[#684DF4] duration-300 font-semibold group-hover:text-white">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
