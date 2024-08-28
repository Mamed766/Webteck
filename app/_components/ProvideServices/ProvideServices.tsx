"use client";
import Image from "next/image";
import React from "react";
import LogoText from "../LogoText/LogoText";
import AnimatedButton from "../Buttons/AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import RippleDiv from "../Effects/RippleDiv";
import { Slide } from "@/app/_types/type";
import { slidesData } from "@/app/_static/mockdb";
import "./ProvideServices.scss";

const ProvideServices = () => {
  return (
    <div className="max-w-[1300px] pt-10 h-[50rem] provideHeight mx-auto">
      <div className="mt-10">
        <div>
          <div
            className="w-full relative rounded-md h-[30rem] "
            style={{
              backgroundImage:
                'url("https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/service_bg_2.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-[5rem] flex provideDirection  w-[80%] justify-between left-[4rem]">
              <div>
                <LogoText title="LATEST PROJECT" />
                <h1 className="text-[40px] text-white max-w-[550px] font-semibold">
                  We Provide Exclusive Service For{" "}
                  <span className="text-[#684DF4]"> Your Business</span>
                </h1>
              </div>
              <div className="mt-16">
                <AnimatedButton title="View All Services" />
              </div>
            </div>
            <div className="translate-y-[260px] provideRes px-10">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1260: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
              >
                {slidesData?.map((slide) => (
                  <SwiperSlide
                    key={slide?.id}
                    className="rounded  hover:bg-[#684DF4]  ease-in-out hover:text-white group flex py-10 flex-col justify-center "
                  >
                    <div className="flex items-center  justify-center">
                      <RippleDiv>
                        <div className="bg-blue-200 rounded-full p-5 h-[5rem] w-[5rem]">
                          <Image
                            height={10}
                            width={10}
                            alt={slide?.title}
                            className="group-hover:animate-rotateY"
                            src={slide?.imageSrc}
                          />
                        </div>
                      </RippleDiv>
                    </div>
                    <h1 className="font-semibold mt-1 text-[24px]">
                      {slide?.title}
                    </h1>
                    <p className="text-[16px] group-hover:text-white text-gray-500">
                      {slide?.description}
                    </p>
                    <div className="w-full mt-3 h-[3rem] justify-center flex">
                      <AnimatedButton title="READ MORE" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvideServices;
