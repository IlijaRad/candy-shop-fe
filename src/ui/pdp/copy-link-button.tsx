"use client";

import * as Popover from "@radix-ui/react-popover";
import { IconLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const CopyLinkButton = ({ url }: { url: string }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsPopoverOpen(true);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPopoverOpen) {
      timer = setTimeout(() => {
        setIsPopoverOpen(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPopoverOpen]);

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Trigger asChild>
        <button
          className="flex size-10 cursor-pointer items-center justify-center text-gray-600/80"
          onClick={copyToClipboard}
        >
          <IconLink />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5} side="top">
          <div className="w-fit rounded-md bg-gray-900 px-2 py-2 text-sm text-white">
            Kopirano
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default CopyLinkButton;
