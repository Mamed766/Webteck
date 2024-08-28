"use client";
import Image from "next/image";
import React from "react";

interface ILogotext {
  title: string;
}

const LogoText: React.FC<ILogotext> = ({ title }) => {
  return (
    <div className="flex  gap-2 items-center">
      <Image
        height={30}
        width={30}
        alt=""
        src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/title_shape_2.svg"
      />
      <h2 className="text-[16px] font-semibold text-[#684DF4]">{title}</h2>
    </div>
  );
};

export default LogoText;
