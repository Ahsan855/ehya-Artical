import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import arrow from "../../images/icon/angle-down.png";
// import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [hovermenuOpen, setHoverMenuOpen] = useState(false);

  const toggleHoverMenu = () => {
    setHoverMenuOpen(!hovermenuOpen);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const menuItem = (
    <>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500 py-2">
        <NavLink to="/articles">Articles</NavLink>
      </li>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500 py-2">
        <NavLink to="/pages" className="relative" onClick={toggleMenu}>
          Pages
          <img
            className="absolute top-2 -right-3 md:top-3 md:-right-0"
            src={arrow}
            alt=""
          />
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
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500 py-2">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="text-primary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700 hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500 py-2">
        <NavLink to="/faq">Faq</NavLink>
      </li>
      {isLoggedIn ? (
        <li>
          <NavLink
            to="/login"
            onClick={handleToggle}
            className=" px-6 py-2 bg-white border hover:text-white
            hover:bg-[#1565D8] border-[#1565D8] text-[16px] rounded-full
            font-bold text-[#1565D8]"
          >
            {" "}
            Sign in
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            onClick={handleToggle}
            className=" px-6 py-2 bg-white border hover:text-white hover:bg-[#1565D8] border-[#1565D8] tex-[16px] rounded-full font-bold text-[#1565D8]"
          >
            SignOut
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="z-50 bg-[#F9FCFF] sticky top-0">
      <div>
        <div className=" max-w-7xl mx-auto bg-[#F9FCFF]">
          <div className=" flex justify-between items-center px-5 pt-5">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="">
              <div className="dropdown">
                {/* <FaBars /> */}
                <label
                  tabIndex="0"
                  onClick={toggleHoverMenu}
                  className="btn btn-ghost block lg:hidden top-5 right-0 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      // d="M4 6h16M4 12h8m-8 6h16"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex="0"
                  className={`${
                    hovermenuOpen ? "block" : "hidden"
                  } text-center absolute lg:hidden top-10 bg-gray-100 right-0 border-blue-500 border-2 mt-3 p-5 shadow rounded-box`}
                >
                  {/* menu menu-compact dropdown-content  */}
                  {menuItem}
                </ul>
              </div>
            </div>
            <div className="navbar-end  hidden lg:flex">
              <ul className="menu menu-horizontal p-0 gap-y-5">{menuItem}</ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
