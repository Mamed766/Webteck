"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const RippleBlue: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
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
            hovered ? "bg-white" : "bg-[#684DF4]"
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
            hovered ? "bg-white" : "bg-[#684DF4]"
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
        <div
          className={`z-10 relative duration-300 ${
            hovered ? "text-[#684DF4]" : "text-white"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default RippleBlue;
