import ChatBtn from "@/components/chatBtn";
import ChatMessage from "@/components/chatMessage";

export default function Stream() {
  return (
    <div className="px-2 py-2 divide-y space-y-2 flex flex-col">
      <div>
        <div className="bg-gray-300 aspect-video" />
        <h1 className="text-xl font-medium mt-2">stream title</h1>
      </div>
      <div className="py-4 space-y-4 pb-20">
        {[1, 2, 3, 4, 5, 6].map(v => (
          <ChatMessage
            me={v == 2}
            payload="message payload"
            username="username"
            key={v}
          />
        ))}
      </div>
      <ChatBtn />
    </div>
  );
}
