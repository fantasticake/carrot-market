import { NextPage } from "next";
import Link from "next/link";
import MiniProfile from "./miniProfile";

interface ChatRowProps {
  id: string;
  username: string;
  userImg?: string;
  lastMessage: string;
  updatedAt: Date;
}

const ChatRow: NextPage<ChatRowProps> = ({
  id,
  lastMessage,
  updatedAt,
  username,
  userImg,
}) => {
  return (
    <Link href={`/chats/${id}`}>
      <div className="px-2 space-y-2 py-2">
        <MiniProfile
          size="lg"
          username={username}
          userImg={userImg}
          clickable={false}
        />
        <div className="flex justify-between items-center pl-2">
          <span>{lastMessage}</span>
          <span className="text-sm">{updatedAt.toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatRow;
