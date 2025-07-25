import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Label({
  children,
  className,
  ...rest
}: ComponentProps<"label">) {
  return (
    <label
      {...rest}
      className={twMerge("block text-sm text-gray-900", className)}
    >
      {children}
    </label>
  );
}
