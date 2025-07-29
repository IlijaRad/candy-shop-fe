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
          Resetuj lozinku
        </h1>
        <form className="mt-4">
          <div>
            <Label htmlFor="password">Nova lozinka</Label>
            <Input
              type="password"
              id="password"
              name="password"
              className="mt-2"
              required
            />
            {false && (
              <p className="mt-0.5 line-clamp-1 text-xs text-rose-600">
                Lozinka mora da sadrži barem 8 karaktera
              </p>
            )}
          </div>

          <div className="mt-6">
            <Label htmlFor="password_confirmation">Ponovi novu lozinku</Label>
            <Input
              type="password_confirmation"
              id="password_confirmation"
              name="password_confirmation"
              className="mt-2"
              required
            />
            {false && (
              <p className="mt-0.5 line-clamp-1 text-xs text-rose-600">
                Lozinke se ne poklapaju
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-medium mt-8 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white"
          >
            Prijavi se
          </button>
          {false && (
            <p className="mt-2 line-clamp-1 text-xs text-rose-600">
              Serverska greška. Pokušajte ponovo za par minuta
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
