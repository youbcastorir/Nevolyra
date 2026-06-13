# Nevolyra – Écrivain Public Marrakech Guéliz

> Site web multilingue SEO pour écrivain public à Marrakech Guéliz, Maroc.

🌐 **Domaine :** [nevolyra.com](https://nevolyra.com)  
📱 **WhatsApp :** [+212602321305](https://wa.me/212602321305)  
✉️ **Email :** salatrir@gmail.com

---

## Table des matières

1. [Structure du projet](#structure-du-projet)
2. [Déploiement GitHub Pages](#déploiement-github-pages)
3. [Configuration multilingue](#configuration-multilingue)
4. [Gestion du blog](#gestion-du-blog)
5. [Gestion des services](#gestion-des-services)
6. [Stratégie SEO](#stratégie-seo)
7. [Core Web Vitals](#core-web-vitals)
8. [WhatsApp Integration](#whatsapp-integration)
9. [Google Business Profile](#google-business-profile)
10. [Maintenance](#maintenance)

---

## Structure du projet

```
nevolyra/
├── index.html          # Page principale (SPA shell)
├── style.css           # Feuille de styles complète
├── app.js              # Logique principale (routeur, rendu)
├── translations.js     # Traductions 6 langues
├── services.js         # Données des 15 services
├── blog.js             # 200+ articles de blog
├── sitemap.xml         # Sitemap XML SEO
├── robots.txt          # Instructions robots
├── manifest.json       # PWA manifest
├── service-worker.js   # Cache offline
├── seo.json            # Configuration SEO
├── .gitignore          # Fichiers ignorés Git
├── README.md           # Cette documentation
└── assets/             # Images et icônes
    ├── favicon-16.png
    ├── favicon-32.png
    ├── icon-192.png
    ├── icon-512.png
    └── og-image.jpg    # Image Open Graph (1200×630)
```

---

## Déploiement GitHub Pages

### Étape 1 – Créer le dépôt GitHub

```bash
# Initialiser le dépôt local
git init
git add .
git commit -m "Initial commit – Nevolyra website"

# Créer un dépôt sur github.com/votre-username/nevolyra
# puis lier :
git remote add origin https://github.com/votre-username/nevolyra.git
git branch -M main
git push -u origin main
```

### Étape 2 – Activer GitHub Pages

1. Aller dans **Settings → Pages**
2. **Source :** Deploy from a branch
3. **Branch :** `main` / `root`
4. Cliquer **Save**

Votre site sera disponible à :  
`https://votre-username.github.io/nevolyra/`

### Étape 3 – Domaine personnalisé (nevolyra.com)

1. Créer un fichier `CNAME` à la racine contenant :
   ```
   nevolyra.com
   ```
2. Chez votre registrar DNS, ajouter :
   ```
   Type A   @   185.199.108.153
   Type A   @   185.199.109.153
   Type A   @   185.199.110.153
   Type A   @   185.199.111.153
   Type CNAME  www  votre-username.github.io
   ```
3. Dans **Settings → Pages → Custom domain** : entrer `nevolyra.com`
4. Cocher **Enforce HTTPS**

### Déploiement continu

Chaque `git push` redéploie automatiquement le site (délai ~1-2 minutes).

```bash
# Workflow habituel
git add .
git commit -m "Ajout article blog : [titre]"
git push
```

---

## Configuration multilingue

### Langues supportées

| Code | Langue   | Direction | Statut     |
|------|----------|-----------|------------|
| `fr` | Français | LTR       | ✅ Principal |
| `ar` | Arabe    | RTL       | ✅ Complet  |
| `en` | Anglais  | LTR       | ✅ Complet  |
| `es` | Espagnol | LTR       | ✅ Complet  |
| `ru` | Russe    | LTR       | ✅ Complet  |
| `zh` | Chinois  | LTR       | ✅ Complet  |

### Ajouter/modifier une traduction

Dans `translations.js`, chaque langue a un objet avec des clés identiques :

```javascript
const translations = {
  fr: {
    nav_home: "Accueil",
    hero_title: "Nevolyra",
    // ... autres clés
  },
  ar: {
    nav_home: "الرئيسية",
    hero_title: "نيفوليرا",
    // ... mêmes clés en arabe
  }
};
```

### URL par langue

La langue est stockée dans `localStorage` et peut être passée en paramètre :
- `https://nevolyra.com/?lang=ar` → Arabe
- `https://nevolyra.com/?lang=en` → Anglais
- `https://nevolyra.com/?lang=es` → Espagnol

### Support RTL (Arabe)

Le site bascule automatiquement en RTL quand la langue arabe est sélectionnée :
```javascript
document.documentElement.dir = t.dir; // "rtl" pour l'arabe
```

---

## Gestion du blog

### Structure d'un article

Dans `blog.js`, chaque article suit ce format :

```javascript
{
  id: "fr-001",           // Identifiant unique
  lang: "fr",             // Langue (fr, ar, en, es, ru, zh)
  slug: "mon-article",    // URL (sans espaces ni accents)
  title: "Titre de l'article",
  excerpt: "Résumé en 1-2 phrases pour les listes.",
  category: "Guide",      // Catégorie pour filtrage
  date: "2025-01-15",     // Date de publication (YYYY-MM-DD)
  keywords: ["mot-clé 1", "mot-clé 2"],
  body: `<h2>Titre de section</h2>
<p>Contenu HTML...</p>
<div class="article-cta">
  <a href="https://wa.me/212602321305" class="btn-whatsapp">📱 WhatsApp</a>
</div>`
}
```

### Ajouter un nouvel article

1. Ouvrir `blog.js`
2. Ajouter un objet dans le tableau `blogArticles`
3. Incrémenter le numéro d'ID (`fr-101`, `ar-051`, etc.)
4. Choisir un slug unique en minuscules avec tirets
5. Ajouter l'URL dans `sitemap.xml`

### Bonnes pratiques pour le contenu SEO

- **Titre :** 50-60 caractères, inclure le mot-clé principal
- **Excerpt :** 140-160 caractères
- **Corps :** Minimum 500 mots pour les articles piliers
- **Structure :** H2 pour les sections principales, H3 pour les sous-sections
- **Liens internes :** Chaque article pointe vers 2-3 autres articles liés
- **CTA WhatsApp :** Inclure au moins un bouton WhatsApp dans chaque article

### Catégories de blog

| Catégorie | Description |
|-----------|-------------|
| Guide | Articles explicatifs généraux |
| Local | Contenu lié à un quartier/zone |
| Services | Pages de services spécifiques |
| Visa | Tout sur les demandes de visa |
| Emploi | CV, lettres, recherche d'emploi |
| Juridique | Contrats, mariage, succession |
| Traduction | Services de traduction |
| Étrangers | Pour les expatriés et touristes |
| Documents | Pièces officielles marocaines |

---

## Gestion des services

### Structure d'un service

Dans `services.js` :

```javascript
{
  id: "mon-service",
  icon: "📄",
  slug: "mon-service",      // URL du service
  titles: {
    fr: "Titre en français",
    ar: "العنوان بالعربية",
    en: "English Title",
    es: "Título en español",
    ru: "Заголовок на русском",
    zh: "中文标题"
  },
  descs: {
    fr: "Description en français...",
    ar: "وصف بالعربية...",
    // ... autres langues
  },
  keywords_fr: ["mot-clé 1", "mot-clé 2", "mot-clé 3"]
}
```

### Ajouter un nouveau service

1. Ouvrir `services.js`
2. Ajouter un objet dans le tableau `services`
3. Fournir les traductions dans les 6 langues
4. Ajouter une entrée dans `sitemap.xml`
5. Créer des articles de blog liés (topic cluster)

---

## Stratégie SEO

### Architecture de contenu (Topic Clusters)

```
PILLAR PAGE (Service)
├── Article cluster 1 (blog)
├── Article cluster 2 (blog)
├── Article cluster 3 (blog)
└── Article cluster 4 (blog)
```

**6 clusters principaux :**
1. Écrivain Public Marrakech → 6 articles
2. Rédaction Administrative → 4 articles
3. Traduction Marrakech → 6 articles
4. Visa Maroc → 4 articles
5. Services Étrangers → 4 articles
6. CV et Emploi → 4 articles

### Mots-clés cibles par priorité

**Priorité haute (concurrence modérée) :**
- `écrivain public Marrakech` ← Terme principal
- `écrivain public Guéliz`
- `كاتب عمومي مراكش`
- `public writer Marrakech`

**Priorité moyenne :**
- `rédaction administrative Marrakech`
- `traduction Marrakech`
- `aide administrative Marrakech`

**Longue traîne (faible concurrence) :**
- `mariage mixte procédures Marrakech`
- `carte de séjour étranger Marrakech`
- `visa Schengen dossier Maroc`

### SEO technique

| Élément | Statut |
|---------|--------|
| Sitemap XML | ✅ `/sitemap.xml` |
| robots.txt | ✅ `/robots.txt` |
| Balises canonical | ✅ |
| hreflang multilingue | ✅ 6 langues |
| Open Graph | ✅ |
| Twitter Cards | ✅ |
| Schema LocalBusiness | ✅ |
| Schema ProfessionalService | ✅ |
| Schema FAQPage | ✅ (à implémenter dans HTML) |
| Balises H1/H2/H3 | ✅ Hiérarchie correcte |
| Meta description | ✅ ≤160 caractères |
| Title tag | ✅ ≤60 caractères |

### Soumission aux moteurs de recherche

```bash
# Google Search Console
# 1. Aller sur search.google.com/search-console
# 2. Ajouter propriété : nevolyra.com
# 3. Vérifier via fichier HTML ou DNS
# 4. Soumettre le sitemap : https://nevolyra.com/sitemap.xml

# Bing Webmaster Tools
# https://www.bing.com/webmasters
# Importer depuis Google Search Console (option disponible)
```

---

## Core Web Vitals

### Objectifs

| Métrique | Objectif | Optimisation |
|----------|----------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Fonts préchargées, CSS inline critique |
| INP (Interaction to Next Paint) | < 200ms | JS léger, événements optimisés |
| CLS (Cumulative Layout Shift) | < 0.1 | Dimensions images explicites |

### Optimisations implémentées

1. **Fonts** : Préconnexion Google Fonts + `display=swap`
2. **CSS** : Minimal, aucune bibliothèque externe
3. **JavaScript** : Chargement différé (`defer`), aucun framework
4. **Images** : Utiliser des formats WebP, attributs `width` et `height`
5. **Service Worker** : Cache des assets statiques
6. **Pas de jQuery** : Vanilla JS uniquement

### Tester les performances

```bash
# PageSpeed Insights
https://pagespeed.web.dev/?url=https://nevolyra.com

# WebPageTest
https://www.webpagetest.org/

# Lighthouse (Chrome DevTools)
# F12 → Lighthouse → Analyze page load
```

---

## WhatsApp Integration

### Points d'intégration WhatsApp

| Emplacement | Type |
|-------------|------|
| Header | Bouton vert permanent |
| Hero section | CTA principal |
| Section "Pourquoi nous" | CTA secondaire |
| Pages de services | CTA et sidebar |
| Articles de blog | Bannière CTA |
| FAQ | Bas de page |
| Page Contact | Carte dédiée |
| Footer | Lien permanent |
| Bouton flottant | Fixe, toutes pages |

### URL WhatsApp

```
https://wa.me/212602321305
```

Avec message pré-rempli :
```javascript
const msg = encodeURIComponent("Bonjour Nevolyra, je cherche...");
const url = `https://wa.me/212602321305?text=${msg}`;
```

---

## Google Business Profile

### Configuration recommandée

1. Créer/revendiquer sur **Google Business Profile**
2. **Nom :** `Nevolyra – Écrivain Public Marrakech Guéliz`
3. **Catégorie principale :** Écrivain public / Conseil administratif
4. **Adresse :** Guéliz, Marrakech, 40000
5. **Téléphone :** +212602321305
6. **Site web :** https://nevolyra.com
7. **Horaires :** Lu-Sa 8h-20h, Di 9h-18h
8. **Description :** Copier la meta description du site
9. **Photos :** Ajouter photos bureau, équipe, documents

### Cohérence NAP (Name, Address, Phone)

S'assurer que les informations suivantes sont **identiques** partout :
- **Nom :** Nevolyra – Écrivain Public Marrakech Guéliz
- **Adresse :** Guéliz, Marrakech 40000, Maroc
- **Téléphone :** +212602321305

---

## Maintenance

### Tâches hebdomadaires

- [ ] Publier 1-2 nouveaux articles de blog
- [ ] Vérifier Google Search Console (erreurs, clics)
- [ ] Répondre aux avis Google

### Tâches mensuelles

- [ ] Mettre à jour `sitemap.xml` avec nouveaux articles
- [ ] Vérifier Core Web Vitals
- [ ] Analyser mots-clés (Google Search Console → Performances)
- [ ] Mettre à jour les témoignages

### Tâches trimestrielles

- [ ] Audit SEO complet
- [ ] Révision/mise à jour des services
- [ ] Vérification des liens internes
- [ ] Mise à jour des métadonnées si nécessaire

### Ajouter un article rapidement

```javascript
// Dans blog.js, ajouter à la fin du tableau :
{
  id: "fr-101",
  lang: "fr",
  slug: "mon-nouvel-article",
  title: "Mon Nouvel Article sur l'Administration au Maroc",
  excerpt: "Résumé en 140-160 caractères pour les résultats de recherche.",
  category: "Guide",
  date: "2025-07-01",
  keywords: ["mot-clé principal Marrakech", "mot-clé secondaire"],
  body: `
    <h2>Section principale</h2>
    <p>Contenu de l'article...</p>
    <h3>Sous-section</h3>
    <p>Détails...</p>
    <div class="article-cta">
      <p>Besoin d'aide ? Contactez-nous !</p>
      <a href="https://wa.me/212602321305" class="btn-whatsapp">📱 WhatsApp</a>
    </div>
  `
}
```

Puis ajouter dans `sitemap.xml` :
```xml
<url>
  <loc>https://nevolyra.com/#blog/mon-nouvel-article</loc>
  <lastmod>2025-07-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## Licence et contact

**© 2025 Nevolyra.com – Tous droits réservés**

📱 WhatsApp : [+212602321305](https://wa.me/212602321305)  
✉️ Email : salatrir@gmail.com  
📍 Guéliz, Marrakech, Maroc

---

*Ce site est optimisé selon les bonnes pratiques SEO de Google (Search Essentials). Aucune garantie de classement en première page n'est faite ou implicite.*
