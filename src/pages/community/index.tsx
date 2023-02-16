import CreateBtn from "@/components/createBtn";
import Layout from "@/components/layout";
import PostRow from "@/components/postRow";

export default function Community() {
  return (
    <Layout title="Community">
      <div>
        <div className="flex flex-col divide-y">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(v => (
            <PostRow
              key={v}
              id={v + ""}
              content="content"
              username="username"
              createdAt={new Date()}
              checks={1}
              comments={1}
            />
          ))}
        </div>
        <CreateBtn url="/community/write">+</CreateBtn>
      </div>
    </Layout>
  );
}
