"use client";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-[#F0F4FF]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-center">
          <div className="flex gap-2 flex-col">
            <h3 className="text-[#684DF4] font-semibold">
              BEST MARKETING SERVICE
            </h3>
            <h1 className="text-[74px] max-w-[700px] font-bold">
              Make The Easiest Solution For You
            </h1>
            <p>
              Energistically harness ubiquitous imperatives without state of the
              art collaboration and idea-sharing. Monotonectally parallel task
              cross-unit experiences and front-end.
            </p>

            <div className="flex items-center gap-[2rem]">
              <div>
                <button className="bg-[#684DF4] rounded-md relative group flex items-center justify-center gap-1 text-white p-3 w-[12rem]">
                  <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
                  <span className="relative z-10">ABOUT US</span>
                </button>
              </div>

              <div className="flex gap-2">
                <button className="bg-[#684DF4] flex items-center justify-center text-white h-[3rem] w-[3rem]  rounded-full">
                  <FaPlay />
                </button>
                <div>
                  <h3 className="font-semibold ">Watch Our Story</h3>
                  <p className="text-gray-500">Subscribe Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              height={150}
              width={1000}
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/hero_img_4_1.png"
              alt="sadas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
