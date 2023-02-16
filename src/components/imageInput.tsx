import { cls } from "@/utils";
import { AnchorHTMLAttributes, ChangeEventHandler, useState } from "react";

const ImageInput: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
}) => {
  const [image, setImage] = useState("");

  const onChangeImage: ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
    }
  };

  return (
    <div className={cls("text-amber-500 aspect-video", className ?? "")}>
      {image ? (
        <img
          className={cls(
            "object-cover cursor-pointer aspect-video",
            className ?? ""
          )}
          src={image}
        />
      ) : (
        <label
          className={cls(
            "cursor-pointer flex justify-center items-center w-full h-full border-2 border-dashed border-amber-500",
            className ?? ""
          )}
          htmlFor="image"
        >
          <svg
            fill="none"
            width={40}
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            ></path>
          </svg>
        </label>
      )}
      <input
        className="hidden"
        onChange={onChangeImage}
        id="image"
        type={"file"}
        accept="image/*"
      />
    </div>
  );
};

export default ImageInput;
