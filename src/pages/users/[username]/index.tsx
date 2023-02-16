import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const {
    query: { username },
  } = useRouter();
  return (
    <Layout title="Profile">
      <div className="p-2 py-4 space-y-6">
        <div className="flex space-x-2">
          <div className="shadow w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <h1 className="font-medium">{username}</h1>
            <Link href={`/users/${username}/edit`}>
              <button className="hover:opacity-90 transition text-sm text-opacity-80">
                Edit profile &rarr;
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <button className="hover:opacity-90 transition space-y-1 justify-self-center flex flex-col items-center">
            <Link href={`/users/${username}/sold`}>
              <div className="bg-amber-500 text-white p-3 rounded-full aspect-square">
                <svg
                  fill="none"
                  width={26}
                  height={26}
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
              </div>
              <span className="font-medium text-sm">Sold</span>
            </Link>
          </button>
          <button className="hover:opacity-90 transition space-y-1 justify-self-center flex flex-col items-center">
            <Link href={`/users/${username}/bought`}>
              <div className="bg-amber-500 text-white p-3 rounded-full aspect-square">
                <svg
                  fill="none"
                  width={26}
                  height={26}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium text-sm">Bought</span>
            </Link>
          </button>
          <button className="hover:opacity-90 transition space-y-1 justify-self-center flex flex-col items-center">
            <Link href={`/users/${username}/like`}>
              <div className="bg-amber-500 text-white p-3 rounded-full aspect-square">
                <svg
                  fill="none"
                  width={26}
                  height={26}
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
              </div>
              <span className="font-medium text-sm">Like</span>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}
