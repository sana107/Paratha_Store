import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./Features/Cart/CartSlice";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {
  const dispatch = useDispatch();
  const { allcart } = useSelector((state) => state.cart);
  const { mode } = useSelector((state) => state.darkMode);


  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-out-back",
      delay: 200,
    });
  }, []);

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
          {allcart?.map((item) => (
            <div key={item.id} data-aos ="fade-up">
              <Card item = {item}/>
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
