"use client";

import { login } from "@/lib/actions/login";
import { useActionState } from "react";
import Input from "../components/input";
import Label from "../components/label";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, {});

  return (
    <form action={formAction} className="mt-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" className="mt-2" required />
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

      <button
        type="submit"
        className="text-medium mt-8 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white"
        disabled={pending}
      >
        Prijavi se
      </button>
    </form>
  );
}
