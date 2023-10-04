import React from "react";
import loveImage from "../../images/footer/Heart.png";
import logo from "../../images/Logo (1).png";
import cercleIcon from "../../images/footer/Icon.png";
import payOn from "../../images/footer/alexander-shatov-CTZhGbSxWLI-unsplash 1.png";
import shape1 from "../../images/footer/Base.png";
import shape2 from "../../images/footer/Base (1).png";

const Footer = () => {
  return (
    <div className="bg-[#0D2436] py-20">
      <section className="py-32 px-5 md:px-32 flex flex-row flex-wrap  mx-auto ">
        <div>
          <h1 className="text-white font-bold py-5 text-4xl">
            Get our stories delivered From us <br /> to your inbox weekly.
          </h1>
          <div className="flex flex-row gap-2 my-10">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <button className="px-5 py-2 text-white text-sm font-bold bg-[#1565D8] hover:bg-opacity-20 rounded-md">
              Get Started
            </button>
          </div>
          <p className="text-[#5A7184] text-[16px] w-1/2">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
        <div className="relative z-50 px-5 hidden md:block">
          <div className="bg-white p-2 rounded-3xl shadow-md flex flex-col">
            <img className="w-[450px] h-auto" src={payOn} alt="" />
            <h2 className="text-2xl font-bold text-primary py-5 px-5">
              BUY OR RENT GAMES
            </h2>
            <p className="text-[#5A7184] text-lg px-5 pb-5">
              Our insurance plans offers are priced <br /> the same everywhere
              else.
            </p>
          </div>
          <img
            className="absolute top-[50px] left-[170px] z-[-10]"
            src={shape1}
            alt=""
          />

          <img
            className="absolute bottom-[-140px] left-[-150px]"
            src={shape2}
            alt=""
          />
        </div>
      </section>
      <div className="border-[#1A3245] w-11/12 mx-auto border-b-2-2"></div>
      <footer className="flex flex-row gap-28 flex-wrap-reverse max-w-7xl mx-auto py-5 px-5 md:px-10  text-[#959EAD]">
        <div>
          <img src={logo} alt="" />
          <p className="my-5">
            Build a modern and creative
            <br />
            website with crealand
          </p>
          <div className="flex flex-row gap-2">
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
            <img src={cercleIcon} alt="" />
          </div>
        </div>
        <div className="md:ml-auto">
          <header className="font-bold  text-lg text-[#5A7184]">Product</header>
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
          <header className="font-bold  text-lg text-[#5A7184]">Service</header>
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
          <header className="font-bold text-lg text-[#5A7184]">Company</header>
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
          <header className="font-bold text-lg text-[#5A7184]">More</header>
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
      </footer>
      <div className="text-center py-10 bg-[#0D2436] text-[#959EAD]">
        <img className="mx-auto my-5" src={loveImage} alt="" />
        <span>Copyright © 2023. Crafted with love.</span>
      </div>
    </div>
  );
};

export default Footer;
