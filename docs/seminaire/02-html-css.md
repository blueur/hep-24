# 02 HTML & CSS

:::note[Objectifs]

Créer un site avec HTML et CSS.

- Estimer son temps de travail

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/iYqhqsCN
  - `./report.md` : Rapport individuel en Markdown.
- Délai : 1 semaine

## Mise en place

- Cloner le nouveau dépôt GitHub Classroom de cette semaine à côté de celui de la semaine précédente.
  - `git clone` depuis le répertoire du cours.
  - ```txt {3}
    bs21inf5/
    ├── sem01-outils-{pseudo}/
    └── sem02-html-css-{pseudo}/
    ```
- Ouvrir le **dossier** du dépôt dans **Visual Studio Code**.
  - Avec le terminal : `code sem02-html-css-{pseudo}`
  - Avec Visual Studio Code : `Fichier` > `Ouvrir dossier` > sélectionner le dossier du dépôt

## Estimation

- Estimer le temps nécessaire pour réaliser ce travail dans le rapport.
  - Découper le travail en tâches pour faciliter l'estimation.
- Une fois terminé, comparer le temps estimé avec le temps réellement passé.
- Le but n'est pas d'estimer correctement, mais de comprendre comment améliorer ses estimations.

| Tâche      | Temps estimé | Temps passé | Commentaire |
| ---------- | ------------ | ----------- | ----------- |
| Estimation | 10m          | 15m         | ...         |
| ...        | ...          | ...         | ...         |
| Total      | 2h           | 1h30        | ...         |

## HTML

- Créer un dossier `web-html` dans votre répertoire du dépôt Git.
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
- Ouvrir le fichier `index.html` avec [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - Clic droit sur le fichier `index.html` > Ouvrir avec Live Server
  - Ou cliquer sur `Go Live` en bas à droite dans Visual Studio Code qui va ouvrir le fichier courant
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
- Commenter le code HTML
  - Ajouter quelques commentaires pour expliquer ce qui a été fait
- Formatter le fichier avec [Visual Studio Code](https://code.visualstudio.com/docs/editor/codebasics#_formatting)
  - Windows : <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>
  - macOS : <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>
- Vérifier que le code HTML est valide avec le [validateur W3C](https://validator.w3.org/)
- Créer un commit avec le message `ajouter web-html`

## CSS

- Créer un dossier `web-css` dans le répertoire du dépôt Git.
  ```txt {2}
  sem02-html-css-{pseudo}/
  ├── web-css/
  └── web-html/
  ```
- Suivre les instructions dans [Démarrer avec CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/Getting_started)
- Créer un commit avec le message `ajouter web-css`
- Créer un dossier `test-css` dans le répertoire du dépôt Git.
  ```txt {2}
  sem02-html-css-{pseudo}/
  ├── test-css/
  ├── web-css/
  └── web-html/
  ```
- Suivre les instructions dans [Mettre en oeuvre vos connaissances](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/Styling_a_biography_page)
- Créer un commit avec le message `ajouter test-css`.
- Ne pas oublier de pousser tous les commits sur le dépôt Git distant.

:::warning[Git]

Ne pas oublier de pousser tous les commits sur le dépôt Git distant (vérifier sur GitHub).

:::
