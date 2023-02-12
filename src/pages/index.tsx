import ProductRow from "@/components/productRow";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-medium my-4 px-2">Products</h1>
      <div className="flex flex-col divide-y">
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
      <Link href={"/products/upload"}>
        <button className="hover:opacity-90 transition fixed bottom-16 right-6 rounded-full shadow w-12 h-12 bg-amber-500 text-white flex justify-center items-center text-3xl">
          +
        </button>
      </Link>
    </div>
  );
}

