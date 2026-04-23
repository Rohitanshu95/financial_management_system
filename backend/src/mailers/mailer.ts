import { Env } from "../config/env.config";
import { transporter } from "../config/nodemailer.config";

type Params = {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  from?: string;
};

const mailer_sender = `Finora <${Env.GMAIL_USER}>`;

export const sendEmail = async ({
  to,
  from = mailer_sender,
  subject,
  text,
  html,
}: Params) => {
  return await transporter.sendMail({
    from,
    to: Array.isArray(to) ? to.join(", ") : to,
    text,
    subject,
    html,
  });
};
