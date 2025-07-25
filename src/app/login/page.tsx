import Image from "next/image";
import Link from "next/link";
import Input from "../ui/components/input";
import Label from "../ui/components/label";

export default function Page() {
  return (
    <div className="bg-white px-4 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-89 rounded-xl border-gray-200 bg-white lg:border lg:p-8">
        <Image
          src="/logo.png"
          alt=""
          width={20}
          height={19}
          className="mx-auto"
        />
        <h1 className="mx-auto mt-4 w-fit text-lg/7 font-semibold text-gray-900">
          Prijavi se
        </h1>
        <p className="mx-auto mt-2 w-fit text-sm text-gray-700">
          Nemaš nalog?&nbsp;
          <Link href="/register" className="font-medium">
            Registruj se
          </Link>
        </p>
        <form className="mt-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="mt-2"
              required
            />
            {false && (
              <p className="mt-0.5 line-clamp-1 text-xs text-rose-600">
                Nepostojeća email adresa
              </p>
            )}
          </div>

          <div className="mt-6">
            <Label htmlFor="password">Lozinka</Label>
            <Input
              type="password"
              id="password"
              name="password"
              className="mt-2"
              required
            />
            {false && (
              <p className="mt-0.5 line-clamp-1 text-xs text-rose-600">
                Pogrešna lozinka
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-medium mt-8 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white"
          >
            Prijavi se
          </button>
        </form>
        <Link
          href="/forgot-password"
          className="mx-auto mt-4 block w-fit text-sm font-medium text-gray-700"
        >
          Zaboravljena lozinka?
        </Link>
      </div>
    </div>
  );
}
