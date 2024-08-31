import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ProjectsImage = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <div className=" rounded overflow-hidden flex justify-center gap-2">
        <div className="max-w-[25rem] max-h-[40rem] rounded overflow-hidden ">
          <div className="relative group overflow-hidden min-h-[20rem] max-h-[30rem]">
            <Image
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/project_1_1.jpg"
              className="group-hover:scale-110 duration-300 relative z-10"
              alt=""
              height={1000}
              width={10000}
            />
            <div
              className="absolute opacity-0 group-hover:opacity-100 duration-300 h-1/2 w-full bottom-0 left-0 z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(106, 13, 173, 0.3), rgba(138, 43, 226, 0.2), rgba(147, 112, 219, 0.1), rgba(255, 255, 255, 0))",
              }}
            ></div>
            <div className="absolute translate-y-[10rem] duration-300 group-hover:translate-y-[0] left-[2.5rem] bottom-3 w-[20rem] h-[6rem] bg-[#684DF4] text-white rounded-lg flex items-center p-4 z-30">
              <div>
                <h3 className="text-lg font-bold">IT Consultency</h3>
                <p className="text-sm">Technology</p>
              </div>
              <div className="absolute right-[-1.5rem]  hover:bg-[#101A33] duration-300 top-[1.5rem] rounded bg-white p-5">
                <FaPlus className="text-[#684DF4]" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[25rem] max-h-[40rem] rounded overflow-hidden ">
          <div className="relative group overflow-hidden min-h-[20rem] max-h-[30rem]">
            <Image
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/project_1_1.jpg"
              className="group-hover:scale-110 duration-300 relative z-10"
              alt=""
              height={1000}
              width={10000}
            />
            <div
              className="absolute opacity-0 group-hover:opacity-100 duration-300 h-1/2 w-full bottom-0 left-0 z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(106, 13, 173, 0.3), rgba(138, 43, 226, 0.2), rgba(147, 112, 219, 0.1), rgba(255, 255, 255, 0))",
              }}
            ></div>
            <div className="absolute translate-y-[10rem] duration-300 group-hover:translate-y-[0] left-[2.5rem] bottom-3 w-[20rem] h-[6rem] bg-[#684DF4] text-white rounded-lg flex items-center p-4 z-30">
              <div>
                <h3 className="text-lg font-bold">IT Consultency</h3>
                <p className="text-sm">Technology</p>
              </div>
              <div className="absolute right-[-1.5rem]  hover:bg-[#101A33] duration-300 top-[1.5rem] rounded bg-white p-5">
                <FaPlus className="text-[#684DF4]" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[25rem] max-h-[40rem] rounded overflow-hidden ">
          <div className="relative group overflow-hidden min-h-[20rem] max-h-[30rem]">
            <Image
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/01/project_1_1.jpg"
              className="group-hover:scale-110 duration-300 relative z-10"
              alt=""
              height={1000}
              width={10000}
            />
            <div
              className="absolute opacity-0 group-hover:opacity-100 duration-300 h-1/2 w-full bottom-0 left-0 z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(106, 13, 173, 0.3), rgba(138, 43, 226, 0.2), rgba(147, 112, 219, 0.1), rgba(255, 255, 255, 0))",
              }}
            ></div>
            <div className="absolute translate-y-[10rem] duration-300 group-hover:translate-y-[0] left-[2.5rem] bottom-3 w-[20rem] h-[6rem] bg-[#684DF4] text-white rounded-lg flex items-center p-4 z-30">
              <div>
                <h3 className="text-lg font-bold">IT Consultency</h3>
                <p className="text-sm">Technology</p>
              </div>
              <div className="absolute right-[-1.5rem]  hover:bg-[#101A33] duration-300 top-[1.5rem] rounded bg-white p-5">
                <FaPlus className="text-[#684DF4]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsImage;
