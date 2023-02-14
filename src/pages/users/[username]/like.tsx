import ProductRow from "@/components/productRow";

export default function Like() {
  return (
    <div>
      <h1 className="text-xl font-medium px-2 py-4">Like</h1>
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4].map(v => (
          <ProductRow
            key={v}
            id={v + ""}
            likes={1}
            name={"product name"}
            price={10}
            username={"username"}
            description="description"
          />
        ))}
      </div>
    </div>
  );
}
