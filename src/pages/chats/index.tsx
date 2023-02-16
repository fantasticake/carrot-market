import ChatRow from "@/components/chatRow";
import Layout from "@/components/layout";

export default function chats() {
  return (
    <Layout title="Chats">
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => (
          <ChatRow
            key={v}
            id={v + ""}
            username="username"
            lastMessage="last message"
            updatedAt={new Date()}
          />
        ))}
      </div>
    </Layout>
  );
}
