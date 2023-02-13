import { cls } from "@/utils";
import { TextareaHTMLAttributes } from "react";

const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...rest
}) => {
  return (
    <textarea
      className={cls(
        "placeholder:text-sm focus:border-amber-500 hover:border-gray-300 outline-none border w-full px-2 py-2 text-sm",
        className ?? ""
      )}
      {...rest}
    />
  );
};

export default Textarea;
