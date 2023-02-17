import { ReactElement, useState } from "react";
import Link from "next/link";

export const cls = (...classes: string[]): string => {
  return classes.join(" ");
};

interface ClickableProps {
  clickable?: boolean;
  url: string;
  children: ReactElement;
}

export const Clickable: React.FC<ClickableProps> = ({
  clickable = true,
  url,
  children,
}) => {
  return clickable ? <Link href={url}>{children}</Link> : children;
};

type UseMutationRes<T, U> = [
  Mutation<T, U>,
  { data: T; loading: boolean; error?: string }
];

type Mutation<T, U> = (mutationArgs: { variables: U }) => Promise<T>;

export const useMutation = <T = any, U = any>(
  url: string
): UseMutationRes<T, U> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>();

  const mutation: Mutation<T, U> = async ({ variables }) => {
    try {
      setLoading(true);
      const res = await (
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(variables),
        })
      ).json();
      setData(res);
      setLoading(false);
      return res;
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError("Fetch error");
    }
  };

  return [mutation, { data, loading, error }];
};
