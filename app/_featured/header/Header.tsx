import Image from "next/image";
import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsCursorFill } from "react-icons/bs";
import Dropdown from "@/app/_components/Dropdown";
import {
  blogItems,
  homeItems,
  pagesItems,
  serviceItems,
} from "@/app/_static/mockdb";
const Header = () => {
  return (
    <div className=" bg-[#E1EAFF] shadow-md ">
      <div className=" max-w-[1300px] mx-auto flex gap-20 items-center">
        <div>
          <Image
            src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/logo.svg"
            width="200"
            height="10"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex gap-2  ">
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
        <div></div>
      </div>
    </div>
  );
};

export default Header;
