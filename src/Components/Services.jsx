import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./Features/Cart/CartSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { allcart } = useSelector((state) => state.cart);
  const { mode } = useSelector((state) => state.darkMode);


  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div>
      <div
        className={
          mode
            ? "flex justify-center items-center flex-col py-16 bg-black"
            : "flex justify-center items-center flex-col py-16"
        }
      >
        <h1
          className={
            mode
              ? "text-[34px] font-bold text-white"
              : "text-[34px] font-bold text-black"
          }
        >
          OUR SERVICES
        </h1>
        <p className={mode ? "font-light text-white" : "font-light text-black"}>
          "Explore a delicious variety of authentic parathas, from classic to
          unique flavors!"
        </p>
      </div>

      {/*This is CARDS*/}

      {/*This is CARDS ROW-1*/}

      <div
        className={
          mode
            ? "flex align-center justify-between px-8 py-8 bg-black"
            : "flex align-center justify-between px-8 py-8 "
        }
      >
        {/*This is CARD*/}

        <div
          className={
            mode
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full bg-black"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full bg-white"
          }
        >
          {allcart?.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={product.img} // Assuming 'img' contains the image URL
                  alt={product.name} // Displaying name in alt text
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name} {/* Displaying product name */}
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
                  ₹{product.price} {/* Displaying price */}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/*This is CARDS ROW-2*/}
      {/* <div
        className={
          mode
            ? "flex align-center justify-between px-8 py-8 bg-black"
            : "flex align-center justify-between px-8 py-8 "
        }
      ></div> */}



    </div>
  );
};

export default Services;
