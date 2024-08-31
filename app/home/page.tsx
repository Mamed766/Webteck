"use client";
import Image from "next/image";
import React, { ReactElement, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import RippleButton from "../_components/Buttons/RippleButton";
import RippleEffect from "../_components/Effects/RippleEffect";
import { Tilt } from "react-tilt";
import "./homepage.scss";
import Solution from "../_components/Solution/solution";
import TragaHome from "../_components/Traga/TragaHome";
import ProvideServices from "../_components/ProvideServices/ProvideServices";
import WhyChooseUs from "../_components/WhyChooseUs/WhyChooseUs";
import Latest from "../_components/Latest/Latest";
import Counters from "../_components/counters/Counters";
import Process from "../_components/Process/Process";
import Team from "../_components/team/Team";
import CustomerFeedback from "../_components/CustomerFeedback/CustomerFeedback";
import Consultation from "../_components/Consultation/Consultation";
import News from "../_components/News/News";

export default function HomePage(): ReactElement {
  return (
    <div className="">
      <div className="bg-[#F0F4FF] pt-[10rem] pb-[15rem]">
        <Solution />
      </div>
      <div className="bg-white py-10 mt-5 ">
        <TragaHome />
      </div>
      <div className="bg-[#F0F4FF]">
        <ProvideServices />
      </div>
      <div className="bg-[#EEEFF1]">
        <WhyChooseUs />
      </div>
      <div className="bg-white">
        <Latest />
      </div>
      <div
        className="bg-[#684DF4] py-20"
        style={{
          backgroundImage: `url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/01/counter_bg_1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Counters />
      </div>
      <div className="bg-[#F5F5F5]">
        <Process />
      </div>
      <div className="bg-[#F5F5F5]">
        <Team />
      </div>
      <div className="bg-[#F5F5F5] h-[50rem]">
        <CustomerFeedback />
      </div>
      <div className="bg-white ">
        <Consultation />
      </div>
      <div className="bg-[#F5F5F5] mt-10">
        <News />
      </div>
    </div>
  );
}
