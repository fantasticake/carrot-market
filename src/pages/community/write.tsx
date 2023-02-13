import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";

export default function Write() {
  return (
    <div className="px-2 py-4">
      <h1 className="font-medium mb-1">Content</h1>
      <form>
        <Textarea placeholder="Anything to write..." />
        <Button text="Post" />
      </form>
    </div>
  );
}
