import { cls } from "@/utils";
import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cls(
        "hover:opacity-90 transition shadow text-sm py-2 bg-amber-500 text-white rounded flex justify-center items-center",
        className ?? ""
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
