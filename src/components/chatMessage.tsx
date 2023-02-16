import { Clickable } from "@/utils";
import { NextPage } from "next";

interface ChatMessageProps {
  me: boolean;
  username: string;
  userImg?: string;
  payload: string;
}

const ChatMessage: NextPage<ChatMessageProps> = ({
  me,
  payload,
  username,
  userImg,
}) => {
  return me ? (
    <div className="flex space-x-2 flex-row-reverse space-x-reverse">
      <Clickable url={`/users/${username}`}>
        <div className="shadow w-8 h-8 bg-gray-300 rounded-full shrink-0" />
      </Clickable>
      <div className="flex flex-col items-end">
        <span className="text-sm font-medium">{username}</span>
        <p className="mt-1 py-2 px-4 max-w-xs bg-gray-100 rounded-xl rounded-tr-none">
          {payload}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex space-x-2">
      <Clickable url={`/users/${username}`}>
        <div className="shadow w-8 h-8 bg-gray-300 rounded-full shrink-0" />
      </Clickable>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{username}</span>
        <p className="mt-1 py-2 px-4 max-w-xs bg-gray-100 rounded-xl rounded-tl-none">
          {payload}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
