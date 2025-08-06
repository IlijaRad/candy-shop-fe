import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenuButton from "./mobile-menu-button";

export default function HeaderMobile() {
  return (
    <div className="bg-white lg:hidden">
      <div className="px-4 sm:px-6">
        <div className="grid h-16 grid-cols-3 items-center border-b border-gray-200">
          <div className="flex gap-x-6">
            <MobileMenuButton />
            <button
              className="-m-2 cursor-pointer rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100"
              aria-label="Search"
            >
              <IconSearch />
            </button>
          </div>
          <Link href="/" className="justify-self-center">
            <Image src="/logo.png" width={33} height={32} alt="CandySrb Logo" />
          </Link>

          <div className="justify-self-end">
            <button
              className="-m-2 flex cursor-pointer items-center gap-x-2 rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100"
              aria-label="Cart"
            >
              <IconShoppingCart />
              <span className="text-sm font-medium text-gray-700">0</span>
              <span className="sr-only">items in cart, view bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
