"use client";

import { register } from "@/lib/actions/register";
import Input from "@/ui/components/input";
import Label from "@/ui/components/label";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(register, {});

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
          Registruj se
        </h1>
        <p className="mx-auto mt-2 w-fit text-sm text-gray-700">
          Imaš nalog?&nbsp;
          <Link href="/login" className="font-medium">
            Prijavi se
          </Link>
        </p>
        <form action={formAction} className="mt-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="mt-2"
              required
            />
            {state?.errors && state.errors.email && (
              <p
                aria-live="polite"
                className="mt-0.5 line-clamp-1 text-xs text-rose-600"
              >
                {state.errors.email[0]}
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
            {state?.errors && state.errors.password && (
              <p
                aria-live="polite"
                className="mt-0.5 line-clamp-1 text-xs text-rose-600"
              >
                {state.errors.password[0]}
              </p>
            )}
          </div>

          <div className="mt-6">
            <Label htmlFor="password_confirmation">Ponovi lozinku</Label>
            <Input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              className="mt-2"
              required
            />
            {state?.errors && state.errors.password_confirmation && (
              <p
                aria-live="polite"
                className="mt-0.5 line-clamp-1 text-xs text-rose-600"
              >
                {state.errors.password_confirmation[0]}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-medium mt-8 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={pending}
          >
            Registruj se
          </button>
        </form>
        <p className="mt-6 text-xs text-gray-600">
          Registracijom prihvatam&nbsp;
          <Link href="/terms-of-service" className="font-medium">
            Uslove korišćenja
          </Link>
          &nbsp; i izjavljujem da sam upoznat sa&nbsp;
          <Link href="/privacy-policy" className="font-medium">
            Obaveštenjem o privatnosti.
          </Link>
        </p>
      </div>
    </div>
  );
}
