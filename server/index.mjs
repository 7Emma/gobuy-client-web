import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.CONTACT_API_PORT || 8787);

const allowedOrigins = process.env.CONTACT_ALLOWED_ORIGINS
  ? process.env.CONTACT_ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : [];

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hasSmtpConfig = () =>
  Boolean(process.env.BREVO_SMTP_USER && process.env.BREVO_SMTP_PASS && process.env.BREVO_SENDER_EMAIL);
const hasApiConfig = () => Boolean(process.env.BREVO_API_KEY && process.env.BREVO_SENDER_EMAIL);
const hasRecipient = () => Boolean(process.env.CONTACT_TO_EMAIL);

const smtpTransport = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
  port: Number(process.env.BREVO_SMTP_PORT || 587),
  secure: String(process.env.BREVO_SMTP_SECURE || 'false') === 'true',
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true, service: 'contact-api' });
});

app.post('/api/contact', async (req, res) => {
  if (!hasRecipient() || (!hasSmtpConfig() && !hasApiConfig())) {
    return res.status(500).json({
      ok: false,
      error: 'Brevo non configuré. Ajoutez SMTP (user+pass) ou BREVO_API_KEY.',
    });
  }

  const name = String(req.body.name || '').trim();
  const email = String(req.body.email || '').trim();
  const profile = String(req.body.profile || '').trim();
  const message = String(req.body.message || '').trim();
  const source = String(req.body.source || 'website-contact-form').trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Les champs nom, email et message sont obligatoires.',
    });
  }

  const subject = `[GoBuy Contact] ${profile || 'demande'} - ${name}`;
  const text = [
    `Nom: ${name}`,
    `Email: ${email}`,
    `Profil: ${profile || 'non précisé'}`,
    `Source: ${source}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2>Nouvelle demande de contact GoBuy</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Profil:</strong> ${profile || 'non precise'}</p>
      <p><strong>Source:</strong> ${source}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  try {
    if (hasSmtpConfig()) {
      await smtpTransport.sendMail({
        from: `"${process.env.BREVO_SENDER_NAME || 'GoBuy Contact'}" <${process.env.BREVO_SENDER_EMAIL}>`,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject,
        text,
        html,
      });
    } else {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: process.env.BREVO_SENDER_NAME || 'GoBuy Contact',
            email: process.env.BREVO_SENDER_EMAIL,
          },
          to: [{ email: process.env.CONTACT_TO_EMAIL }],
          replyTo: { email },
          subject,
          htmlContent: html,
          textContent: text,
        }),
      });

      if (!response.ok) {
        const data = await response.text();
        throw new Error(`Brevo API error: ${data}`);
      }
    }

    return res.status(200).json({ ok: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: 'Échec de l’envoi SMTP. Vérifiez les identifiants Brevo.',
      detail: error?.message || 'unknown_error',
    });
  }
});

app.listen(port, () => {
  console.log(`Contact SMTP API active sur http://localhost:${port}`);
});
