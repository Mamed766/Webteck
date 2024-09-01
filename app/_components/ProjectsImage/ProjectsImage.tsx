"use client";
import { cartState } from "@/app/atoms/CartState";
import { fetchPosts } from "@/app/services/FetchPosts";
import { urlFor } from "@/app/services/ImageUrl";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlus, FaX } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Project {
  id: string;
  title: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  pricing?: number;
  category: string;
  quantity: number;
}

const ProjectsImage = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, [setCartItem]);

  const addItemToCart = (project: Project) => {
    const existingItemIndex = cartItem.findIndex(
      (pro) => pro.mainImage?.asset._id === project.mainImage?.asset._id
    );

    let updatedCart;
    if (existingItemIndex === -1) {
      updatedCart = [...cartItem, { ...project, quantity: 1 }];
    } else {
      updatedCart = cartItem.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    setCartItem(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success(`${project.title} added to cart`);
  };

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function getProjects() {
      const fetchedProjects = await fetchPosts();
      setProjects(fetchedProjects);
    }
    getProjects();
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <ToastContainer />
      <div className="rounded overflow-hidden flex flex-wrap justify-center gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-[25rem] max-h-[40rem] rounded overflow-hidden"
          >
            <div className="relative group overflow-hidden min-h-[20rem] max-h-[30rem]">
              <Image
                src={urlFor(project.mainImage).url() || ""}
                onClick={() =>
                  handleImageClick(urlFor(project?.mainImage)?.url() || "")
                }
                className="group-hover:scale-110 duration-300 relative z-[1]"
                alt={project.title}
                height={1000}
                width={10000}
              />
              <div
                className="absolute opacity-0 group-hover:opacity-100 duration-300 h-1/2 w-full bottom-0 left-0 z-[2]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(106, 13, 173, 0.3), rgba(138, 43, 226, 0.2), rgba(147, 112, 219, 0.1), rgba(255, 255, 255, 0))",
                }}
              ></div>
              <div className="absolute translate-y-[10rem] duration-300 group-hover:translate-y-[0] left-[2.5rem] bottom-3 w-[20rem] h-[6rem] bg-[#684DF4] text-white rounded-lg flex items-center p-4 z-[3] cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm">
                    {project.category} {project.pricing}$
                  </p>
                </div>
                <div
                  onClick={() => addItemToCart(project)}
                  className="absolute right-[-1.5rem] hover:bg-[#101A33] duration-300 top-[1.5rem] rounded bg-white p-5"
                >
                  <FaPlus className="text-[#684DF4]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-[1000]"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-h-[60rem] h-[30rem] items-center object-cover flex justify-center max-w-[60rem]">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  objectFit="cover"
                  width={500}
                  height={300}
                />
              </div>
              <button
                className="absolute top-[-5rem] right-0 text-white bg-gray-300 rounded-full p-3"
                onClick={handleClose}
              >
                <FaX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsImage;
