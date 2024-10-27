# Générateur de site statique

:::note[Objectifs]

Utiliser un générateur de site statique.

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/MEY-lbro
  - `./report.md` : Rapport individuel en Markdown.
- Délai : 1 semaine

## Mise en place

- Cloner le nouveau dépôt Git dans le répertoire du cours.
- Ouvrir le répertoire du dépôt Git dans Visual Studio Code.

## Estimation

- Estimer le temps nécessaire pour réaliser ce travail.
  - Découper le travail en tâches pour faciliter l'estimation.
- Une fois terminé, comparer le temps estimé avec le temps réellement passé.

| Tâche      | Temps estimé | Temps passé | Commentaire |
| ---------- | ------------ | ----------- | ----------- |
| Estimation | 10m          | 15m         | ...         |
| ...        | ...          | ...         | ...         |
| Total      | 2h           | 1h30        | ...         |

## Eleventy

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

Créer un fichier `aventure-pages.html` à la racine avec le contenu suivant :

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

Configurer GitHub Pages dans les paramètres du dépôt :

- Sur GitHub, dans le dépôt, aller dans <i className="ph ph-gear"></i> `Settings` > `Pages` > Sous `Build and deployment` puis `Source`, sélectionner `GitHub Actions`.
  - [Configuration d’une source de publication pour votre site GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

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

Ajouter le lien du site dans le fichier `report.md`.

:::warning[Liens]

Noter que le site sur GitHub Pages est accessible à l'adresse `https://hepl-bs21inf5.github.io/sem05-ssg-{pseudo]/`, le projet n'est donc plus à la racine de l'URL comme en local.

Utiliser toujours des chemins relatifs pour les liens et les ressources. Une solution alternative serait d'utiliser un [plugin](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix).

:::

### Personnalisation

- Ajouter Bootstrap en CDN dans le fichier `base.njk` et adapter le style des pages.
- Ajouter une images pour illustrer une étape de l'aventure.
  - Créer un dossier `images` à la racine du projet et y ajouter une image.
  - Créer un fichier `eleventy.config.js` à la racine du projet avec le contenu suivant :
    ```js title="eleventy.config.js"
    export default function (eleventyConfig) {
      eleventyConfig.addPassthroughCopy("images");
    }
    ```
    - Cette configuration permet de copier les fichiers du dossier `images` dans le dossier `_site`.
  - Les images doivent être déclarées dans le fichier `aventure.json` et affichées dans les pages.
    - Ajouter une propriété `image` dans les données de l'aventure.
      - Par exemple : `"image": "../../images/tresor.jpg"` juste après la propriété `description`.
    - Ajouter une balise `<img>` dans le template pour afficher l'image.
      - Par exemple : `<img src="{{ aventure.image }}" alt="{{ aventure.name }}" />`.
    - Comme toutes les images se trouvent dans le dossier `images`, mettre uniquement le nom du fichier dans la propriété `image` et adapter le chemin dans la balise `<img>`.
  - Pas toutes les étapes nécessitent une image, utiliser les [conditions](https://mozilla.github.io/nunjucks/fr/templating.html#if) pour afficher l'image uniquement si elle existe.
- Adapter l'aventure selon le votre. Vous devriez obtenir le même résultat qu'au séminaire précédent.
  - Pour ajouter du code CSS personnalisé, créer un fichier `styles.css` à la racine du projet et l'ajouter dans le fichier `base.njk`.
    - Ne pas oubliez de copier le fichier CSS dans le dossier `_site` :
      ```js title="eleventy.config.js"
      export default function (eleventyConfig) {
        eleventyConfig.addPassthroughCopy("images");
        eleventyConfig.addPassthroughCopy("styles.css");
      }
      ```

## Références

- https://www.11ty.dev/docs/
  - https://www.11ty.dev/docs/layouts/
  - https://www.11ty.dev/docs/pages-from-data/
