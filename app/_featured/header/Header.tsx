import Image from "next/image";
import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsCursorFill } from "react-icons/bs";

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
            <li className="flex h-[5rem]  font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              HOME <LiaAngleDownSolid className="mt-1" />{" "}
            </li>
            <li className="flex h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              ABOUT US
            </li>
            <li className="flex h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              SERVICES <LiaAngleDownSolid className="mt-1" />
            </li>
            <li className="flex relative group h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              PAGES <LiaAngleDownSolid className="mt-1" />
              <ul className="flex-col shadow-md p-2 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out absolute w-[10rem] top-[80px] bg-[#E1EAFF]">
                <li className="flex py-1 items-center gap-1">
                  <BsCursorFill className="text-[#684DF4]" />
                  <span className="text-black hover:text-[#684DF4] duration-300">
                    Shop Page
                  </span>
                </li>
                <li className="flex py-1 items-center gap-1">
                  <BsCursorFill className="text-[#684DF4]" />
                  <span className="text-black hover:text-[#684DF4] duration-300">
                    Team
                  </span>
                </li>
                <li className="flex py-1  items-center gap-1">
                  <BsCursorFill className="text-[#684DF4]" />
                  <span className="text-black hover:text-[#684DF4] duration-300">
                    Team Details
                  </span>
                </li>
                <li className="flex  py-1 items-center gap-1">
                  <BsCursorFill className="text-[#684DF4]" />
                  <span className="text-black hover:text-[#684DF4] duration-300">
                    Projects
                  </span>
                </li>
                <li className="flex py-1 items-center gap-1">
                  <BsCursorFill className="text-[#684DF4]" />
                  <span className="text-black hover:text-[#684DF4] duration-300">
                    Projects details
                  </span>
                </li>
              </ul>
            </li>

            <li className="flex h-[5rem] font-medium items-center cursor-pointer gap-1 hover:text-[#684DF4] duration-300">
              BLOG <LiaAngleDownSolid className="mt-1" />
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
