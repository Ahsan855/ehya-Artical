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
  const titleShorts = () => {
    if (contentName <= 15) {
      return contentName;
    } else {
      return `${contentName.slice(0, 16)}...`;
    }
  };

  return (
    <div>
      <div
        key={_id}
        className="bg-white rounded shadow-md transform hover:cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col"
      >
        <img src={image} alt="" className="w-full object-cover mb-2 rounded" />
        <div className="px-8 pb-5">
          <h2
            className={`text-[20px] md:text-[24px] lg:text-[28px] text-primary font-bold hove:text-[${contentName}]`}
          >
            {titleShorts()}
          </h2>
          <p className="text-primary py-6 text-[14px] md:text-[18px]">
            {shortDescription}
          </p>
          <div className="flex items-center mt-auto justify-between">
            <div className="flex flex-row">
              <img
                src={userImage}
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />

              <div>
                <p className="text-[14px] md:text-[16px] text-primary font-bold italic">
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

            <p className="text-[14px] md:text-[16px] text-[#5A7184] font-bold italic">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
