import { getUser } from "@/lib/actions/user";
import { IconMenu2, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./user-menu";

export default async function HeaderMobile() {
  const user = await getUser();

  return (
    <div className="bg-white lg:hidden">
      <div className="px-4">
        <div className="grid h-16 grid-cols-3 items-center border-b border-gray-200">
          <div className="flex gap-x-6">
            <button
              className="-m-2 cursor-pointer p-2 text-gray-400"
              aria-label="Main Menu"
            >
              <IconMenu2 />
            </button>
            <button
              className="-m-2 cursor-pointer p-2 text-gray-400"
              aria-label="Search"
            >
              <IconSearch />
            </button>
          </div>
          <Link href="/" className="justify-self-center">
            <Image src="/logo.png" width={33} height={32} alt="CandySrb Logo" />
          </Link>

          <div className="flex gap-x-4 justify-self-end">
            <UserMenu user={user} />

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
