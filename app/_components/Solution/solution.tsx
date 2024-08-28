import React from "react";
import RippleEffect from "../Effects/RippleEffect";
import RippleButton from "../Buttons/RippleButton";
import { Tilt } from "react-tilt";
import Image from "next/image";

type Options = {
  reverse: boolean;
  max: number;
  perspective: number;
  speed: number;
  transition: boolean;
  axis: "x" | "y" | null;
  reset: boolean;
  easing: string;
};

const Solution = () => {
  const defaultOptions: Options = {
    reverse: false,
    max: 35,
    perspective: 1000,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex justify-between  home__direction  home__wrap  items-center">
        <div className="flex home__content--wrap relative gap-2 flex-col">
          <div className="absolute left-[-100px] bottom-[200px]">
            <RippleEffect />
          </div>
          <h3 className="text-[#684DF4] font-semibold">
            BEST MARKETING SERVICE
          </h3>
          <h1 className="text-[74px] max-w-[700px] font-bold">
            Make The Easiest Solution For You
          </h1>
          <p className="max-w-[700px] ">
            Energistically harness ubiquitous imperatives without state of the
            art collaboration and idea-sharing. Monotonectally parallel task
            cross-unit experiences and front-end.
          </p>

          <div className="flex mt-10 items-center gap-[2rem]">
            <div>
              <button className="bg-[#684DF4] rounded-md relative group flex items-center justify-center gap-1 text-white p-3 w-[12rem]">
                <div className="absolute inset-0 bg-black rounded-md transform scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10">ABOUT US</span>
              </button>
            </div>

            <div className="flex gap-2">
              <RippleButton />
              <div>
                <h3 className="font-semibold ">Watch Our Story</h3>
                <p className="text-gray-500">Subscribe Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-10">
          <Tilt options={defaultOptions}>
            <div className="flex home__image--wrap items-center">
              <Image
                height={150}
                width={500}
                layout="responsive"
                sizes=""
                src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/hero_img_4_1.png"
                alt="sadas"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Solution;
