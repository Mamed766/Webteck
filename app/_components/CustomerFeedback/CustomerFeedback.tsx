"use client";
import React from "react";
import LogoText from "../LogoText/LogoText";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import RippleBlue from "../Effects/RippleBlue";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "@/app/_static/mockdb";

const CustomerFeedback = () => {
  return (
    <div
      className="h-[30rem]"
      style={{
        backgroundImage:
          "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/testi_bg_3.jpg')",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div>
          <div className="flex flex-col py-20 justify-center items-center text-center ">
            <LogoText title="CUSTOMER FEEDBACK" />
            <h2 className="text-[40px] max-w-[600px] font-bold text-white">
              WHAT HAPPY CLIENTS SAYS{" "}
              <span className="text-[#684DF4]  ">ABOUT US ?</span>
            </h2>
          </div>
          <div className=" ">
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
              className="feedbackSwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="relative min-h-[25rem] max-h-[25rem] shadow-lg rounded-lg px-7 pb-5"
                >
                  <div className="py-10  flex justify-between items-center">
                    <div className="max-w-[10rem] rounded border-[10px] border-[#080E1C] ">
                      <Image
                        width={1000}
                        height={1000}
                        alt={testimonial.name}
                        src={testimonial.imageUrl}
                      />

                      <div className="absolute left-[4.5rem] top-[9rem] flex text-white">
                        <RippleBlue>
                          <div className="px-2 py-2">
                            <RiDoubleQuotesL />
                          </div>
                        </RippleBlue>
                      </div>
                    </div>
                    <div className="flex gap-1 text-[14px] text-[#683DF4]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-col justify-start items-start">
                    <p className="flex text-[16px] text-gray-500 items-start justify-start text-start">
                      {testimonial.testimonial}
                    </p>
                    <h2 className="font-bold text-[24px]">
                      {testimonial.name}
                    </h2>
                    <p className="text-[14px] text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
