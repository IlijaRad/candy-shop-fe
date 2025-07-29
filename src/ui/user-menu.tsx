"use client";
import { logout } from "@/lib/actions/logout";
import { AuthenticatedUser } from "@/lib/actions/user";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconUser } from "@tabler/icons-react";
import clsx from "clsx";

export default function UserMenu({ user }: { user: AuthenticatedUser | null }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild disabled={!user}>
        <button
          className={clsx(
            "-m-2 flex items-center gap-x-2 p-2 text-gray-400",
            user && "cursor-pointer",
          )}
          aria-label="User Menu"
        >
          <IconUser className="shrink-0" />
          <div className="hidden max-w-60 truncate text-sm text-gray-700 lg:block">
            {user?.email}
          </div>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade min-w-55 rounded-md bg-white p-2 shadow-lg will-change-[opacity,transform]"
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={() => logout()}
            className="flex h-7 items-center rounded-sm pr-1.5 pl-4 text-sm text-gray-900 outline-none select-none hover:cursor-pointer data-[highlighted]:bg-gray-900 data-[highlighted]:text-gray-200"
          >
            Log out
          </DropdownMenu.Item>

          {/* <DropdownMenu.Separator className="m-[5px] h-px bg-violet6" /> */}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
