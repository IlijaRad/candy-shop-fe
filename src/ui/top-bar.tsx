import { getUser } from "@/lib/actions/user";
import Link from "next/link";

export default async function TopBar() {
  const user = await getUser();

  const loggedIn = user !== null;
  return (
    <div className="bg-gray-900">
      <div className="h-10 grid-cols-4 items-center px-4 lg:grid lg:px-8">
        <div className="hidden grow lg:block" aria-hidden="true" />
        <div className="col-span-2 hidden justify-self-center text-sm font-medium text-white lg:block">
          Besplatna dostava za porudžbine preko 5000RSD
        </div>
        <div className="flex h-full items-center justify-center text-sm font-medium text-white lg:hidden">
          Besplatna dostava za sve preko 5000RSD
        </div>
        {!loggedIn && (
          <nav className="hidden items-center gap-x-6 justify-self-end text-sm font-medium text-white lg:flex">
            <Link href="/register">Registruj se</Link>
            <div className="h-6 w-px bg-gray-600" aria-hidden="true" />
            <Link href="/login">Prijavi se</Link>
          </nav>
        )}
      </div>
    </div>
  );
}
