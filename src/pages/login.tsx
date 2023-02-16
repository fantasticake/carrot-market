import Button from "@/components/button";
import Input from "@/components/input";
import { cls } from "@/utils";
import { useState } from "react";

export default function Login() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-medium mb-6">Login</h1>
      <div className="grid grid-cols-2 w-full">
        <button
          onClick={() => setMethod("email")}
          className={cls(
            method == "email" ? " text-amber-500" : "border-transparent",
            "py-2 border-amber-500 border-b-2"
          )}
        >
          Email
        </button>
        <button
          onClick={() => setMethod("phone")}
          className={cls(
            method == "phone" ? " text-amber-500" : "border-transparent",
            "py-2 border-amber-500 border-b-2"
          )}
        >
          Phone
        </button>
      </div>
      <form className="mt-6 w-full px-10 space-y-2">
        {method == "email" ? (
          <Input placeholder="Email..." />
        ) : (
          <Input placeholder="Phone..." />
        )}
        <Button className="w-full">Get login link</Button>
      </form>
    </div>
  );
}
