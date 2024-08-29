"use client";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import React from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="cursor z-50"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid #8b7dcf",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        loop: Infinity,
        damping: 15,
      }}
    />
  );
};

export default Cursor;
