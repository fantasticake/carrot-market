import { NextPage } from "next";
import Link from "next/link";
import MiniProfile from "./miniProfile";

interface ProductRowProps {
  id: string;
  name: string;
  price: number;
  description?: string;
  username: string;
  userImg?: string;
  likes: number;
}

const ProductRow: NextPage<ProductRowProps> = ({
  id,
  name,
  price,
  description,
  username,
  userImg,
  likes,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="hover:bg-gray-50 flex space-x-2 py-2 px-2">
        <div className="relative w-28 aspect-square">
          <div className="absolute w-full h-full shadow rounded bg-gray-300 transition-all hover:w-48 hover:h-48" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="font-medium">{name}</h2>
            <h3 className="font-medium text-sm">${price}</h3>
            <h3 className="text-xs text-gray-700">{description}</h3>
          </div>
          <div className="flex justify-between mt-2">
            <MiniProfile
              clickable={false}
              username={username}
              userImg={userImg}
            />
            <div className="flex space-x-2 justify-end">
              <button className="flex items-center space-x-[2px]">
                <svg
                  fill="none"
                  width={20}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>{likes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductRow;
