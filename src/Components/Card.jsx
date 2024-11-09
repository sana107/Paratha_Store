import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "./Features/Cart/CartSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  // Handle click event and show toast notification

  const handleClick = (item) => {
    dispatch(addCart(item));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <>
      <div
        key={item.id}
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:bg-bermuda_ hover:-translate-y-6 transform transition-all ease-in-out hover:scale-105 hover:shadow-slate-800 duration-300 dark:bg-gray-800 dark:border-gray-700"
        data-aos="zoom-in"
      >
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={item.img} // Assuming 'img' contains the image URL
            alt={item.name} // Displaying name in alt text
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.name} {/* Displaying item name */}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            {/* Rating can be added here if available, else hardcoded as 5.0 */}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0 {/* Default rating */}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₹{item.price} {/* Displaying price */}
            </span>
            <button onClick={() => handleClick(item)}>
              <a
                href="#"
                className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
