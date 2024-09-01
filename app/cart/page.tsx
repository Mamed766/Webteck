"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/CartState";
import axios from "axios";
import { motion } from "framer-motion";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, [setCartItem]);

  const createCheckoutSession = () => {
    axios
      .post("api/checkout_sessions", { cartItem })
      .then((res) => {
        console.log(res);
        window.location.href = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cartItem.filter((_, i) => i !== index);
    setCartItem(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487846418109-474dd0e7b64b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-[13rem] px-20 mx-auto  lg:py-[13rem]">
        {cartItem.length <= 0 ? (
          <h1 className="text-center text-2xl lg:text-4xl ">
            Your Cart Is Empty
          </h1>
        ) : (
          <>
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="flex mb-5 bg-white shadow-[0px_0px_20px_rgba(104,77,244,0.7)] px-5 rounded-md flex-col md:flex-row justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.mainImage?.asset.url}
                    alt={item.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg md:text-xl font-bold text-[#684DF4]">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="text-lg font-bold mt-4 md:mt-0">
                  {item.pricing}$ x {item.quantity}
                </div>
                <div className="text-lg font-bold mt-4 md:mt-0">
                  Total: {(item.pricing || 0) * item.quantity}$
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(255,0,0,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFromCart(index)}
                  className="mt-4 md:mt-0 ml-0 
                  shadow-[0px_0px_20px_rgba(255,0,0,0.7)]

                  md:ml-4 bg-red-600 text-red-200 px-3 py-1 rounded-md  hover:bg-red-700 transition"
                >
                  Remove
                </motion.button>
              </div>
            ))}
            <motion.div
              className="text-right mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={createCheckoutSession}
                className="bg-[#684DF4] cursor-none shadow-[0px_0px_20px_rgba(104,77,244,0.7)] text-white px-4 py-2 rounded-md transition"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(104,77,244,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Checkout
              </motion.button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
