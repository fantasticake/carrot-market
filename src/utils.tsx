import { ReactElement } from "react";
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
