"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

const boundaryCount = 1;
const siblingCount = 1;

type Props = {
  pageCount?: number;
  prevPageLabel?: string;
  nextPageLabel?: string;
};

export default function Pagination({
  pageCount = 1,
  prevPageLabel,
  nextPageLabel,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") || "1";

  const page =
    typeof pageParam === "string" &&
    Number(pageParam) > 1 &&
    Number(pageParam) <= pageCount
      ? Number(pageParam)
      : 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, pageCount));

  const endPages = range(
    Math.max(pageCount - boundaryCount + 1, boundaryCount + 1),
    pageCount,
  );

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      pageCount - boundaryCount - siblingCount * 2 - 1,
    ),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    pageCount - boundaryCount - 1,
  );

  const itemList = [
    ...["previous"],
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < pageCount - boundaryCount
        ? [boundaryCount + 1]
        : []),

    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < pageCount - boundaryCount - 1
      ? ["end-ellipsis"]
      : pageCount - boundaryCount > boundaryCount
        ? [pageCount - boundaryCount]
        : []),

    ...endPages,
    ...["next"],
  ];

  const buttonPage = (type: string) => {
    switch (type) {
      case "previous":
        return page > 1 ? createPageURL(page - 1) : "/";
      case "next":
        return page < pageCount ? createPageURL(page + 1) : createPageURL(1);
      default:
        return "/";
    }
  };

  const items = itemList.map((item) => {
    return typeof item === "number"
      ? {
          href: createPageURL(item),
          type: "page",
          page: item,
        }
      : {
          href: buttonPage(item),
          type: item,
        };
  });

  return (
    <div className="flex w-fit text-gray-900 lg:gap-x-1">
      {items.map((item, index) => {
        if (item.type === "previous") {
          return (
            <Link
              key={index}
              aria-label={prevPageLabel}
              prefetch={false}
              className={twMerge(
                page === 1
                  ? "pointer-events-none opacity-50"
                  : "transition-colors hover:bg-gray-200",
                "flex size-9 items-center justify-center rounded-md bg-white",
              )}
              href={item.href}
              scroll={false}
            >
              <IconChevronLeft className="size-4" />
            </Link>
          );
        }
        if (item.type === "start-ellipsis" || item.type === "end-ellipsis")
          return (
            <div
              key={index}
              className="flex size-9 items-center justify-center text-sm"
            >
              ...
            </div>
          );
        if (item.type === "page")
          return (
            <Link
              key={index}
              prefetch={false}
              className={twMerge(
                "flex size-9 items-center justify-center rounded-md bg-white text-sm font-semibold transition-colors",
                Number(pageParam) === item.page
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "hover:bg-gray-100",
              )}
              href={item.href}
              scroll={false}
            >
              {item.page}
            </Link>
          );
        if (item.type === "next") {
          return (
            <Link
              key={index}
              aria-label={nextPageLabel}
              prefetch={false}
              className={twMerge(
                page >= pageCount
                  ? "pointer-events-none opacity-50"
                  : "transition-colors hover:bg-gray-200",
                "flex size-9 items-center justify-center rounded-md bg-white",
              )}
              href={item.href}
              scroll={false}
            >
              <IconChevronRight className="size-4" />
            </Link>
          );
        }
      })}
    </div>
  );
}
