import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import BreadCrump from "../BreadCrump/BreadCrump";
import { FaAngleRight } from "react-icons/fa6";
import { BsChevronDoubleRight } from "react-icons/bs";
import Link from "next/link";

interface BackgroundProps {
  title: string;
  linkText: string;
  linkHref: string;
  currentText: string;
}

const Background: React.FC<BackgroundProps> = ({
  title,
  linkText,
  linkHref,
  currentText,
}) => {
  return (
    <div
      className="h-[25rem] flex justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/breadcumb-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="text-white">
        <h1 className="text-[40px] font-bold">{title}</h1>

        <div className="flex gap-2 items-center justify-center ">
          <Link href={linkHref} className="hover:underline">
            {linkText}
          </Link>
          <BsChevronDoubleRight />
          <p>{currentText}</p>
        </div>
      </div>
    </div>
  );
};

export default Background;
