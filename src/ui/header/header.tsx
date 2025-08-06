import { getUser } from "@/lib/actions/user";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import UserButton from "./user-button";

export default async function Header() {
  const user = await getUser();

  return (
    <div className="hidden bg-white lg:block">
      <div className="mx-auto max-w-7xl px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-x-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={33}
                  height={32}
                  alt="CandySrb Logo"
                />
              </Link>
              <nav className="flex gap-x-8 text-sm font-medium text-gray-700 *:transition-colors *:hover:text-gray-950">
                <Link href="/" prefetch={false}>
                  Sokovi
                </Link>
                <Link href="/" prefetch={false}>
                  Energetska pića
                </Link>
                <Link href="/" prefetch={false}>
                  Bombone
                </Link>
                <Link href="/" prefetch={false}>
                  Slatkiši
                </Link>
              </nav>
            </div>
            <div className="flex gap-x-6">
              <div className="flex gap-x-8 text-gray-400">
                <Link
                  href="/"
                  aria-label="Search"
                  prefetch={false}
                  className="-m-2 cursor-pointer rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100"
                >
                  <IconSearch />
                </Link>
                {user && <UserButton user={user} />}
              </div>
              <div className="h-6 w-px bg-gray-200" aria-hidden />
              <Link
                href=""
                prefetch={false}
                aria-label="cart"
                className="-m-2 flex cursor-pointer items-center gap-x-2 rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100"
              >
                <IconShoppingCart />
                <span className="text-sm font-medium text-gray-700">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
