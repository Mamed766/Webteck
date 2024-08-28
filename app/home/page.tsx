"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import RippleButton from "../_components/Buttons/RippleButton";
import RippleEffect from "../_components/Effects/RippleEffect";
import { Tilt } from "react-tilt";
import "./homepage.scss";
import Solution from "../_components/Solution/solution";
import TragaHome from "../_components/Traga/TragaHome";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <div className="bg-[#F0F4FF] pt-[10rem] pb-[15rem]">
        <Solution />
      </div>
      <div className="bg-white mt-5 ">
        <TragaHome />
      </div>
    </div>
  );
};

export default HomePage;
