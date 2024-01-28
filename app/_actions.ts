//@ts-nocheck

"use server";

import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/emailTemplate";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendMail(
  formdata: FormData,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Email = formdata.get("Email");
  const Subject = formdata.get("Subject");
  const Message = formdata.get("Message");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: Email,
    subject: "From Visitors",
    react: EmailTemplate({ email: Email, subject: Subject, message: Message }),
  });

  if (error) {
    return error;
  }

  return data;
}
