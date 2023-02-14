import Button from "@/components/button";
import ChatMessage from "@/components/chatMessage";
import Input from "@/components/input";

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
      <div className="fixed w-full bottom-6">
        <form className="flex px-2">
          <Input className="rounded-l-full px-4" placeholder="Write..." />
          <Button text=">" className="rounded-r-full w-16" />
        </form>
      </div>
    </div>
  );
}
