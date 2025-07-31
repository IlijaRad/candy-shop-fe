import VerifyEmailTemplate from "@/emails/verify-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "admin@candysrb.store",
      to: ["haricurikotikriv@gmail.com"],
      subject: "Hello world",
      react: VerifyEmailTemplate({ verificationCode: "12345678" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
