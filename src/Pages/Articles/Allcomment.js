import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const Allcomment = () => {
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
      <div className="bg-white container mx-auto pt-20">
        <div className="relative">
          <input className="relative border-[#76AEFF] rounded-md border-2 w-full h-40"></input>
          <p className="absolute top-7 left-7">Leave your comment here...</p>
          <button className="absolute bottom-5 right-5 px-8 py-2  text-white hover:text-blue-500 text-sm font-bold bg-[#1565D8] hover:bg-white hover:border-blue-500 hover:border-2 rounded-md">
            Send
          </button>
        </div>

        <h1 className="text-[16px] text-[#283646] font-bold py-5">
          All Comments(3)
        </h1>

        {allProducts
          ?.map((data) => <Comment key={data._id} data={data}></Comment>)
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default Allcomment;
