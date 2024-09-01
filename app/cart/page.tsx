"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/CartState";
import axios from "axios";

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
    <div>
      <div className="container mx-auto py-[20rem]">
        {cartItem.length <= 0 ? (
          <h1 className="text-center text-4xl ">Your Cart Is Empty</h1>
        ) : (
          <>
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.mainImage?.asset.url}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="text-lg font-bold">
                  {item.pricing}$ x {item.quantity}
                </div>
                <div className="text-lg font-bold">
                  Total: {(item.pricing || 0) * item.quantity}$
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-8">
              <button
                onClick={createCheckoutSession}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
