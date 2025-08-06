import { getUser } from "@/lib/actions/user";
import Link from "next/link";

export default async function TopBar() {
  const user = await getUser();

  const loggedIn = user !== null;
  return (
    <div className="bg-gray-900">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block lg:flex-1" aria-hidden="true" />
        <div className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
          Besplatna dostava za porudžbine preko 5000RSD
        </div>
        {!loggedIn && (
          <nav className="hidden text-sm text-white lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link href="/register">Registruj se</Link>
            <div className="h-6 w-px bg-gray-600" aria-hidden="true" />
            <Link href="/login">Prijavi se</Link>
          </nav>
        )}
      </div>
    </div>
  );
}
