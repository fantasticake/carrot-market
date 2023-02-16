import CreateBtn from "@/components/createBtn";
import Layout from "@/components/layout";
import StreamRow from "@/components/streamRow";

export default function Streams() {
  return (
    <Layout title="Streams">
      <div className="py-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {[1, 2, 3, 4].map(v => (
            <StreamRow key={v} id={v + ""} streamUrl="" title="stream title" />
          ))}
        </div>
        <CreateBtn url="/streams/create">
          <svg
            width={30}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            ></path>
          </svg>
        </CreateBtn>
      </div>
    </Layout>
  );
}
