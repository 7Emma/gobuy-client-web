# Dossier server

API backend locale pour le formulaire de contact.

Endpoints:

- `GET /api/health`: check de disponibilite
- `POST /api/contact`: envoi d'email via SMTP Brevo

Fichier principal:

- `index.mjs`

Variables utilisees:

- `BREVO_SMTP_USER`
- `BREVO_SMTP_PASS`
- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME`
- `CONTACT_TO_EMAIL`
- `CONTACT_API_PORT`
- `CONTACT_ALLOWED_ORIGINS`
