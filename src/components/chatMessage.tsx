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
      <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0" />
      <div className="flex flex-col items-end">
        <span className="text-sm font-medium">{username}</span>
        <p className="mt-1 p-2 max-w-xs bg-gray-100 rounded-md rounded-tr-none">
          {payload}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex space-x-2">
      <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{username}</span>
        <p className="mt-1 p-2 max-w-xs bg-gray-100 rounded-md rounded-tl-none">
          {payload}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
