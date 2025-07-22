import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-gray-900">
      <div className="lg:px-8 px-4 h-10 lg:grid grid-cols-4 items-center">
        <div className="hidden lg:block grow" aria-hidden="true" />
        <div className="text-white hidden lg:block col-span-2 font-medium justify-self-center text-sm">
          Besplatna dostava za porudžbine preko 5000RSD
        </div>
        <div className="text-white lg:hidden font-medium flex h-full items-center justify-center text-sm">
          Besplatna dostava za sve preko 5000RSD
        </div>
        <nav className="lg:flex hidden gap-x-6 items-center text-white justify-self-end font-medium text-sm">
          <Link href="/register">Napravi nalog</Link>
          <div className="w-px h-6 bg-gray-600" aria-hidden="true" />
          <Link href="/login">Uloguj se</Link>
        </nav>
      </div>
    </div>
  );
}
