# Générateur de site statique

:::note[Objectifs]

Utiliser un générateur de site statique.

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/MEY-lbro
  - `./report.md` : Rapport individuel en Markdown.
- Délai : 1 semaine

## Eleventy

Commencer par cloner le dépôt Git de ce séminaire et ouvrir le dossier dans Visual Studio Code.

Créer un fichier [`.gitignore`](https://docs.github.com/fr/get-started/getting-started-with-git/ignoring-files) avec le contenu suivant :

```gitignore title=".gitignore"
node_modules/
_site/
```

Initialiser un projet npm : `npm init`

- package name: choisir un nom pour votre aventure (en [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case))
- version: 0.0.0
- description: laisser vide (par défaut)
- entry point: `index.js` (par défaut)
- test command: laisser vide (par défaut)
- git repository: laisser vide (par défaut)
- keywords: laisser vide (par défaut)
- author: votre nom
- license: GPL-3.0

Vérifier le contenu du fichier `package.json` qui a été créé.

Utiliser ESM (une version plus moderne de JavaScript) : `npm pkg set type="module"`

Installer Eleventy : `npm install @11ty/eleventy`

### Template de base

Créer un fichier `index.md` avec le contenu suivant :

```markdown title="index.md"
---
layout: base.njk
title: Accueil
---

# {{ title }}

Bienvenue dans l'aventure !
```

Créer un dossier `_includes` et un fichier `base.njk` avec le contenu suivant :

```html title="_includes/base.njk"
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
```

Voir le site en local : `npx @11ty/eleventy --serve` (le lien sera affiché dans la console)

- Voir les fichiers générés dans le dossier `_site`
- <kbd>Ctrl</kbd> + <kbd>C</kbd> pour arrêter le serveur
  Ajouter les scripts suivants dans le fichier `package.json` (remplacer le script `test` existant) :

```json title="package.json"
{
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  }
}
```

- Tester les scripts : `npm run build` et `npm start`

### Génération de pages

Créer un dossier `_data` et un fichier `aventure.json` avec le contenu suivant :

```json title="_data/aventure.json"
[
  {
    "id": "rangement",
    "name": "Rangement",
    "description": "Vous décidez de faire du rangement dans votre maison. Par où commencer ?",
    "options": [
      {
        "text": "Cave",
        "next": "cave"
      },
      {
        "text": "Grenier",
        "next": "grenier"
      }
    ]
  },
  {
    "id": "cave",
    "name": "Cave",
    "description": "Vous trouvez une vieille boîte en carton.",
    "options": [
      {
        "text": "Ouvrir la boîte",
        "next": "tresor"
      },
      {
        "text": "Refermer la boîte",
        "next": "rangement"
      }
    ]
  },
  {
    "id": "grenier",
    "name": "Grenier",
    "description": "Vous trouvez une vieille malle en bois.",
    "options": [
      {
        "text": "Ouvrir la malle",
        "next": "tresor"
      },
      {
        "text": "Refermer la malle",
        "next": "rangement"
      }
    ]
  },
  {
    "id": "tresor",
    "name": "Trésor",
    "description": "Vous trouvez un trésor !",
    "options": [
      {
        "text": "Recommencer",
        "next": "rangement"
      }
    ]
  }
]
```

Créer un fichier `aventure-pages.html` avec le contenu suivant :

```html title="aventure-pages.html"
---
pagination:
  data: aventure
  size: 1
  alias: aventure
permalink: "aventure/{{ aventure.id }}/"

layout: base.njk
eleventyComputed:
  title: "{{ aventure.name }}"
---

<h1>{{ aventure.name }}</h1>
<p>{{ aventure.description }}</p>
<ul>
  {% for option in aventure.options %}
  <li><a href="../{{ option.next }}/">{{ option.text }}</a></li>
  {% endfor %}
</ul>
```

Observer le résultat sur http://localhost:8080/aventure/rangement/

- On vient de séparer les données (`_data/aventure.json`) de la présentation (`aventure-pages.html`).
  - C'est une application du design pattern [Modèle-Vue-Contrôleur](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) (MVC), où le modèle est représenté par les données, la vue par le fichier HTML et le contrôleur est géré par Eleventy.
  - On peut maintenant facilement ajouter ou modifier les données sans toucher à la présentation.
- Remarquer les éléments suivants :
  - Les données sont en [JSON (JavaScript Object Notation)](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON) avec la structure suivante :
    - Une liste d'objets (représentant une étape de l'aventure) avec les propriétés suivantes :
      - `id` : identifiant unique (en kebab-case)
      - `name` : nom affiché
      - `description` : description de l'étape
      - `options` : liste d'options avec les propriétés suivantes :
        - `text` : texte affiché
        - `next` : identifiant de l'étape suivante
  - Les pages sont générées à partir des données grâce à la [pagination d'Eleventy](https://www.11ty.dev/docs/pagination/) (dans `aventure-pages.html`).
    - C'est une page html qui sera crée pour chaque élément de la liste `aventure`.
      - `data` : nom du fichier de données dans le dossier `_data` (sans l'extension)
      - `size` : nombre d'éléments par page
      - `alias` : nom de la variable utilisée dans le template
      - `permalink` : URL de la page générée
      - `layout` : réutilisation du layout `base.njk`
      - `eleventyComputed` : variables calculées pour le template
        - `title` : titre "dynamique" de la page
  - Les données sont accessibles dans le template grâce à la variable `aventure`.
    - On peut alors afficher les propriétés de l'objet `aventure` (comme `name`, `description` et `options`) avec la syntaxe `{{ variable }}`.
    - Pour les listes, on utilise une boucle `for` pour afficher chaque élément : `{% for item in list %}`.
      - Ne pas oublier de fermer la boucle avec `{% endfor %}`.
    - [Nunjucks](https://mozilla.github.io/nunjucks/fr/templating.html) est le moteur de template utilisé par Eleventy.
      - Il permet d'ajouter des variables, des boucles, des conditions, etc. dans les fichiers HTML.

Ajouter un lien vers l'aventure dans le fichier `index.md` :

```markdown
[Commencer](aventure/rangement/)
```

Voici le résultat que vous devriez obtenir : [code](https://github.com/blueur/aventure-eleventy), [site](https://blueur.github.io/aventure-eleventy/)

Créer un commit et pousser les changements sur GitHub.

### Déploiement

Afin de pouvoir déployer le site sur GitHub Pages, il faudra d'abord générer les fichiers. On va automatiser ce processus avec [GitHub Actions](https://github.com/features/actions).

Dans le dépôt Git, créer un fichier `.github/workflows/deploy.yml` (avec les dossiers mentionnés) avec le contenu suivant :

```yaml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  pages: write
  id-token: write

jobs:
  deploy:
    name: Build and deploy to GitHub Pages
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build
      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

GitHub Actions va automatiquement générer le site et le déployer sur GitHub Pages à chaque push sur la branche `main`.

Configurer GitHub Pages dans les paramètres du dépôt :

- Sur GitHub, dans le dépôt, aller dans <i className="ph ph-gear"></i> `Settings` > `Pages` > Sous `Source`, sélectionner `GitHub Actions`.

Ajouter le lien du site dans le fichier `report.md`.

### Personnalisation

- Ajouter Bootstrap en CDN dans le fichier `base.njk` et adapter le style des pages.
- Ajouter une images pour illustrer une étape de l'aventure.
  - Créer un dossier `images` à la racine du projet et y ajouter une image.
  - Les images doivent être déclarées dans le fichier `aventure.json` et affichées dans les pages.
    - Ajouter une propriété `image` dans les données de l'aventure.
    - Ajouter une balise `<img>` dans le template pour afficher l'image.
  - Pas toutes les étapes nécessitent une image, utiliser les [conditions](https://mozilla.github.io/nunjucks/fr/templating.html#if) pour afficher l'image uniquement si elle existe.
- Adapter l'aventure selon le votre. Vous devriez obtenir le même résultat qu'au séminaire précédent.
  - Pour ajouter du code CSS personnalisé : https://www.11ty.dev/docs/assets/
    - Créer un fichier `eleventy.config.js`
    - `addPassthroughCopy` permet de copier des fichiers ou dossiers dans le dossier `_site`
    - Dans l'exemple, on a nommé le fichier `bundle.css` pour y mettre le code CSS.

## Références

- https://www.11ty.dev/docs/
  - https://www.11ty.dev/docs/layouts/
  - https://www.11ty.dev/docs/pages-from-data/
