import Button from "./button";
import Input from "./input";

const ChatBtn = () => {
  return (
    <div className="fixed w-full bottom-6 left-0 border-none">
      <form className="flex px-2">
        <Input className="rounded-l-full px-4" placeholder="Write..." />
        <Button className="rounded-r-full w-16">{">"}</Button>
      </form>
    </div>
  );
};

export default ChatBtn;
