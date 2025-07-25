import { clsx } from "clsx/lite";
import { ComponentProps } from "react";

export default function Input({ ref, ...props }: ComponentProps<"input">) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      ref={ref}
      className={clsx(
        "block h-9 w-full rounded-md border border-gray-200 bg-white px-3.5 text-sm text-gray-900 placeholder:text-gray-800/50",
        className,
      )}
    />
  );
}
