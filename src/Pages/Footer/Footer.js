import React from "react";
import loveImage from "../../images/footer/Heart.png";
import logo from "../../images/Logo (1).png";
import cercleIcon from "../../images/footer/Icon.png";

const Footer = () => {
  return (
    <div className="bg-[#0D2436] py-10">
      <div className="border-[#1A3245] w-11/12 mx-auto border-b-2"></div>
      <div className="flex md:flex-row flex-col-reverse items-center justify-center lg:gap-x-20 max-w-7xl mx-auto">
        <div className="py-5 md:py-0 text-center px-10">
          <img className="w-1/2 mx-auto md:mx-0" src={logo} alt="" />
          <p className="my-5 md:text-[16px] text-center w-11/12 mx-auto md:mx-0 md:text-left text-[#5A7184]">
            Build a modern and creative website with crealand
          </p>
          <div className="flex justify-center md:justify-start flex-row gap-2">
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row lg:flex-row gap-x-10 lg:gap-x-28 container mx-auto pt-16 px-10 md:px-10  text-[#959EAD]">
          <div>
            <header className="font-bold py-5 text-lg text-[#5A7184]">
              Product
            </header>
            <li className="list-none py-2">
              <a className="link link-hover">Landingpage</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Features</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Documentation</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Referal Program</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Pricing</a>
            </li>
          </div>
          <div>
            <header className="font-bold py-5  text-lg text-[#5A7184]">
              Service
            </header>
            <li className="list-none py-2">
              <a className="link link-hover">Documentation</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Design</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Themes</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">illustrations</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">UI Kit</a>
            </li>
          </div>

          <div>
            <header className="font-bold py-5 text-lg text-[#5A7184]">
              Company
            </header>
            <li className="list-none py-2">
              <a className="link link-hover">About</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Terms</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Privacy Policy</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Careers</a>
            </li>
          </div>
          <div>
            <header className="font-bold py-5 text-lg text-[#5A7184]">
              More
            </header>
            <li className="list-none py-2">
              <a className="link link-hover">Documentation</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">License</a>
            </li>
            <li className="list-none py-2">
              <a className="link link-hover">Chagelog</a>
            </li>
          </div>
        </div>
      </div>

      <div className="text-center pt-5 bg-[#0D2436] text-[#959EAD]">
        <img className="mx-auto my-5" src={loveImage} alt="" />
        <span>Copyright © 2023. Crafted with love.</span>
      </div>
    </div>
  );
};

export default Footer;
