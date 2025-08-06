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
        <Input
          type="email"
          id="email"
          name="email"
          className="mt-2"
          required
          defaultValue={state.email}
        />
        {state?.errors && state.errors.email && (
          <p
            aria-live="polite"
            className="mt-1 line-clamp-2 text-xs text-red-600"
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
            className="mt-1 line-clamp-2 text-xs text-red-600"
          >
            {state.errors.password[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-medium mt-8 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={pending}
      >
        Prijavi se
      </button>
      {state?.errors && (
        <p
          aria-live="polite"
          className="mt-4 line-clamp-2 text-xs text-red-600"
        >
          {state.errors["server" as keyof typeof state.errors]?.[0]}
        </p>
      )}
    </form>
  );
}
