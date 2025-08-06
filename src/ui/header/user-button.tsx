"use client";

import { logout } from "@/lib/actions/logout";
import { AuthenticatedUser } from "@/lib/actions/user";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconUser } from "@tabler/icons-react";

export default function UserButton({ user }: { user: AuthenticatedUser }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="-m-2 flex cursor-pointer items-center gap-x-2 p-2 text-gray-400"
        aria-label="User Menu"
      >
        <IconUser className="shrink-0" />
        <div className="hidden max-w-60 truncate text-sm text-gray-700 lg:block">
          {user?.email}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade w-[var(--radix-dropdown-menu-trigger-width)] overflow-visible rounded-md bg-white shadow will-change-[opacity,transform]">
          <DropdownMenu.Item
            onClick={() => logout()}
            className="flex cursor-pointer items-center rounded-sm bg-white py-2 pr-1.5 pl-4 text-sm text-gray-900 transition-colors outline-none select-none data-[highlighted]:bg-gray-100"
          >
            Odjavi se
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
