import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface IButton {
  title: string;
}

const AnimatedButton: React.FC<IButton> = ({ title }) => {
  return (
    <button className="bg-[#684DF4] rounded-md relative group flex items-center justify-center gap-1 text-white p-3 w-[12rem]">
      <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
      <span className="relative z-10">{title}</span>
      <FaArrowRight className="z-10 text-[12px]" />
    </button>
  );
};

export default AnimatedButton;
