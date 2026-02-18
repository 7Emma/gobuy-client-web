# TerroirConnect - Landing Page React Components

Structure complète des composants React pour la landing page TerroirConnect, utilisant Tailwind CSS, Lucide React et Vite.

## Installation

Les dépendances sont déjà installées:
- React 19.2.0
- Lucide React (icônes)
- Tailwind CSS 4.1.18
- Vite

Pour installer de zéro:
```bash
yarn install
```

## Structure des composants

```
src/
├── components/
│   ├── Navigation.jsx      # Barre de navigation fixe
│   ├── Hero.jsx           # Section héro avec mockup téléphone
│   ├── Features.jsx       # Grille de 3 fonctionnalités
│   ├── Producers.jsx      # Section dédiée aux producteurs
│   ├── Download.jsx       # Section téléchargement (QR code + stores)
│   ├── Footer.jsx         # Pied de page
│   └── index.js           # Export centralisé
├── App.jsx                # Composant principal
├── App.css                # Styles additionnels (gradients, animations)
├── index.css              # Styles Tailwind + reset
└── main.jsx              # Point d'entrée React
```

## Composants

### Navigation
Barre de navigation sticky avec:
- Logo TerroirConnect
- Menu de navigation avec liens ancrés
- Bouton "Installer l'app"
- Effet de verre frosted (backdrop blur)

### Hero
Section d'introduction avec:
- Badge animé "N°1 des circuits courts"
- Titre en gradient orange/amber
- Description et appels à l'action (App Store, Play Store)
- Preuve sociale (avatars + nombre d'utilisateurs)
- Mockup d'écran téléphone avec image de produits

### Features
3 cartes fonctionnalités avec:
- Icônes Lucide React (MapPin, Zap, Shield)
- Titre et description
- Hover effect (augmentation d'ombre)
- Fond dégradé orange/amber pour les icônes

### Producers
Section "Pour les producteurs" avec:
- Contenu texte sur fond noir
- Liste à puces avec icônes CheckCircle2
- Image responsive
- Bouton CTA "Ouvrir ma boutique"

### Download
Section téléchargement avec:
- QR code depuis API qrserver
- Liens App Store et Play Store
- Design deux colonnes responsif

### Footer
Pied de page minimal avec:
- Logo + nom
- Liens: Confidentialité, Conditions, Contact
- Copyright

## Utilisation

### Mode développement
```bash
yarn dev
```
Accès: `http://localhost:5173/`

### Build production
```bash
yarn build
```
Génère les fichiers optimisés dans le dossier `dist/`

### Aperçu du build
```bash
yarn preview
```

### Lint (ESLint)
```bash
yarn lint
```

## Personnalisation

### Couleurs
Les couleurs utilisées sont définies dans Tailwind:
- Orange principal: `orange-500`, `orange-600`
- Gris/Ardoise: `slate-900`, `slate-500`, `slate-100`
- Nuances: `amber`, `emerald`, `blue`

Modifier dans `tailwind.config.js` si besoin.

### Fonts
Police: Plus Jakarta Sans (importée via Google Fonts dans `App.css`)

### Images
- Avatar placeholder: `i.pravatar.cc`
- Images produits/producteurs: Unsplash (liens HTTP)
- QR code: API qrserver

Remplacer les URLs par vos propres images.

### Contenu texte
Tous les textes sont hardcodés dans les composants. Pour un contenu dynamique, utiliser des props ou un CMS.

## Icônes Lucide React

Liste des icônes utilisées:
- `Leaf` - Logo principal
- `Star` - Badge featured
- `Apple` - Logo App Store
- `Play` - Logo Play Store
- `MapPin` - Géolocalisation
- `Zap` - Flash/rapide
- `Shield` - Sécurité
- `CheckCircle2` - Validation

[Documentation Lucide React](https://lucide.dev)

## Tailwind CSS

Le projet utilise Tailwind CSS 4 avec:
- Utility-first approach
- Responsive breakpoints (md, lg)
- Gradients, shadows, animations intégrées
- Custom styles dans `App.css`

## Responsive Design

Breakpoints utilisés:
- Mobile: par défaut
- Tablet: `sm:` (640px), `md:` (768px)
- Desktop: `lg:` (1024px)

Tous les composants sont fully responsive.

## Performance

- Code splitting automatique via Vite
- Lucide React: icônes SVG optimisées
- Tailwind CSS: utility classes minifiées
- Images: lazy loaded par défaut

## Développement

### Ajouter un nouveau composant

1. Créer `src/components/MonComposant.jsx`
2. Exporter dans `src/components/index.js`
3. Importer et utiliser dans `App.jsx`

```jsx
import React from 'react';

export const MonComposant = () => {
  return <div className="...">Contenu</div>;
};
```

### Ajouter une section

1. Créer le composant
2. Ajouter un `id` au conteneur pour les liens ancrés
3. Ajouter le lien dans Navigation.jsx

## Troubleshooting

### Les styles Tailwind ne s'appliquent pas
- Vérifier que `@tailwind` directives sont dans `index.css`
- Redémarrer le dev server
- Vérifier la syntaxe des classes

### Les icônes ne s'affichent pas
- Vérifier l'import depuis `lucide-react`
- Vérifier le nom exact de l'icône
- [Chercher dans la galerie Lucide](https://lucide.dev)

### Build échoue
```bash
yarn run lint      # Vérifier les erreurs ESLint
rm -rf dist        # Nettoyer le cache
yarn build         # Relancer le build
```

## Notes

- `React` est importer mais pas obligatoire avec React 17+ et JSX transform
- ESLint peut montrer des faux warnings sur les imports JSX (normal)
- Tous les liens (`href="#"`) sont placeholder - à remplacer
- Images Unsplash peuvent être indisponibles - préférer des images locales

