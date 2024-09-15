# HTML & CSS

:::note[Objectifs]

Créer un site avec HTML et CSS.

- Estimer son temps de travail

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/iYqhqsCN
  - `./report.md` : Rapport individuel en Markdown.
- Délai : 1 semaine

## Estimation

- Estimer le temps nécessaire pour réaliser ce travail.
  - Découper le travail en tâches pour faciliter l'estimation.
- Une fois terminé, comparer le temps estimé avec le temps réellement passé.
- Ajouter le tableau dans le rapport.
- Le but n'est pas d'estimer correctement, mais de comprendre comment améliorer ses estimations.

| Tâche      | Temps estimé | Temps passé | Commentaire |
| ---------- | ------------ | ----------- | ----------- |
| Estimation | 10m          | 15m         | ...         |
| ...        | ...          | ...         | ...         |
| Total      | 2h           | 1h30        | ...         |

## GitHub Classroom

- Clonez le dépôt GitHub Classroom de cette semaine à côté de celui de la semaine précédente.

## HTML

- Créer un dossier `web-html` dans votre répertoire du dépôt.
- Créer un fichier `index.html` avec le contenu suivant :
  ```html title="index.html"
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Page Web</title>
    </head>
    <body>
      <h1>Titre de la page</h1>
      <p>Contenu de la page</p>
    </body>
  </html>
  ```
- l'arborescence du projet doit ressembler à ceci :
  ```txt {2-3}
  sem02-html-css-{pseudo}/
  └── web-html/
     └── index.html
  ```
- Ouvrir le fichier `index.html` avec **Live Server**
  - Clic droit sur le fichier `index.html` > Ouvrir avec Live Server
  - Ou cliquer sur `Go Live` en bas à droite dans Visual Studio Code
- Modifier la page Web et observer les changements
  - Modifier le titre de l'onglet (`title`)
  - Modifier le titre de la page (`h1`)
  - Modifier le contenu de la page (`p`)
- Ajouter une image à la page Web
  - Créer un dossier `images` dans le dossier `web-html`
  - Télécharger sur Internet une image dans le dossier `images`
  - Afficher l'image dans la page Web avec la balise [`<img>`](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#images)
- [Baliser du texte](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#baliser_du_texte)
  - Ajouter deux niveaux de titres
  - Ajouter des paragraphes
  - Créer une liste ordonnée et non ordonnée
- [Ajouter des liens](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics#liens)
- Créer un commit avec le message `ajouter web-html`

## CSS

- Créer un dossier `web-css` dans le répertoire du dépôt.
  ```txt {2}
  sem02-html-css-{pseudo}/
  ├── web-css/
  └── web-html/
  ```
- [Démarrer avec CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/Getting_started)
- Créer un commit avec le message `ajouter web-css`
- Créer un dossier `test-css` dans le répertoire du dépôt.
  ```txt {2}
  sem02-html-css-{pseudo}/
  ├── test-css/
  ├── web-css/
  └── web-html/
  ```
- [Mettre en oeuvre vos connaissances](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/Styling_a_biography_page)
- Créer un commit avec le message `ajouter test-css`.
- Ne pas oublier de pousser les commits sur le dépôt distant.
