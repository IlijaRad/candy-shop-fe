import {
  CHANGED_PASSWORD_BANNER_COOKIE_NAME,
  REGISTRATION_BANNER_COOKIE_NAME,
} from "@/lib/defintions";
import ChangedPasswordBanner from "@/ui/components/changed-password-banner";
import RegistrationBanner from "@/ui/components/registration-banner";
import LoginForm from "@/ui/forms/login";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const cookieStore = await cookies();
  const showRegistrationBanner =
    cookieStore.get(REGISTRATION_BANNER_COOKIE_NAME)?.value === "true";
  const showChangedPasswordBanner =
    cookieStore.get(CHANGED_PASSWORD_BANNER_COOKIE_NAME)?.value === "true";

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
        <RegistrationBanner inCookie={showRegistrationBanner} />
        <ChangedPasswordBanner inCookie={showChangedPasswordBanner} />
        <LoginForm />
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
