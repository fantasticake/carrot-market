import { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";

interface CreateBtnProps {
  url: string;
  children: ReactNode;
}

const CreateBtn: NextPage<CreateBtnProps> = ({ url, children }) => {
  return (
    <Link href={url}>
      <button className="hover:opacity-90 transition fixed bottom-20 right-6 rounded-full shadow w-12 h-12 bg-amber-500 text-white flex justify-center items-center text-3xl">
        {children}
      </button>
    </Link>
  );
};

export default CreateBtn;
