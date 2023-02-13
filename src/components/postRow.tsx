import { Clickable } from "@/utils";
import { NextPage } from "next";
import MiniProfile from "./miniProfile";

interface PostRowProps {
  clickable?: boolean;
  id: string;
  content: string;
  username: string;
  userImg?: string;
  createdAt: Date;
  checks: number;
  comments: number;
}

const PostRow: NextPage<PostRowProps> = ({
  clickable = true,
  id,
  content,
  checks,
  comments,
  createdAt,
  username,
  userImg,
}) => {
  return (
    <Clickable url={`/community/${id}`} clickable={clickable}>
      <div className="px-2 space-y-2 py-2">
        <h2 className="text-lg font-medium">
          <span className="text-red-400">Q. </span>
          {content}
        </h2>
        <div className="flex">
          <MiniProfile username={username} userImg={userImg} />
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-center">
            <button className="flex space-x-[2px] items-center">
              <svg
                fill="none"
                width={20}
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{checks}</span>
            </button>
            <button className="flex space-x-[2px] items-center">
              <svg
                width={20}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
              <span>{comments}</span>
            </button>
          </div>
          <span className="text-gray-600 text-xs">
            {createdAt.toLocaleDateString()}
          </span>
        </div>
      </div>
    </Clickable>
  );
};

export default PostRow;
