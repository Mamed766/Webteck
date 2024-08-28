"use client";
import Image from "next/image";
import React, { useState } from "react";
import RippleButton from "../Buttons/RippleButton";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "./tragaHome.scss";

type TragaOptions = {
  reverse: boolean;
  max: number;
  perspective: number;
  speed: number;
  transition: boolean;
  axis: "x" | "y" | null;
  reset: boolean;
  easing: string;
};

const TragaHome = () => {
  const [activeCard, setActiveCard] = useState("award");
  const defaultOptions: TragaOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex tragaCenter flex-wrap">
        <div className="flex  tragaPhoto relative  w-[40rem] ">
          <Tilt options={defaultOptions}>
            <Image
              height={100}
              width={500}
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/about_3_1.png"
              alt=""
            />
            <div className="absolute top-[50%] left-[47%]  transform -translate-x-1/2 -translate-y-1/2">
              <RippleButton />
            </div>
          </Tilt>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex  gap-2 items-center">
            <Image
              height={30}
              width={30}
              alt=""
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/title_shape_2.svg"
            />
            <h2 className="text-[16px] font-semibold text-[#684DF4]">
              ABOUT TRAGA IT SOLUTIONS
            </h2>
          </div>
          <div>
            <motion.h1
              className="text-[40px] font-bold max-w-[500px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              We Are Increasing Business Success With
              <span className="text-[#684DF4]"> Technology</span>
            </motion.h1>
            <p className="text-gray-500 mb-5 mt-2 max-w-[600px]">
              Synergistically incentivize effective imperatives through fully
              researched intellectual capital. Appropriately fashion
              client-based.
            </p>
            <div className="w-full gap-2 flex">
              <motion.button
                className={`py-2 w-[40%] font-semibold text-white ${
                  activeCard === "award" ? "bg-[#684DF4]" : "bg-[#141D38]"
                }`}
                onClick={() => setActiveCard("award")}
                initial={{ scale: 1 }}
                animate={{ scale: activeCard === "award" ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AWARD WINNING
              </motion.button>
              <motion.button
                className={`py-2 w-[40%] font-semibold text-white ${
                  activeCard === "technology" ? "bg-[#684DF4]" : "bg-[#141D38]"
                }`}
                onClick={() => setActiveCard("technology")}
                initial={{ scale: 1 }}
                animate={{ scale: activeCard === "technology" ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                TECHNOLOGY INDEX
              </motion.button>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="mt-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={activeCard}
              >
                {activeCard === "award" && (
                  <Image
                    height={200}
                    width={200}
                    className="rounded"
                    alt="Award Image"
                    src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/about_3_1_1.jpg"
                  />
                )}
                {activeCard === "technology" && (
                  <Image
                    height={200}
                    width={200}
                    className="rounded"
                    alt="Technology Image"
                    src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/about_3_1_2.jpg"
                  />
                )}
              </motion.div>
              <div className="flex flex-col gap-2">
                {activeCard === "award" && (
                  <>
                    <motion.h2
                      className="text-[24px] font-semibold max-w-[300px]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      An Award-Winning Company.
                    </motion.h2>
                    <motion.p
                      className="text-[14px] max-w-[300px] text-gray-500 "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      Monotonically matrix extensible applications and go
                      forward communities. Synergistically extend client-based
                      manufactured.
                    </motion.p>
                    <div>
                      <motion.button
                        className="bg-[#684DF4] p-3 rounded font-semibold group relative text-white text-[12px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
                        <span className="relative z-10">ABOUT MORE</span>
                      </motion.button>
                    </div>
                  </>
                )}
                {activeCard === "technology" && (
                  <>
                    <motion.h2
                      className="text-[24px] font-semibold max-w-[300px]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      Having 25+ Years Of Experience.
                    </motion.h2>
                    <motion.p
                      className="text-[14px] max-w-[300px] text-gray-500 "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      Monotonically matrix extensible applications and go
                      forward communities. Synergistically extend client-based
                      manufactured.
                    </motion.p>
                    <div>
                      <motion.button
                        className="bg-[#684DF4] p-3 rounded font-semibold relative group text-white text-[12px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
                        <span className="relative z-10">ABOUT MORE</span>
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TragaHome;
