import Button from "@/components/button";
import Error from "@/components/error";
import Input from "@/components/input";
import { cls, useMutation } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

interface Form {
  email?: string;
  phone?: string;
}

interface LoginRes {
  ok: boolean;
  error?: string;
}

export default function Login() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Form>();
  const [loginMutation, { loading }] = useMutation<LoginRes>("/api/login");

  const onValid: SubmitHandler<Form> = async input => {
    if (!loading) {
      const variables =
        method == "email" ? { email: input.email } : { phone: input.phone };
      const res = await loginMutation({ variables });
      if (res.error) setError("root", { message: res.error });
    }
  };

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
      <form
        onSubmit={handleSubmit(onValid)}
        className="mt-6 w-full px-10 space-y-2"
      >
        {method == "email" ? (
          <>
            <Input
              register={register("email", { required: "Email is required" })}
              placeholder="Email..."
            />
            {errors.email?.message && <Error message={errors.email.message} />}
          </>
        ) : (
          <>
            <Input
              register={register("phone", { required: "Phone is required" })}
              placeholder="Phone..."
            />
            {errors.phone?.message && <Error message={errors.phone.message} />}
          </>
        )}
        <Button className="w-full">Get login link</Button>
        {errors.root?.message && <Error message={errors.root.message} />}
      </form>
    </div>
  );
}
