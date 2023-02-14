import Button from "@/components/button";
import ImageInput from "@/components/imageInput";
import Input from "@/components/input";
import Textarea from "@/components/textarea";

export default function Upload() {
  return (
    <div className="p-2">
      <form className="flex flex-col space-y-2">
        <ImageInput />
        <h2 className="font-medium">Product name</h2>
        <Input placeholder="Product name..." />
        <h2 className="font-medium">Price</h2>
        <div className="flex items-center focus-within:border-amber-500 border text-sm">
          <div className="px-2 text-center">$</div>
          <input
            className="outline-none w-full py-2 "
            type={"number"}
            min={0}
            placeholder="Price..."
          />
          <div className="px-2">USD</div>
        </div>
        <h2 className="font-medium">Description</h2>
        <Textarea placeholder="Description..." />
        <Button text="Upload" />
      </form>
    </div>
  );
}
