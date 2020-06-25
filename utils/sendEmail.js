import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";

const sendEmail = async ({ name, email, phone }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "Demo success :)",
          dynamic_template_data: {
            name: name,
          },
        },
      ],
      from: {
        email: "contact@chankillo.com",
        name: "Chankillo Farmers",
      },
      content: [
        {
          type: "text/html",
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
        },
      ],
      template_id: "d-edbc245179514c078fdd252f04f4f28f",
    }),
  });
};

const sendToMe = async ({ name, email, phone }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "mauriciofow@gmail.com",
            },
          ],
          subject: "Demo success :)",
        },
      ],
      from: {
        email: "noreply@demo.com",
        name: "Test SendGrid",
      },
      content: [
        {
          type: "text/html",
          value: `${name} with the email ${email} and phone number ${phone} is trying to contact you`,
        },
      ],
    }),
  });
};

export { sendEmail, sendToMe };
