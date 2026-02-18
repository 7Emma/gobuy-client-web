# GoBuy Client Web

Site vitrine React + Vite pour presenter GoBuy (produit, equipe, partenaires, presse, FAQ, legal).

## Stack

- React 19
- React Router DOM
- Vite
- Tailwind CSS
- ESLint (config Flat)

## Demarrage (Yarn)

```bash
yarn install
yarn dev
```

## Scripts

- `yarn dev`: lance le serveur de dev
- `yarn build`: build production
- `yarn preview`: previsualiser le build
- `yarn lint`: verifier la qualite du code

## Architecture

Le projet est organise autour de 3 blocs:

- `src/main.jsx`: point d'entree React + `BrowserRouter`
- `src/App.jsx`: composition globale (header, routes, footer, scroll reset, transition de page)
- `src/pages/*`: pages metier routees
- `src/components/*`: sections UI reutilisables (Hero, Features, Footer, etc.)
- `public/*`: fichiers statiques servis directement (mockups, favicon, assets publics)

Arborescence principale:

```text
client-web/
├── public/
│   ├── mockups/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── yarn.lock
```

Routing principal (`src/App.jsx`):

- `/` Accueil
- `/a-propos`
- `/equipe`
- `/partenaires`
- `/presse`
- `/carrieres`
- `/faq`
- `/contact`
- `/confidentialite`
- `/conditions`

## Variables d'environnement

- `VITE_CONTACT_FORM_ENDPOINT`: endpoint du formulaire Contact (par defaut `/api/contact`).
- `BREVO_SMTP_USER`, `BREVO_SMTP_PASS`, `BREVO_SENDER_EMAIL`, `CONTACT_TO_EMAIL`: configuration SMTP Brevo (API contact).

## SMTP Brevo (Contact)

1. Copier `.env.example` vers `.env`
2. Renseigner les variables Brevo SMTP
3. Lancer l'API mail:

```bash
yarn server
```

4. Lancer le frontend:

```bash
yarn dev
```

L'endpoint utilise est `POST /api/contact` (proxy Vite vers `http://localhost:8787` en dev).

## Notes

- Le projet doit etre gere avec Yarn.
- Les transitions de route sont animees et le scroll est reset en haut a chaque navigation.

## Auteur

- Emmanuel AGBOTOEDO - Co-founder et chef projet
