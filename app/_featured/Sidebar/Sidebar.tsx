import { auth } from "@/app/firebase/config";
import { deleteCookie } from "cookies-next";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      deleteCookie("user");
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div
        className={`fixed z-30 flex flex-col bg-clip-border  rounded-xl bg-white text-gray-700 h-screen w-full max-w-[20rem]  shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-2 p-4 bg-[#E2E8FA]">
          <h5 className=" flex justify-center   antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
            <Image
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/logo.svg"
              width="200"
              height="10"
              alt="Logo"
            />
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
              <Link className="w-full py-3" href="/home">
                Home
              </Link>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
              <Link className="w-full py-3" href="/projects">
                Projects
              </Link>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
              <Link className="w-full py-3" href="/contact">
                Contact Us
              </Link>
            </div>

            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
              <Link className="w-full py-3" href="/cart">
                Cart
              </Link>
            </div>

            <div
              onClick={() => {
                handleLogout();
                onClose();
              }}
              role="button"
              className="flex  items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid py-3 place-items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              Log Out
            </div>
          </nav>
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          ></div>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed z-20 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
