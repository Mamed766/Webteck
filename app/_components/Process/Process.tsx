import React from "react";
import LogoText from "../LogoText/LogoText";
import Image from "next/image";
import RippleBlue from "../Effects/RippleBlue";
import "./Process.scss";
import { stepsData } from "@/app/_static/mockdb";
const Process = () => {
  return (
    <div className="max-w-[1300px] py-20 mx-auto">
      <div className="">
        <div className="flex gap-2 flex-col justify-center items-center">
          <LogoText title="WORK PROCESS" />
          <h2 className="text-[40px] font-bold">
            How To Work <span className="text-[#684DF4]">It!</span>
          </h2>
        </div>
        <div className="flex flex-wrap processWrap gap-5 mt-16 justify-between relative">
          <div className="w-full displayProcessImage top-16 absolute">
            <Image
              height={1000}
              width={10000}
              alt=""
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/process_line-1.svg"
            />
          </div>
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="relative flex rounded shadow-md bg-white flex-col px-5 py-10 items-center"
            >
              <div className="absolute left-[-1rem] top-[-2rem]">
                <RippleBlue>
                  <p className="text-[36px] px-3">{step.number}</p>
                </RippleBlue>
              </div>
              <Image height={30} width={30} src={step.icon} alt="" />
              <h2 className=" text-[24px] font-semibold">{step.title}</h2>
              <p className="max-w-[200px] text-gray-500 text-[14px] text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
