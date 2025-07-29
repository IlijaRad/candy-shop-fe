import Input from "@/ui/components/input";
import Label from "@/ui/components/label";
import Image from "next/image";

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
          Zaboravljena lozinka
        </h1>
        <p className="mx-auto mt-2 text-center text-sm text-gray-700">
          Unesite vašu email adresu na koju ćemo vam poslati dalje korake.
        </p>
        <form className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="mt-2"
            required
          />

          <button
            type="submit"
            className="text-medium mt-6 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white"
          >
            Potvrdi
          </button>
        </form>
      </div>
    </div>
  );
}
