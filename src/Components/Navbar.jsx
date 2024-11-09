import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 py-2 lg:px-12 shadow border-solid border-t-1 ">
      {/*THus is links */}

      <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-black lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-bermuda_ mr-2"
          >
            Home
          </Link>

          <a
            href="/about"
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-bermuda_  mr-2"
          >
            About
          </a>
          <Link
            to="/service"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-bermuda_  mr-2"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-bermuda_  mr-2"
          >
            Contact
          </Link>
        </div>

        {/*this is search bar */}

        <div className="relative text-gray-600 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-2"
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
