import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import arrow from "../../images/icon/angle-down.png";

const Navbar = () => {
  // For Menu
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  // Article menu
  const [isMenuOpens, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpens);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const menuItem = (
    <>
      <li>
        <NavLink
          // className={({ isActive }) => (`cursor-pointer rounded-md text-[15px] flex items-center gap-3 hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-gray-700'}`)}
          className={({ isActive }) =>
            `transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue px-5 rounded-lg  hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ${
              isActive
                ? "text-gray-600 font-bold border-b-2 border-b-blue-500"
                : "text-primary"
            } `
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue px-5 rounded-lg  hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ${
              isActive
                ? "text-gray-600 font-bold border-b-2 border-b-blue-500"
                : "text-primary"
            } `
          }
          to="/articles"
        >
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            `transition duration-300 ease-in-out relative transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue px-5 rounded-lg  hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ${
              isActive
                ? "text-gray-600 font-bold border-b-2 border-b-blue-500"
                : "text-primary"
            } `
          }
          onClick={toggleMenu}
        >
          Pages
          <img
            className="absolute top-2 -right-3 md:top-3 md:-right-0"
            src={arrow}
            alt=""
          />
          {isMenuOpens && (
            <div className="absolute top-8 mt-2 bg-white text-primary rounded shadow-lg">
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
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue px-5 rounded-lg  hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ${
              isActive
                ? "text-gray-600 font-bold border-b-2 border-b-blue-500"
                : "text-primary"
            } `
          }
          to="/pricing"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:shadow-outline-blue px-5 rounded-lg  hover:text-blue-500 font-semibold hover:border-b-2 hover:border-b-blue-500  py-2 ${
              isActive
                ? "text-gray-600 font-bold border-b-2 border-b-blue-500"
                : "text-primary"
            } `
          }
          to="/faq"
        >
          Faq
        </NavLink>
      </li>
      {isLoggedIn ? (
        <li className="flex justify-center">
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
        <li className="flex justify-center">
          <NavLink
            to="/login"
            onClick={handleToggle}
            className=" px-6 py-2 bg-white border hover:text-white hover:bg-[#1565D8] border-[#1565D8] tex-[16px] rounded-full font-bold text-[#1565D8]"
          >
            Sign Out
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="z-50 bg-[#F9FCFF] sticky top-0">
      <div>
        <div className=" max-w-7xl mx-auto bg-[#F9FCFF]">
          <div className=" flex justify-between items-center px-5 py-5">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="dropdown">
              {/* For Mobile */}
              <div className="flex h-full items-center justify-between lg:hidden">
                {/* cancle button */}
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 md:mr-4 rounded-md lg:hidden text-primary"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* Mobile toggole button */}
              <ul
                tabIndex="0"
                ref={ref}
                className={`${
                  isMenuOpen
                    ? "right-0 bottom-0 top-0 z-20"
                    : "-right-96 bottom-0 top-0"
                } transition-all duration-300 ease-in-out fixed lg:hidden  flex flex-col  md:w-1/2 w-8/12 h-1/2 py-6 px-6 bg-gray-200 border-r overflow-y-auto`}
              >
                <div className="h-full flex flex-col gap-3  items-start pl-1">
                  <div className=" flex justify-end items-end w-full">
                    <button onClick={() => setIsMenuOpen(false)}>
                      <svg
                        className="h-6 w-6 text-primary cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* menu menu-compact dropdown-content  */}
                  {menuItem}
                </div>
              </ul>
            </div>
            {/* Desktop */}
            <div className="navbar-end  hidden lg:flex">
              <ul className="flex flex-row gap-x-4 justify-end items-center p-0 gap-y-5">
                {menuItem}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
