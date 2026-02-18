# 🚀 Quick Start - TerroirConnect Landing Page

## ✅ Installation complétée

Tous les composants React avec **Tailwind CSS v3** et **Lucide React** sont prêts.

## 📁 Structure des fichiers

```
src/
├── components/
│   ├── Navigation.jsx    ← Barre de navigation
│   ├── Hero.jsx         ← Section d'accueil
│   ├── Features.jsx     ← 3 fonctionnalités
│   ├── Producers.jsx    ← Section producteurs
│   ├── Download.jsx     ← QR code + stores
│   ├── Footer.jsx       ← Pied de page
│   └── index.js         ← Export centralisé
├── App.jsx              ← Composant principal
├── App.css              ← Styles personnalisés
├── index.css            ← Reset + Tailwind
└── main.jsx            ← Point d'entrée
```

## 🎯 Démarrer le projet

### Option 1: Dev Server (Vite)
```bash
yarn dev
```
Accès: `http://localhost:5173/`

### Option 2: Preview statique
Ouvrir `DEMO.html` directement dans un navigateur pour un aperçu complet sans build.

### Build production
```bash
yarn build
```

## 📦 Dépendances

**Dependencies:**
- react@^19.2.0
- react-dom@^19.2.0
- lucide-react@^0.574.0

**DevDependencies:**
- tailwindcss@^3.4.1 ✅ (v3 - stable)
- postcss@^8.5.6
- autoprefixer@^10.4.24
- vite@^7.3.1
- @vitejs/plugin-react@^5.1.4
- eslint + plugins

## 🎨 Customisation rapide

### Couleurs (Tailwind)
Éditer `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#f97316', // orange
    }
  }
}
```

### Contenu texte
Tous les textes sont dans les composants JSX. Modifier directement.

### Images
Remplacer les URLs Unsplash par vos images locales dans:
- `Hero.jsx` → phone mockup
- `Producers.jsx` → farmer image
- `Download.jsx` → QR code

## 🏗️ Architecture des composants

Chaque composant est **self-contained**:
- Props optionnels pour la flexibilité
- Tailwind CSS inline (pas de fichiers CSS séparés)
- Responsive design intégré

Importer et utiliser dans `App.jsx`:
```jsx
import { Hero, Features } from './components';

export default function App() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
```

## 🚨 Troubleshooting

### "vite not found"
Réinstaller les dépendances:
```bash
rm -rf node_modules
yarn install
```

### Styles Tailwind manquants
Vérifier que `index.css` contient:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Icônes Lucide invisibles
Vérifier les imports:
```jsx
import { MapPin, Star, CheckCircle2 } from 'lucide-react';
```

## 📱 Responsive Design

Breakpoints Tailwind utilisés:
- Mobile: par défaut
- `sm:` (640px)
- `md:` (768px) ← Principal
- `lg:` (1024px)

Tester avec devtools Chrome (F12 → Toggle device toolbar)

## 🔗 Liens & anchors

Navigation auto-scrolle vers les sections:
- `#features` → Section Features
- `#producers` → Section Producteurs
- `#download` → Section Téléchargement

Fonctionnel grâce aux `id` et `href` HTML.

## 📝 Notes

- React 19+ n'oblige plus l'import React (JSX transform)
- ESLint warnings sur imports non-utilisés = normal (JSX)
- Tous les `href="#"` sont placeholder - les modifier selon vos besoins
- Images Unsplash peuvent être indisponibles - utiliser localement

## 🎉 Prêt à la production

Le build Vite génère:
- CSS minifié
- JS optimisé
- Icônes SVG inline
- Assets compressées

```bash
yarn build    # Genere dist/
yarn preview  # Preview du build
```

---

**Besoin d'aide?**
- Docs Tailwind: https://tailwindcss.com
- Docs Lucide: https://lucide.dev
- Docs React: https://react.dev
- Docs Vite: https://vitejs.dev
