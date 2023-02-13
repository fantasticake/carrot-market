import { cls } from "@/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...rest }) => {
  return (
    <button
      className={cls(
        "hover:opacity-90 transition shadow text-sm py-2 bg-amber-500 text-white w-full rounded",
        className ?? ""
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
