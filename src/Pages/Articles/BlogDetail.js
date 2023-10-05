import React, { useEffect, useState } from "react";
import headerImage from "../../images/cardDetails/ales-nesetril-Im7lZjxeLhg-unsplash 1.png";
import Blog from "./Blog";

const BlogDetail = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  // const toggleVisibleCards = () => {
  //   setAllProducts((prevState) => (prevState === 6 ? 9 : 6));
  // };

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="mb-5">Home / Blog / Article title</p>
            <img src={headerImage} alt="" />
            <h2 className="text-blue-500 text-lg tracking-wider my-5">
              EDICATION
            </h2>
            <h1 className="text-primary font-medium text-2xl pb-5">
              Help children get better education
            </h1>
            <p className="font-light text-[#183B56] text-[16px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum.
            </p>
          </div>
          <div>
            <h2 className="text-primary font-medium text-xl px-5 pb-3">
              Letest Article
            </h2>
            <div>
              <div>
                {allProducts
                  ?.map((data) => <Blog key={data._id} data={data}></Blog>)
                  .slice(0, 6)}
                {/* <button onClick={toggleVisibleCards}>
                  {allProducts === 6 ? "Show More" : "Show Less"}
                </button> */}
              </div>
            </div>
            <div className="mt-5">
              <p className=" font-bold italic text-[16px] text-[#5A7184] mr-4">
                Popular Tags :
              </p>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Medical
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Lifestyle
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Learn
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Helth
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Food
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Diet
              </button>
              <button className="px-3 transition duration-300 ease-in-out transform hover:scale-105 py-2 mx-2 my-2 text-white bg-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:text-blue-500 text-sm italic font-bold rounded-md">
                Education
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
