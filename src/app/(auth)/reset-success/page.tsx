import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-89 rounded-xl border-gray-200 bg-white lg:border lg:p-8">
        <Image
          src="/logo.png"
          alt=""
          width={20}
          height={19}
          className="mx-auto"
        />
        <p className="mx-auto mt-4 text-center text-sm text-gray-700">
          Ukoliko vaša email adresa postoji u našem sistemu, dobićete email za
          promenu lozinke. Ukoliko ne stigne u roku od par minuta, proverite
          spam folder.
        </p>
        <Link
          href="/login"
          className="text-medium mt-6 flex h-9 w-full cursor-pointer items-center justify-center gap-x-1 rounded-md bg-gray-900 px-3.5 text-sm text-white transition-all hover:bg-gray-800"
        >
          <IconChevronLeft size={16} />
          Prijava
        </Link>
      </div>
    </div>
  );
}
