import React from "react";
import { BsCursorFill } from "react-icons/bs";
import { DropdownProps } from "../_types/type";
import Link from "next/link";

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="flex-col shadow-md p-2 z-10 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-in-out absolute w-[10rem] top-[80px] bg-[#E1EAFF]">
      {items.map((item, index) => (
        <Link
          href={`/${item.link}`}
          key={index}
          className="flex py-1 items-center gap-1"
        >
          <BsCursorFill className="text-[#684DF4]" />
          <span className="text-black hover:text-[#684DF4] duration-300">
            {item.label}
          </span>
        </Link>
      ))}
    </ul>
  );
};

export default Dropdown;
