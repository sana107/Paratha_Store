import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./Features/theme/ThemeSlice";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";
import myimage from "../assets/images/myImage.png";
import logo_yum from "../assets/images/logo_yum.png";


const Header = () => {
  
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkMode);
  const { products } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = products.length;

  return (
    <header className={mode ? ("flex align-center justify-between px-4 bg-black ") : ("flex align-center justify-between px-4 bg-bermuda_ ") }>
      <div className="flex align-center justify-center">
       
        {
          mode ? (<img id="Logoji" src={logo_yum} alt="Description" style={{width:"130px",height:"60px",padding:"10px"}}/>) : (<img id="Logoji" src={myimage} alt="Description" />)
        }
      </div>

      <div id="divji" className="flex align-center justify-between">
        <div id="cart_icon">
          {/* Wrap the FontAwesomeIcon inside Link for navigation */}

          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className={mode ? 'text-white' : 'text-black'} />
            {cartItemCount > 0 && (
              <span className="absolute top-5 right-22 bg-red-500 text-white rounded-full text-xs px-1 py-0.4">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden flex items-center focus:outline-none"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className={
            mode
              ? "mr-4 px-1 py-1 text-sm font-medium text-yellow-400 bg-black rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              : "mr-4 px-1 py-1 text-sm font-medium text-white bg-black rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          }
        >
          {mode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
