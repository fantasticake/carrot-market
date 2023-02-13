import CreateBtn from "@/components/createBtn";
import PostRow from "@/components/postRow";

export default function Community() {
  return (
    <div>
      <h1 className="text-xl font-medium my-4 px-2">Community</h1>
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4].map(v => (
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
      <CreateBtn url="/community/write" />
    </div>
  );
}
