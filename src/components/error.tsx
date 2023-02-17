interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <span className="text-red-400 text-sm font-medium">{message}</span>;
};

export default Error;
