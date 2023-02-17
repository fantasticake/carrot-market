import { cls } from "@/utils";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({ className, register, ...rest }) => {
  return (
    <input
      className={cls(
        "placeholder:text-sm focus:border-amber-500 hover:border-gray-300 outline-none border w-full px-2 py-2 text-sm",
        className ?? ""
      )}
      {...rest}
      {...register}
    />
  );
};

export default Input;
