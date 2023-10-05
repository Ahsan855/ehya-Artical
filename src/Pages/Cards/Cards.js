import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import icons from "../../images/icon/Icons.png";

const Cards = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  return (
    <div>
      <div className="grid pt-5 max-w-7xl mx-auto lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 px-5 md:px-16">
        {allProducts?.map((data) => (
          <CardGrid key={data._id} data={data}></CardGrid>
        ))}
      </div>
      <div className=" pb-20 text-center flex justify-center">
        <button className="relative px-10 my-16 py-2 mr-2 bg-white border transition duration-300 ease-in-out transform hover:scale-105 border-[#1565D8] text-[16px] rounded-lg font-bold text-[#1565D8]">
          More articles
          <img
            className="absolute top-4 right-2 my-auto mr-2"
            src={icons}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Cards;
