"use client";
import React from "react";
import LogoText from "../LogoText/LogoText";
import { GoPlus } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import RippleBlue from "../Effects/RippleBlue";

const slidesLatestData = [
  {
    title: "IT Consultency",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",
    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_1.jpg",
  },
  {
    title: "Web Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_3.jpg",
  },
  {
    title: "App Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_2.jpg",
  },
  {
    title: "App Development",
    description:
      "Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.",

    imageUrl:
      "https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/project_2_4.jpg",
  },
];

const Latest = () => {
  return (
    <div className="max-w-[1300px] py-10 mx-auto">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <LogoText title="PROJECTS" />
          <h2 className="text-[40px] font-bold">
            Our Recent Latest <span className="text-[#684DF4]">Projects</span>
          </h2>
        </div>
        <div className="mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="latestSwiper"
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
          >
            {slidesLatestData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="rounded-lg shadow-lg border border-[#e3e3e3] flex flex-col min-h-[30rem] max-h-[30rem]"
              >
                <div className="relative group flex-1">
                  <div className="relative w-full h-[20rem] overflow-hidden rounded">
                    <Image
                      alt={slide.title}
                      width={1000}
                      height={420}
                      className="rounded group-hover:scale-110 duration-300"
                      objectFit="cover"
                      src={slide.imageUrl}
                    />
                  </div>
                  <div className="bg-[#0a0616] h-full w-full top-0 left-0 transform scale-x-0 group-hover:scale-x-100 duration-300 origin-center flex items-center justify-center bg-opacity-50 z-10 absolute rounded">
                    <RippleBlue>
                      <GoPlus className="text-[50px]" />
                    </RippleBlue>
                  </div>
                </div>
                <div className="flex p-5 text-start gap-2 flex-col items-start justify-start">
                  <h2 className="font-bold text-[24px] hover:text-[#684DF4] cursor-pointer duration-300 ">
                    {slide.title}
                  </h2>
                  <p className="text-[16px] text-gray-500 ">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Latest;
