import { SearchPrams } from "@/lib/defintions";
import ResetPasswordForm from "@/ui/forms/reset-password";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchPrams;
}) {
  const { token, email } = await searchParams;

  if (
    !token ||
    typeof token !== "string" ||
    !email ||
    typeof email !== "string"
  ) {
    redirect("/forgot-password");
  }

  return <ResetPasswordForm token={token} email={email} />;
}
