import { cls } from "@/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  title: ReactNode;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="pb-20">
      <div className="border-b py-2 flex justify-center items-center text-lg font-medium">
        {title}
      </div>
      {children}
      <div className="fixed bottom-0 w-full grid grid-cols-5 bg-white">
        <Link href={"/"}>
          <button
            className={cls(
              "flex justify-center items-center w-full py-4 border-t text-sm",
              title === "Products" ? "border-amber-500 text-amber-500" : ""
            )}
          >
            <svg
              width={30}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
          </button>
        </Link>
        <Link href={"/streams"}>
          <button
            className={cls(
              "flex justify-center items-center w-full py-4 border-t text-sm",
              title === "Streams" ? "border-amber-500 text-amber-500" : ""
            )}
          >
            <svg
              width={30}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </button>
        </Link>
        <Link href={"/community"}>
          <button
            className={cls(
              "flex justify-center items-center w-full py-4 border-t text-sm",
              title === "Community" ? "border-amber-500 text-amber-500" : ""
            )}
          >
            <svg
              width={30}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              ></path>
            </svg>
          </button>
        </Link>
        <Link href={"/chats"}>
          <button
            className={cls(
              "flex justify-center items-center w-full py-4 border-t text-sm",
              title === "Chats" ? "border-amber-500 text-amber-500" : ""
            )}
          >
            <svg
              width={30}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              ></path>
            </svg>
          </button>
        </Link>
        <Link href={`/users/username`}>
          <button
            className={cls(
              "flex justify-center items-center w-full py-4 border-t text-sm",
              title === "Profile" ? "border-amber-500 text-amber-500" : ""
            )}
          >
            <svg
              width={30}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
