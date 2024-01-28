"use server";

export async function sendMail(data: FormData) {
  const Email = data.get("Email");
  const Subject = data.get("Subject");
  const Message = data.get("Message");
  console.log(Email, Subject, Message);
  return "success";
}
