import ProductRow from "@/components/productRow";

export default function Product() {
  return (
    <div className="py-2 divide-y space-y-2">
      <div className="px-2">
        <div className="w-full aspect-video bg-gray-300" />
        <div className="mt-2 flex items-center space-x-2">
          <div className="w-10 aspect-square bg-gray-300 rounded-full" />
          <span className="">username</span>
        </div>
      </div>
      <div className="px-2 pb-2">
        <h1 className="text-2xl font-bold mt-2">product name</h1>
        <h2 className="font-medium mt-2">$10</h2>
        <h2 className="text-gray-700 mt-1">description...</h2>
        <div className="flex mt-4 space-x-2">
          <button className="w-5/6 bg-amber-500 text-white rounded py-2">
            Talk to seller
          </button>
          <button className="flex justify-center items-center w-1/6 hover:bg-gray-100 transition rounded">
            <svg
              fill="none"
              width={20}
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="px-2 text-xl font-bold mb-2">Similar items</h3>
        <div className="divide-y">
          {[1, 2, 3, 4].map(v => (
            <ProductRow
              key={v}
              id={v + ""}
              name="product name"
              price={10}
              description="description..."
              username="username"
              likes={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
