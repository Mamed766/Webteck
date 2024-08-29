import React from "react";
import LogoText from "../LogoText/LogoText";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedButton from "../Buttons/AnimatedButton";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { ITiltOptions } from "../../_types/type";
import "./WhyChooseUs.scss";

const WhyChooseUs = () => {
  const percentage = 90;
  const percentageSecond = 95;
  const defaultOptions: ITiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="max-w-[1300px] py-10 mx-auto">
      <div className="flex WhyChooseWrap justify-between">
        <div className="flex flex-col gap-5 ">
          <LogoText title="WHY CHOOSE US" />
          <h1 className="font-semibold text-[40px] max-w-[600px]">
            More Than 24+ Years Experience We Provide{" "}
            <span className="text-[#684DF4] "> IT Services</span>
          </h1>
          <p className="text-gray-500 max-w-[600px]">
            Collaboratively envisioneer user friendly supply chains and cross
            unit imperative. Authoritativel fabricate competitive resource and
            holistic. Holisticly restore real time resources whereas
            standardized networks.
          </p>
          <div className="flex">
            <div className="flex items-center gap-2">
              <div style={{ width: 100, height: 100, borderRadius: "50%" }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `#684DF4`,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#fff",
                  })}
                  background
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[20px]">Business Grow</h2>
                <p className="text-[14px] max-w-[200px] text-gray-500">
                  Efficiently transition top-line ideas before market.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ width: 100, height: 100, borderRadius: "50%" }}>
                <CircularProgressbar
                  value={percentageSecond}
                  text={`${percentageSecond}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `#684DF4`,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#fff",
                  })}
                  background
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[20px]">Quality Products</h2>
                <p className="text-[14px] max-w-[200px] text-gray-500">
                  Efficiently transition top-line ideas before market.
                </p>
              </div>
            </div>
          </div>
          <AnimatedButton title="LEARN MORE" />
        </div>
        <div className="relative overflow-hidden">
          <Tilt options={defaultOptions}>
            <div className=" absolute top-[1rem] left-[15rem] flex flex-col items-center justify-center border-[10px] rounded-full border-[#E2E8FA]  h-[10rem] w-[10rem] bg-[#684DF4]">
              <h2 className="text-[36px] text-white font-semibold">10K+</h2>
              <p className="text-[16px] text-white font-semibold">
                Active Clients
              </p>
            </div>
            <div className=" ">
              <Image
                width={600}
                height={100}
                alt=""
                src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/why_2_1.png"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
