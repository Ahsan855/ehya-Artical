import bannarImage from "../../images/Bannar_Live_chat.svg";
import React, { useState } from "react";
import oval from "../../images/Oval.svg";

const Bannar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#F9FCFF]">
      <div className="relative ">
        {/*  oval shape in left side */}
        <img className="absolute top-18 lg:block hidden" src={oval} alt="" />

        <div className="hero lg:min-h-screen md:px-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* image bannar */}
            <img className="hidden lg:block" src={bannarImage} alt="" />
            {/* bannar content */}
            <div>
              <h1 className="text-[31px] md:text-5xl lg:text-[56px] px-5 md:px-0 md:pb-6 md:mb-0 text-center lg:text-left lg:leading-[68px] text-primary font-bold">
                Read the most <br /> interesting articles
              </h1>

              <p className="leading-[36px] text-[16px] pt-4 md:pt-7 md:text-[20px] mb-[60px] md:mb-[28px] text-center lg:text-left text-primary font-normal px-5 md:px-44 lg:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="relative mt-5">
                <svg
                  className="h-[16px] text-[#959EAD] w-[16px] absolute top-4 left-4 "
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7781 14.8968L14.8937 15.7812C14.6031 16.075 14.1281 16.075 13.8343 15.7812L10.7187 12.6656C10.5781 12.525 10.5 12.3344 10.5 12.1343V11.625C9.39686 12.4875 8.00935 13 6.49998 13C2.90936 13 0 10.0906 0 6.49998C0 2.90936 2.90936 0 6.49998 0C10.0906 0 13 2.90936 13 6.49998C13 8.00935 12.4875 9.39686 11.625 10.5H12.1343C12.3344 10.5 12.525 10.5781 12.6656 10.7187L15.7812 13.8343C16.0718 14.1281 16.0718 14.6031 15.7781 14.8968ZM2.49999 6.49998C2.49999 8.71247 4.29061 10.5 6.49998 10.5C8.71247 10.5 10.5 8.70936 10.5 6.49998C10.5 4.2875 8.70936 2.49999 6.49998 2.49999C4.2875 2.49999 2.49999 4.29061 2.49999 6.49998Z"
                    fill="#959EAD"
                  />
                </svg>

                <div className="relative">
                  <input
                    type="text"
                    className="border text-primary border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 input input-bordered hover:border-blue-300 w-full pl-12 italic font-bold leading-[21.79px] "
                    onClick={toggleMenu}
                    placeholder="Search article"
                  />
                  {/* click pages dropdown */}
                  {isMenuOpen && (
                    <div className="absolute mt-2 bg-white rounded shadow-lg text-primary">
                      {/* Your menu items go here */}
                      <ul>
                        <li className="p-2">Article 1</li>
                        <li className="p-2">Article 2</li>
                        <li className="p-2">Article 3</li>
                      </ul>
                    </div>
                  )}
                </div>

                <button className="w-full px-5 sm:text-center border-2  hover:text-[#1565D8] hover:bg-white md:w-[94px] h-[40px] bg-[#1565D8] text-[16px] font-bold text-white mt-5 md:absolute md:mt-0 top-1 right-2 rounded-lg">
                  Search
                </button>
              </div>
              {/* popular tag */}
              <div className="mt-5">
                <p className=" font-bold md:inline italic text-[16px] text-[#5A7184] mr-4">
                  Popular Tags :
                </p>
                <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-[#1565D8] text-sm italic font-bold bg-[#1565D8] hover:bg-opacity-20 bg-opacity-10 rounded-md">
                  Design
                </button>
                <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-[#1565D8] text-sm italic font-bold bg-[#1565D8] hover:bg-opacity-20 bg-opacity-10 rounded-md">
                  User Experience
                </button>
                <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105  py-2 mx-2 my-2 hover:bg-opacity-20 text-[#1565D8] text-sm italic font-bold bg-[#1565D8] bg-opacity-10 rounded-md">
                  User Interfaces
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
