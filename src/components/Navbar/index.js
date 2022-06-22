import React from "react";
import { useState } from "react";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  const [Click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!Click);
  };

  return (
    <header classname= "relative">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <nav className="navbar">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            {Click ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                X
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          {!Click ? (
            <div className= "mobile lg-w-full p-8  text-black z-10 absolute bg-white   sm:text-lg lg:text-xl  lg-hidden right-0 left-0" id="mobile-menu">
              <ul className=" items-center">
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/">Home</Link>
                </li>
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/Product">Product</Link>
                </li>
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/Pricing">Pricing</Link>
                </li>
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold">
                  <Link to="/Contact">Contact</Link>
                </li>

                <Link to="/Pricing">
                  <Button label="Free Trial" color="white" bg="primary" />
                </Link>
              </ul>
            </div>
          ) : null}
        </nav>
        <ul className="navlinks flex items-center">
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/">Home</Link>
          </li>
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/product">Product</Link>
          </li>
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="animate__animated animate__wobble animate__slower	4s">
            <Link to="/contact">Contact</Link>
          </li>
          <Button label="Free Trial" color="white" bg="primary" />
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
