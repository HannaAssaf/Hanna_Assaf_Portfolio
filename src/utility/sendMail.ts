import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    return { status: 500, message: "Internal server error" };
  }

  const transporter = createTransport({
    host,
    port,
    secure: port === 465, // true для 465 (TLS), false для 587 (STARTTLS)
    auth: { user, pass },
  });

  const from = `"Portfolio" <${user}>`; // має збігатися з користувачем SMTP
  const to = process.env.TO_EMAIL || user;

  const mailOptions = {
    from,
    to, // Лист прийде в твою скриньку (може бути Gmail)
    replyTo: email === "SELF" ? undefined : email, // щоб відповідь ішла відвідувачу форми
    subject: `Portfolio: [${subject}]`,
    text: `${name}: <${email}>\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: "Mail sent successfully" };
  } catch (e) {
    console.error(e);
    return { status: 500, message: "Failed to send mail" };
  }
};

// import { createTransport } from "nodemailer";

// export const sendMail = async function (
//   name: string,
//   email: string | "SELF",
//   subject: string,
//   message: string,
// ): Promise<{ status: number; message: string }> {
//   const user = process.env.NODEMAILER_USER;
//   const pass = process.env.NODEMAILER_PASS;

//   if (!user && !pass) {
//     return new Promise((resolve) =>
//       resolve({ status: 500, message: "Internal server error" }),
//     );
//   }

//   const transporter = createTransport({
//     service: "gmail",
//     auth: {
//       user,
//       pass,
//     },
//   });

//   const mailOptions = {
//     from: process.env.NODEMAILER_USER,
//     to: process.env.NODEMAILER_USER,
//     subject: "Portfolio: [" + subject + " ]",
//     text: `${name}: <${email}>\n${message}`,
//   };

//   return new Promise((resolve) => {
//     transporter.sendMail(mailOptions, (error) => {
//       if (error) {
//         resolve({ status: 500, message: "Failed to send mail" });
//       } else {
//         resolve({ status: 200, message: "Mail send successfully" });
//       }
//     });
//   });
// };
