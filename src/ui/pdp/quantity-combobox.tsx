"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconChevronDown } from "@tabler/icons-react";
import { useMemo, useState } from "react";

const QuantityCombobox = ({ maxQuantity }: { maxQuantity: number }) => {
  const options = useMemo(
    () => Array.from({ length: maxQuantity }, (_, i) => i + 1),
    [maxQuantity],
  );

  const [selected, setSelected] = useState(options[0]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="group flex w-36 items-center justify-between gap-x-2 rounded-md border border-gray-200 bg-white py-2 pr-2 pl-3.5 text-sm font-medium text-gray-900 disabled:cursor-not-allowed disabled:opacity-50">
        <span className="line-clamp-1">Količina: {selected}</span>
        <IconChevronDown
          strokeWidth={2}
          className="size-4 text-gray-700 transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          className="z-10 max-h-56 w-(--radix-dropdown-menu-trigger-width) overflow-y-auto rounded-lg border border-gray-400 bg-white py-1"
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              onClick={() => {
                setSelected(option);
              }}
              className="cursor-pointer px-4 py-2 text-sm outline-hidden hover:bg-gray-200 focus:bg-gray-100"
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default QuantityCombobox;
