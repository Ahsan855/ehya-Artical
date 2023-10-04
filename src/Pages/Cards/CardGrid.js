import React from "react";
import iconVerify from "../../images/icon/Icon.png";

const CardGrid = ({ data }) => {
  const {
    _id,
    userName,
    userImage,
    contentName,
    image,
    shortDescription,
    verify,
    date,
  } = data;
  return (
    <div>
      <div key={_id} className="bg-white rounded shadow-md flex flex-col">
        <img src={image} alt="" className="w-full object-cover mb-2 rounded" />
        <div className="px-8 pb-5">
          <h2 className="text-3xl text-primary font-bold">{contentName}</h2>
          <p className="text-primary py-6 text-lg">{shortDescription}</p>
          <div className="flex items-center mt-auto justify-between">
            <div className="flex flex-row">
              <img
                src={userImage}
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />

              <div>
                <p className="text-[16px] text-primary font-bold italic">
                  {userName}
                </p>
                <div className="flex felx-row items-center">
                  <span>
                    <img className="h-4 w-4" src={iconVerify} alt="" />{" "}
                  </span>
                  <p className="text-[14px] mx-2 italic text-[#5A7184]">
                    {verify}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-[#5A7184] font-bold italic">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
