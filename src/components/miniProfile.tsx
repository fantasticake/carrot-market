import { Clickable } from "@/utils";
import { NextPage } from "next";

interface MiniProfileProps {
  size?: "sm" | "lg";
  clickable?: boolean;
  username: string;
  userImg?: string;
}

const MiniProfile: NextPage<MiniProfileProps> = ({
  size = "sm",
  clickable = true,
  username,
  userImg,
}) => {
  if (size == "lg")
    return (
      <Clickable url={`/users/${username}`} clickable={clickable}>
        <div className="hover:opacity-90 transition flex items-center space-x-2">
          <div className="w-10 aspect-square shadow-sm bg-gray-300 rounded-full" />
          <span>{username}</span>
        </div>
      </Clickable>
    );
  return (
    <Clickable url={`/users/${username}`} clickable={clickable}>
      <div className="hover:opacity-90 transition  flex space-x-1 items-center">
        <div className="w-6 aspect-square shadow-sm rounded-full bg-gray-300" />
        <div className="text-gray-600 text-sm">{username}</div>
      </div>
    </Clickable>
  );
};

export default MiniProfile;
