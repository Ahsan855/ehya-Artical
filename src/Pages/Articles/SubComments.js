import Reply from "../../images/cardDetails/comment-png-1.png";
const SubComments = ({ data }) => {
  const { userName, userImage, commentsDate, comments } = data;

  return (
    <div>
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
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SubComments;
