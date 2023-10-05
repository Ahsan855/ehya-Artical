import React from "react";

const Blog = ({ data }) => {
  const { contentName, image, dateInYear } = data;
  return (
    <div className="flex flex-row gap-5 py-4 px-5">
      <div>
        <img className="w-20 h-20" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-primary text-lg font-medium leading-7">
          {contentName}
        </h1>
        <p className="font-light text-xs pt-3">{dateInYear}</p>
      </div>
    </div>
  );
};

export default Blog;
