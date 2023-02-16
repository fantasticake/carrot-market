import Button from "@/components/button";
import ImageInput from "@/components/imageInput";
import Input from "@/components/input";

export default function Edit() {
  return (
    <div>
      <h1 className="px-2 py-4 text-xl font-medium">Edit profile</h1>
      <form className="space-y-2 px-2">
        <div className="flex flex-col items-center my-2 space-y-2">
          <ImageInput className="w-20 h-20 rounded-full" />
          <h2 className="font-medium text-sm">Profile image</h2>
        </div>
        <h2 className="font-medium text-sm">Username</h2>
        <Input placeholder="Username..." />
        <Button className="w-full">Edit</Button>
      </form>
    </div>
  );
}
