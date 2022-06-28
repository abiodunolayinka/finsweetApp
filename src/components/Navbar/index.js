import React from "react";
import { useState } from "react";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import { FaTimes, FaBars } from "react-icons/fa";



const Navbar = () => {
  const [Click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!Click);
  };

  return (
    <header classname="relative">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <nav className="navbar">
          <div onClick={handleClick}>
            {Click ? (
              <button>
                <FaBars />
              </button>
            ) : (
              <button>
                <FaTimes />
              </button>
            )}
          </div>
          {!Click ? (
            <div
              className="mobile lg-w-full p-8  text-black z-10 absolute bg-white   sm:text-lg lg:text-xl  lg-hidden right-0 left-0"
              id="mobile-menu"
              onClick={handleClick}
            >
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
