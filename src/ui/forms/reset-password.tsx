"use client";

import { resetPassword } from "@/lib/actions/reset-password";
import Input from "@/ui/components/input";
import Label from "@/ui/components/label";
import Image from "next/image";
import { useActionState } from "react";

export default function ResetPasswordForm({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const [state, formAction, pending] = useActionState(resetPassword, {});

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
        <form action={formAction} className="mt-4">
          <div>
            <input name="token" value={token} className="hidden" readOnly />
            <input name="email" value={email} className="hidden" readOnly />
            <Label htmlFor="password">Nova lozinka</Label>
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
                className="mt-1 line-clamp-2 text-xs text-rose-600"
              >
                {state.errors.password[0]}
              </p>
            )}
          </div>

          <div className="mt-6">
            <Label htmlFor="password_confirmation">Ponovi novu lozinku</Label>
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
                className="mt-1 line-clamp-2 text-xs text-rose-600"
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
            Pošalji
          </button>
          {state?.errors && (
            <p
              aria-live="polite"
              className="mt-4 line-clamp-2 text-xs text-rose-600"
            >
              {state.errors["server" as keyof typeof state.errors]?.[0]}
            </p>
          )}
          {state?.errors && (
            <p
              aria-live="polite"
              className="mt-4 line-clamp-2 text-xs text-rose-600"
            >
              {state.errors["email" as keyof typeof state.errors]?.[0]}
            </p>
          )}
          {state?.errors && (
            <p
              aria-live="polite"
              className="mt-4 line-clamp-2 text-xs text-rose-600"
            >
              {state.errors["token" as keyof typeof state.errors]?.[0]}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
