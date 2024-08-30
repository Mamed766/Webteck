"use client";
import React from "react";
import LogoText from "../LogoText/LogoText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaCalendar, FaMessage, FaRightLong } from "react-icons/fa6";
import "./News.scss";

const blogPosts = [
  {
    id: 1,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-4-391x250.jpg",
    date: "13,Feb2023",
    comments: "3 Comments",
    titleLine1: "Regional Manager limited",
    titleLine2: "time management.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Webteck",
  },
  {
    id: 2,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-3-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "What’s the Holding Back It ",
    titleLine2: "Solution Industry?",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
  {
    id: 3,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-1-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "What’s the Holding Back It ",
    titleLine2: "Solution Industry?",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
  {
    id: 4,
    imageUrl:
      "https://wordpress.themeholy.com/webteck/wp-content/uploads/2023/02/blog-s-1-1-391x250.jpg",
    date: "14,Mar2023",
    comments: "5 Comments",
    titleLine1: "Unsatiable entreaties may  ",
    titleLine2: "collecting Power.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate.",
    authorImage:
      "https://secure.gravatar.com/avatar/86d033e2d42a0631cc4f58b82dd01de9?s=96&d=mm&r=g",
    authorName: "By Admin",
  },
];

const News = () => {
  return (
    <div className="max-w-[1300px] py-10 mx-auto">
      <div>
        <div className="flex flex-col justify-center items-center text-[40px] font-bold">
          <LogoText title="News & Articles" />
          <h1>
            Get Every Single Update <span className="text-[#684DF4]">Blog</span>
          </h1>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1260: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="newsSwiper"
          >
            {blogPosts.map((post) => (
              <SwiperSlide
                key={post.id}
                className="rounded group overflow-hidden shadow-lg max-h-[60rem] min-h-[35rem]"
              >
                <div className="max-h-[15rem] min-h-[15rem] mb-5">
                  <Image
                    alt=""
                    className="group-hover:scale-110  duration-300"
                    height={100}
                    width={500}
                    src={post.imageUrl}
                  />
                </div>
                <div className="px-5 newsPad ">
                  <div className="flex gap-5 pt-7 text-gray-400">
                    <div className="flex text-[14px] items-center gap-1">
                      <FaCalendar />
                      <p>{post.date}</p>
                    </div>
                    <div className="flex text-[14px] items-center gap-1">
                      <FaMessage />
                      <p>{post.comments}</p>
                    </div>
                  </div>
                  <div className="flex pt-2 flex-col gap-2 justify-start items-start text-start">
                    <div className="group">
                      <h2 className="text-[24px] font-bold group-hover:text-purple-600 duration-300">
                        <span className="block relative">
                          {post.titleLine1}
                          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                        <span className="block relative">
                          {post.titleLine2}
                          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                      </h2>
                    </div>
                    <p className="text-gray-500 max-h-[5rem] min-h-[5rem] text-[16px]">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex    mt-5 border-b-2 justify-between">
                    <div className="flex items-center gap-1">
                      <div className="max-w-[2rem]">
                        <Image
                          height={100}
                          width={100}
                          className=""
                          alt=""
                          src={post.authorImage}
                        />
                      </div>
                      <p className="text-gray-500">{post.authorName}</p>
                    </div>
                    <div>
                      <button className="border-b-2 text-gray-500 flex items-center gap-1">
                        Read More <FaRightLong />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
