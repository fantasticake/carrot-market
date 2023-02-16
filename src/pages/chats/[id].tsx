import ChatBtn from "@/components/chatBtn";
import ChatMessage from "@/components/chatMessage";

export default function Chat() {
  return (
    <div>
      <div className="space-y-4 px-2 py-4 pb-20">
        {[1, 2, 3, 4, 5, 6].map(v => (
          <ChatMessage
            key={v}
            me={v == 2}
            payload={
              "very very long very very long very very long very very long very very long very very long very very long very very long message..."
            }
            username="username"
          />
        ))}
      </div>
      <ChatBtn />
    </div>
  );
}
