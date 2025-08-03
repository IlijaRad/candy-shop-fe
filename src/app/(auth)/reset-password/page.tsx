import ResetPasswordForm from "@/ui/forms/reset-password";
import { SearchParams } from "next/dist/server/request/search-params";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
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
