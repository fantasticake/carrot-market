import { NextPage } from "next";
import Link from "next/link";

interface CreateBtnProps {
  url: string;
}

const CreateBtn: NextPage<CreateBtnProps> = ({ url }) => {
  return (
    <Link href={url}>
      <button className="hover:opacity-90 transition fixed bottom-16 right-6 rounded-full shadow w-12 h-12 bg-amber-500 text-white flex justify-center items-center text-3xl">
        +
      </button>
    </Link>
  );
};

export default CreateBtn;
