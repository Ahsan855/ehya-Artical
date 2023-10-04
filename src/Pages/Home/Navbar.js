import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink
          className=" px-3 mr-5 text-primary font-semibold hover:bg-secondary hover:text-white"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-3 mr-5  text-primary font-semibold  hover:bg-secondary hover:text-white"
          to="/articles"
        >
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-3 mr-5 text-primary font-semibold hover:bg-secondary hover:text-white"
          to="/pages"
        >
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-3 mr-5 text-primary font-semibold hover:bg-secondary hover:text-white"
          to="/pricing"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mr-5 px-3 text-primary font-semibold hover:bg-secondary hover:text-white"
          to="/faq"
        >
          Faq
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className=" px-5 py-2 bg-white border hover:text-white hover:bg-[#1565D8] border-[#1565D8] text-[16px] rounded-full font-bold text-[#1565D8]"
        >
          Sign in
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="z-50 bg-white shadow-2xl sticky top-0">
      <div>
        <div className=" max-w-7xl mx-auto">
          <div className="navbar bg-base-100">
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
              <Link to="/" className="btn btn-ghost text-xl uppercase">
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
