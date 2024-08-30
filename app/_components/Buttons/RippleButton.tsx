"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const RippleButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className={`absolute top-0 left-0 w-full h-full rounded-full ${
            hovered ? "bg-black" : "bg-[#684DF4]"
          }`}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeOut",
          }}
        />
        <motion.div
          className={`absolute top-0 left-0 w-full h-full rounded-full ${
            hovered ? "bg-black" : "bg-[#684DF4]"
          }`}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeOut",
            delay: 1.5,
          }}
        />
        <button
          className="relative z-[1]
            hover:bg-black
            duration-300
        bg-[#684DF4] flex items-center justify-center text-white h-[3rem] w-[3rem] rounded-full"
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default RippleButton;
