import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import arrow from "../../images/icon/angle-down.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [login, setLogin] = useState(false);

  const menuItem = (
    <>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500">
        <NavLink to="/articles">Articles</NavLink>
      </li>

      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500">
        <NavLink to="/pages" className="relative" onClick={toggleMenu}>
          Pages
          <img className="ml-[-2px]" src={arrow} alt="" />
          {isMenuOpen && (
            <div className="absolute top-6 mt-2 bg-white text-primary rounded shadow-lg">
              {/* Your menu items go here */}
              <ul>
                <li className="p-2">Article 1</li>
                <li className="p-2">Article 2</li>
                <li className="p-2">Article 3</li>
              </ul>
            </div>
          )}
        </NavLink>
      </li>

      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500">
        <NavLink to="/faq">Faq</NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className=" px-6 py-2 bg-white border hover:text-white hover:bg-[#1565D8] border-[#1565D8] text-[16px] rounded-full font-bold text-[#1565D8]"
        >
          {login ? "login" : "LogOut"}
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="z-50 bg-[#F9FCFF] sticky top-0">
      <div>
        <div className=" max-w-7xl mx-auto bg-[#F9FCFF]">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid gap-x-10"
                >
                  {menuItem}
                </ul>
              </div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0 gap-y-5">{menuItem}</ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
