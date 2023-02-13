import CreateBtn from "@/components/createBtn";
import ProductRow from "@/components/productRow";

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
      <CreateBtn url="/products/upload" />
    </div>
  );
}

