import CommentRow from "@/components/commentRow";
import PostRow from "@/components/postRow";

export default function Post() {
  return (
    <div className="divide-y-2">
      <PostRow
        clickable={false}
        id={"1"}
        content="content"
        username="username"
        createdAt={new Date()}
        checks={1}
        comments={1}
      />
      <div className="flex flex-col divide-y">
        {[1, 2, 3, 4].map(v => (
          <CommentRow
            key={v}
            answer="answer"
            username="username"
            createdAt={new Date()}
          />
        ))}
      </div>
    </div>
  );
}
