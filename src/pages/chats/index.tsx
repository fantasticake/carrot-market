import ChatRow from "@/components/chatRow";

export default function chats() {
  return (
    <div>
      <h1 className="text-xl font-medium my-4 px-2">Chats</h1>
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4].map(v => (
          <ChatRow
            key={v}
            id={v + ""}
            username="username"
            lastMessage="last message"
            updatedAt={new Date()}
          />
        ))}
      </div>
    </div>
  );
}
