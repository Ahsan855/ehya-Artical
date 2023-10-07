import React from "react";
import payOn from "../../images/footer/alexander-shatov-CTZhGbSxWLI-unsplash 1.png";
import shape1 from "../../images/footer/Base.png";
import shape2 from "../../images/footer/Base (1).png";
import shape from "../../images/Wave.svg";

const FooterTop = () => {
  return (
    <>
      <img className="w-full h-auto hidden md:block " src={shape} alt="" />
      <div className=" bg-[#0D2436]">
        <div>
          <div className="md:py-12 container mx-auto px-5 flex items-center md:flex-col-reverse flex-col lg:flex-row md:flex-wrap">
            <div className="lg:w-1/2 px-0 md:px-5 mt-20 md:mt-36 lg:mt-0 mx-auto">
              <h1 className="text-white md:text-center text-left pr-7 lg:text-left font-bold mb-12 text-2xl md:text-4xl">
                Get our stories delivered From us to your inbox weekly.
              </h1>
              <div className="">
                <div className="flex md:flex-row justify-center lg:justify-start items-center gap-2 flex-col flex-wrap mt-[14px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="border rounded-md py-2 w-full md:w-auto px-10 focus:outline-none focus:border-blue-500"
                  />
                  <button className=" px-5 py-2 w-full md:w-auto  hover:text-[#1565D8] hover:bg-white bg-[#1565D8] text-[16px] font-bold text-white rounded-lg">
                    Get Started
                  </button>
                </div>
                <h1 className=" text-[16px] leading-7 pb-5 px-0 md:px-12 lg:pl-3 mt-[14px] text-left md:text-center lg:text-left text-[#5A7184] font-bold">
                  <span className="inline-block p-1 italic md:hidden text-white">
                    Get a response tomorrow
                  </span>
                  <span className="md:inline-block  hidden p-1">
                    Get a response tomorrow
                  </span>
                  if you submit by 9pm today. If we received after 9pm will get
                  a reponse the following day.
                </h1>
              </div>
            </div>
            <div className="relative z-10 lg:w-1/2 hidden md:block">
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
                className="absolute top-[50px] right-[-45px] z-[-10]"
                src={shape1}
                alt=""
              />

              <img
                className="absolute bottom-[-140px] left-[-150px]"
                src={shape2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
