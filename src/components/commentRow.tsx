import { NextPage } from "next";
import MiniProfile from "./miniProfile";

interface CommentRowProps {
  answer: string;
  username: string;
  userImg?: string;
  createdAt: Date;
}

const CommentRow: NextPage<CommentRowProps> = ({
  answer,
  createdAt,
  username,
  userImg,
}) => {
  return (
    <div className="px-2 space-y-1 py-2">
      <span>
        <span>A. </span>
        {answer}
      </span>
      <div className="flex justify-between items-center">
        <MiniProfile username={username} userImg={userImg} />
        <span className="text-xs text-gray-500">
          {createdAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default CommentRow;
