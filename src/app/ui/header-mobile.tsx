import {
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMobile() {
  return (
    <div className="bg-white lg:hidden">
      <div className="px-4">
        <div className="grid grid-cols-3 border-b h-16 border-gray-200 items-center">
          <div className="flex gap-x-6">
            <button
              className="cursor-pointer p-2 -m-2 text-gray-400"
              aria-label="Menu"
            >
              <IconMenu2 />
            </button>
            <button
              className="cursor-pointer p-2 -m-2 text-gray-400"
              aria-label="Search"
            >
              <IconSearch />
            </button>
          </div>
          <Link href="/" className="justify-self-center">
            <Image src="/logo.png" width={33} height={32} alt="CandySrb Logo" />
          </Link>
          <div className="flex justify-self-end gap-x-4">
            <button
              className="cursor-pointer p-2 -m-2 text-gray-400"
              aria-label="User"
            >
              <IconUser />
            </button>
            <div className="w-px h-6 bg-gray-200" aria-hidden />
            <button
              className="flex cursor-pointer p-2 -m-2 items-center gap-x-2 text-gray-400"
              aria-label="Cart"
            >
              <IconShoppingCart />
              <span className="text-sm font-medium text-gray-700">0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
