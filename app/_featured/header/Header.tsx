import Image from "next/image";
import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsCursorFill } from "react-icons/bs";
import Dropdown from "@/app/_components/Dropdown";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import {
  blogItems,
  homeItems,
  pagesItems,
  serviceItems,
} from "@/app/_static/mockdb";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className=" bg-[#E1EAFF] shadow-md ">
      <div className=" max-w-[1300px] mx-auto flex justify-between items-center">
        <div>
          <Image
            src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/logo.svg"
            width="200"
            height="10"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex gap-5  ">
            <li className="flex h-[5rem] group  font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              HOME <LiaAngleDownSolid className="mt-1" />{" "}
              <Dropdown items={homeItems} />
            </li>
            <li className="flex h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              ABOUT US
            </li>
            <li className="flex group h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              SERVICES <LiaAngleDownSolid className="mt-1" />
              <Dropdown items={serviceItems} />
            </li>
            <li className="flex relative group h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              PAGES <LiaAngleDownSolid className="mt-1" />
              <Dropdown items={pagesItems} />
            </li>
            <li className="flex h-[5rem] group font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              BLOG <LiaAngleDownSolid className="mt-1" />
              <Dropdown items={blogItems} />
            </li>
            <li className="flex h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              CONTACT US
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-white p-4 rounded-full border cursor-pointer duration-300 hover:text-white hover:bg-[#684DF4]  ease-in-out  border-gray-200 shadow-md">
            <IoSearchOutline />
          </div>
          <div className="bg-white p-4 rounded-full border cursor-pointer duration-300 hover:text-white hover:bg-[#684DF4]  ease-in-out  border-gray-200 shadow-md">
            <RiShoppingCartLine />
          </div>
          <div>
            <button className="bg-[#684DF4] relative group flex items-center justify-center gap-1 text-white p-2 w-[12rem]">
              <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
              <span className="relative z-10">MAKE APPOINTMENT</span>
              <FaArrowRight className="z-10 text-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
