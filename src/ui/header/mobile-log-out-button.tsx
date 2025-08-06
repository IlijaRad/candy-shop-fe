"use client";

import { logout } from "@/lib/actions/logout";
import { Trigger } from "@radix-ui/react-dialog";

const MobileLogOutButton = () => {
  return (
    <Trigger asChild>
      <button
        className="mx-4 mt-6 cursor-pointer rounded-md border border-gray-400 bg-white py-2 font-medium text-gray-900 transition-colors hover:bg-gray-100"
        onClick={() => logout()}
      >
        Odjavi se
      </button>
    </Trigger>
  );
};

export default MobileLogOutButton;
