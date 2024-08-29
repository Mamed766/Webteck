"use client";
import Image from "next/image";
import React from "react";
import { countersData } from "@/app/_static/mockdb";
const Counters = () => {
  return (
    <div className="max-w-[1300px] py-10 mx-auto">
      <div className=" flex flex-wrap gap-5 justify-between items-center   ">
        {countersData.map((project, index) => (
          <div key={index} className="flex group gap-2">
            <div className="bg-white flex justify-center items-center rounded-full h-[7rem] w-[7rem]">
              <Image
                width={50}
                height={50}
                alt={project.description}
                className="group-hover:animate-rotateY"
                src={project.iconUrl}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="text-[40px] font-bold text-white">
                {project.count}
              </h2>
              <p className="text-white font-semibold">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counters;
