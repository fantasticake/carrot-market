import CreateBtn from "@/components/createBtn";
import Layout from "@/components/layout";
import ProductRow from "@/components/productRow";

export default function Home() {
  return (
    <Layout title="Products">
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4, 5, 6, 7].map(v => (
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
      <CreateBtn url="/products/upload">+</CreateBtn>
    </Layout>
  );
}

