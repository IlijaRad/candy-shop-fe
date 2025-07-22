import { IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white hidden lg:block">
      <div className="px-8">
        <div className="flex border-b h-16 border-gray-200 items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={33}
                height={32}
                alt="CandySrb Logo"
              />
            </Link>
            <nav className="font-medium flex gap-x-8 text-sm text-gray-700">
              <Link href="/">Sokovi</Link>
              <Link href="/">Energetska pića</Link>
              <Link href="/">Bombone</Link>
              <Link href="/">Slatkiši</Link>
            </nav>
          </div>
          <div className="flex gap-x-6">
            <div className="flex gap-x-8 text-gray-400">
              <button className="cursor-pointer p-2 -m-2" aria-label="Search">
                <IconSearch />
              </button>
              <button className="cursor-pointer p-2 -m-2" aria-label="Account">
                <IconUser />
              </button>
            </div>
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
