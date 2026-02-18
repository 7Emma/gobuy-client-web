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

## Structure

- `src/`: code applicatif
- `public/`: assets statiques servis tels quels
- `src/components/`: composants UI reutilisables
- `src/pages/`: pages routees

## Variables d'environnement

- `VITE_CONTACT_FORM_ENDPOINT`: endpoint pour brancher le formulaire Contact (Formspree/backend).

## Notes

- Le projet doit etre gere avec Yarn.
- Les transitions de route sont animees et le scroll est reset en haut a chaque navigation.
# gobuy-client-web
