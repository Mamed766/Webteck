"use client";
import Image from "next/image";
import React from "react";
import LogoText from "../LogoText/LogoText";
import AnimatedButton from "../Buttons/AnimatedButton";
import "./Consultation.scss";

const Consultation = () => {
  return (
    <div className="max-w-[1300px] mt-10 mx-auto">
      <div className="bg-[#F5F5F5] flex consultationDirection justify-between gap-5 items-center rounded overflow-hidden  ">
        <div className="max-w-full">
          <Image
            alt=""
            className="consultationImage"
            src="https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/customer_support.jpg"
            width={600}
            height={100}
          />
        </div>
        <div>
          <LogoText title="LET'S CONSULTATION" />
          <h1 className="text-[40px] font-semibold max-w-[600px]">
            Lets`s Talk About Business Solutions{" "}
            <span className="text-[#684DF4]">With Us</span>
          </h1>
          <AnimatedButton title="CONTACT US" />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
