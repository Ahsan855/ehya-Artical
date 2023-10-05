import React from "react";
import payOn from "../../images/footer/alexander-shatov-CTZhGbSxWLI-unsplash 1.png";
import shape1 from "../../images/footer/Base.png";
import shape2 from "../../images/footer/Base (1).png";
import shape from "../../images/Wave.svg";

const FooterTop = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute -top-28 left-0 w-full h-auto"
          src={shape}
          alt=""
        />
        <div className="bg-[#0D2436]">
          <section className=" pb-10 container mx-auto px-5 flex flex-row md:flex-wrap">
            <div className="w-1/2">
              <h1 className="text-white font-bold py-5 text-4xl">
                Get our stories delivered From us <br /> to your inbox weekly.
              </h1>
              <div className="flex flex-row flex-wrap gap-2 my-10 w-full sm:w-96">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="border rounded-md py-2 w-full md:w-auto px-3 focus:outline-none focus:border-blue-500"
                />
                <button className="px-5 py-2 w-full md:w-auto  text-white hover:text-blue-500 text-sm font-bold bg-[#1565D8] hover:bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-md">
                  Get Started
                </button>
              </div>
              <p className="text-[#5A7184] text-[16px] w-1/2">
                Get a response tomorrow if you submit by 9pm today. If we
                received after 9pm will get a reponse the following day.
              </p>
            </div>
            <div className="relative z-10 w-1/2 hidden md:block">
              <div className="bg-white p-2  rounded-3xl shadow-md">
                <img className="w-full h-auto" src={payOn} alt="" />
                <h2 className="text-2xl font-bold text-primary py-5 px-5">
                  BUY OR RENT GAMES
                </h2>
                <p className="text-[#5A7184] text-lg px-5 pb-5">
                  Our insurance plans offers are priced <br /> the same
                  everywhere else.
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
        </div>
      </div>
    </>
  );
};

export default FooterTop;
