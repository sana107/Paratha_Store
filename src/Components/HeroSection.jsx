import React from "react";
import { useSelector } from "react-redux";
import About from "./About";
import Services from "./Services";
import AvailableOn from "./AvailableOn";
import thali from "../assets/images/thali.png"


const HeroSection = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div>
      <section
        id="hero_Section"
        className={
          mode
            ? "w-full h-screen flex flex-col-reverse lg:flex-row align-center justify-between bg-black p-4"
            : "w-full h-screen flex flex-col-reverse lg:flex-row align-center justify-between bg-bermuda_ p-4"
        }
      >
        <div id="left_side" className="flex flex-col items-start">
          <h1
            className={
              mode
                ? "text-4xl md:text-6xl lg:text-[94px] font-bold pl-4 lg:pl-16 pt-16 text-bermuda_"
                : "text-4xl md:text-6xl lg:text-[94px] font-bold pl-4 lg:pl-16 pt-16"
            }
          >
            PARATHA
          </h1>
          <h3 className="text-3xl md:text-5xl lg:text-[84px] text-white font-bold pl-4 lg:pl-16">
            TIME
          </h3>
          <p
            className={
              mode
                ? "font-semibold pl-4 lg:pl-16 text-white text-sm md:text-base lg:text-lg"
                : "font-semibold pl-4 lg:pl-16 text-black text-sm md:text-base lg:text-lg"
            }
          >
            "Homemade authentic paratha: a tasty bite of tradition in <br />
            every layer!"
          </p>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-6 lg:mt-0 lg:mr-16 ">
          <img
            id="thali"
            className="object-cover h-[250px] w-[350px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[450px] mt-4 lg:mt-16 animate-spin-slow"
            src={thali}
            alt="A delicious thali of paratha"
          />
        </div>
      </section>

      <Services />
      <About />
      <AvailableOn />
    </div>
  );
};

export default HeroSection;
