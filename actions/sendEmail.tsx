"use server";
import EmailStyles from "@/email/EmailStyles";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message!",
    };
  }

  // Splits the first part and excludes numbers from the email 👇
  const name = senderEmail
    ? senderEmail
        .toString()
        .split("@")[0]
        .replace(/\d+/g, "")
        .replace(/\./g, " ")
    : " ";

  const data = await resend.emails.send({
    from: `${name} <onboarding@resend.dev>`,
    to: "soham.gupta003@gmail.com",
    subject: `Message from: ${name} | through Contact Form`,
    replyTo: senderEmail as string,
    react: (
      <EmailStyles
        message={message as string}
        senderName={name}
        senderEmail={senderEmail as string}
      />
    ),
  });

  console.log("Form filled by: ", formData.get("email"), " | Name: ", name, "\n");

  return {
    data: data.data,
    error: data.error ? getErrorMessage(data.error) : null,
  };
};
