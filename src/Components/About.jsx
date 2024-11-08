import React from "react";
import { useSelector } from "react-redux";
import blackimage from "../assets/images/aboutus4.jpg";

const About = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div>
      <div>
        <section
          id="hero_Section"
          className={
            mode
              ? "flex justify-center items-center flex-col py-8 md:py-12 lg:py-16 bg-black"
              : "flex justify-center items-center flex-col py-8 md:py-12 lg:py-16 bg-white"
          }
        >
          <div>
            <h1
              className={
                mode
                  ? "text-2xl md:text-3xl lg:text-[34px] font-bold text-white"
                  : "text-2xl md:text-3xl lg:text-[34px] font-bold text-black"
              }
            >
              ABOUT US
            </h1>
            <p
              className={
                mode
                  ? "font-light pb-6 md:pb-12 lg:pb-16 text-white"
                  : "font-light pb-6 md:pb-12 lg:pb-16 text-black"
              }
            >
              "Our Story From The Start"
            </p>
          </div>

          <div
            className={
              mode
                ? "w-full flex flex-col lg:flex-row items-center justify-start bg-black p-4 lg:p-8"
                : "w-full flex flex-col lg:flex-row items-center justify-start bg-gray-100 p-4 lg:p-8"
            }
          >
            <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-4 lg:mb-0">
              <img
                id="thali"
                src={blackimage}
                alt="Our paratha story"
                className="object-cover h-[250px] w-[300px] md:h-[300px] md:w-[350px] lg:h-[400px] lg:w-[450px] ml-0 lg:ml-16 mt-4"
              />
            </div>

            <div
              id="right_side"
              className="flex justify-center items-start flex-col px-4 lg:px-8 text-center lg:text-left"
            >
              <p
                id="about_head"
                className={
                  mode
                    ? "font-semibold text-white pb-4 text-lg md:text-xl"
                    : "font-semibold text-black pb-4 text-lg md:text-xl"
                }
              >
                "Experience the taste of home with every bite at Yum Yum <br />
                Paratha —where authentic flavors meet your cravings!"
              </p>
              <p
                className={
                  mode
                    ? "text-gray-300 text-sm md:text-base"
                    : "text-black text-sm md:text-base"
                }
              >
                Welcome to Yum Yum Paratha! We are an authentic paratha store
                <br />
                dedicated to preparing delicious, homemade-style parathas that
                <br />
                capture the warmth of family cooking. Our menu features a wide
                <br />
                range of flavorful parathas, complemented by a selection of
                <br />
                homemade achaars and more. Join us in savoring the rich <br />
                tastes and traditions that make every meal a delightful
                experience!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
