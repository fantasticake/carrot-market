import { cls } from "@/utils";
import { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={cls(
        "placeholder:text-sm focus:border-amber-500 hover:border-gray-300 outline-none border w-full px-2 py-2 text-sm",
        className ?? ""
      )}
      {...rest}
    />
  );
};

export default Input;
