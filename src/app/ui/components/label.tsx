import { clsx } from "clsx/lite";
import { ComponentProps } from "react";

export default function Label({
  children,
  className,
  ...rest
}: ComponentProps<"label">) {
  return (
    <label {...rest} className={clsx("block text-sm text-gray-900", className)}>
      {children}
    </label>
  );
}
