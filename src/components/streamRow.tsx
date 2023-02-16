import Link from "next/link";

interface StreamRowProps {
  id: string;
  streamUrl: string;
  title: string;
}

const StreamRow: React.FC<StreamRowProps> = ({ id, streamUrl, title }) => {
  return (
    <Link href={`/streams/${id}`}>
      <div className="px-2">
        <div className="hover:opacity-90 transition shadow bg-gray-300 aspect-video" />
        <h2 className="font-medium mt-1">{title}</h2>
      </div>
    </Link>
  );
};

export default StreamRow;
