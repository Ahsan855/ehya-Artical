import Edit from "../../images/cardDetails/Edit.svg";
import Delete from "../../images/cardDetails/Delete outline.svg";
import Reply from "../../images/cardDetails/comment-png-1.png";
import { useEffect, useState } from "react";
import SubComments from "./SubComments";

const Comment = ({ data }) => {
  const { userName, userImage, commentsDate, comments } = data;
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#F2F4F5] p-5 rounded-lg my-5 transition-transform transform hover:scale-105 shadow-md w-full md:w-[637px]">
        <div className="flex flex-row gap-5">
          <div>
            <img className="w-32 h-auto" src={userImage} alt="" />
          </div>
          <div>
            <h1 className="text-primary text-[14px] font-bold leading-7">
              {userName}
            </h1>
            <p className="font-normal text-[#77808B] text-[14px]">
              {commentsDate}
            </p>
            <p className="font-normal text-[#77808B] text-[14px] pt-3 leading-5 tracking-wider">
              {comments}
            </p>
            <div className="flex flex-row items-center gap-x-5 py-5 cursor-pointer">
              <div className="flex flex-row items-center  text-[#77808B] font-medium gap-x-3 transition duration-300 ease-in-out transform hover:scale-105">
                <img className="h-5 w-auto" src={Reply} alt="" />
                <p>Reply</p>
              </div>
              <div className="flex flex-row text-[#77808B] font-medium gap-x-3 transition duration-300 ease-in-out transform hover:scale-105">
                <img src={Edit} alt="" />
                <p>Edit</p>
              </div>
              <div className="flex flex-row text-[#77808B] font-medium gap-x-3 transition duration-300 ease-in-out transform hover:scale-105">
                <img src={Delete} alt="" />
                <p>Delete</p>
              </div>
            </div>
            {/* 2nd comment */}
            <div>
              {allComments
                ?.map((data) => (
                  <SubComments key={data._id} data={data}></SubComments>
                ))
                .slice(0, 1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
