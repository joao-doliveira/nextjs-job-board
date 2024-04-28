import { cn } from "@/lib/utils";
import React from "react";

export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "lg:text-5x1 text-4xl font-extrabold tracking-tight",
        props.className,
      )}
    />
  );
}
