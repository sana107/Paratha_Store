import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./Features/theme/ThemeSlice";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import myimage from "../assets/images/myImage.png";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <header className="flex align-center justify-between px-4 bg-bermuda_">
      <div className="flex align-center justify-center">
        <img id="Logoji" src={myimage} alt="Description" />
      </div>

      <div id="divji" className="flex align-center justify-between">
      
      <div id="cart_icon">
      {/* Wrap the FontAwesomeIcon inside Link for navigation */}
      <Link to="/AddCart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className={
            mode
              ? "px-2 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              : "px-2 py-2 text-sm font-medium text-white bg-white rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          }
        >
          
        </button>
      </div>
    </header>
  );
};

export default Header;
