import { getUser } from "@/lib/actions/user";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./user-menu";

export default async function Header() {
  const user = await getUser();

  return (
    <div className="hidden bg-white lg:block">
      <div className="px-8">
        <div className="flex h-16 items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-x-4">
            <Link href="/">
              <Image
                src="/logo.png"
                width={33}
                height={32}
                alt="CandySrb Logo"
              />
            </Link>
            <nav className="flex gap-x-8 text-sm font-medium text-gray-700">
              <Link href="/">Sokovi</Link>
              <Link href="/">Energetska pića</Link>
              <Link href="/">Bombone</Link>
              <Link href="/">Slatkiši</Link>
            </nav>
          </div>
          <div className="flex gap-x-6">
            <div className="flex gap-x-8 text-gray-400">
              <button className="-m-2 cursor-pointer p-2" aria-label="Search">
                <IconSearch />
              </button>

              <UserMenu user={user} />
            </div>
            <div className="h-6 w-px bg-gray-200" aria-hidden />
            <button
              className="-m-2 flex cursor-pointer items-center gap-x-2 p-2 text-gray-400"
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
