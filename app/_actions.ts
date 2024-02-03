//@ts-nocheck

"use server";

import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/emailTemplate";
import { Resend } from "resend";
import { EmailTemplate2 } from "./components/emailTemplate2";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(
  formdata: FormData,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Email = formdata.get("Email");
  const Subject = formdata.get("Subject");
  const Message = formdata.get("Message");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["praveenthanikachalam408@gmail.com"],
    subject: "From Visitors",
    react: EmailTemplate({ email: Email, subject: Subject, message: Message }),
  });

  if (error) {
    return error;
  }

  return data;
}

export async function sendmail2(
  formdata: FormData,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Email = formdata.get("Email");
  const Subject = formdata.get("Subject");
  const Message = formdata.get("Message");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["praveenthanikachalam408@gmail.com"],
    subject: "From Visitors",
    react: EmailTemplate2({ email: Email, subject: Subject, message: Message }),
  });

  if (error) {
    return error;
  }

  return data;
}
