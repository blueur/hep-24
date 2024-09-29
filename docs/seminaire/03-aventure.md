# Aventure

:::note[Objectifs]

Créer un jeu en HTML/CSS.

- Estimer son temps de travail

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/qLd4L0WG
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

## Une aventure

Le but est de créer un jeu d'aventure en HTML et CSS : à chaque étape, le joueur doit choisir entre plusieurs options qui le mèneront à une autre étape.

Une histoire peut être résumée par un organigramme tel que :

```mermaid
flowchart TD
  Rangement --> |cave| Cave
  Rangement --> |grenier| Grenier
  Cave --> |dépoussiérer| Passage
  Cave --> |trier| Trésor
  Grenier --> |trier| Trésor
  Grenier --> |cartons| Souvenirs
  Grenier --> |livres| Lecture
```

### HTML

- Créer un fichier `index.html` dans le dossier `sem03-aventure-{pseudo}` :
  ```html title="index.html" showLineNumbers
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Rangement</h1>
      <p>
        Vous décidez de faire du rangement dans votre maison. Par où commencer ?
      </p>
      <ul>
        <li>Cave</li>
        <li>Grenier</li>
      </ul>
    </body>
  </html>
  ```
- Créer un fichier `cave.html` dans le dossier `web-aventure` :
  ```html title="cave.html" showLineNumbers
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Cave</h1>
      <p>Vous êtes à la cave. Que voulez-vous faire ?</p>
      <ul>
        <li>Dépoussiérer</li>
        <li>Trier les affaires</li>
      </ul>
    </body>
  </html>
  ```
- Lorsqu'on clique sur la cave dans `index.html`, on aimerait être redirigé vers `cave.html` :
  ```html title="index.html"
  <li><a href="cave.html">Cave</a></li>
  ```
- De manière similaire, lorsqu'on choisit de dépoussiérer la cave, on aimerait être redirigé vers `passage.html` dont le contenu est :
  ```html title="passage.html"
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aventure</title>
    </head>
    <body>
      <h1>Passage</h1>
      <p>
        En dépoussiérant, vous découvrez une petite trappe. En l'ouvrant, vous
        trouvez un passage secret qui vous mènera vers d'autres aventures...
      </p>
    </body>
  </html>
  ```
- Créer les fichiers `tresor.html`, `grenier.html`, `souvenirs.html` et `lecture.html` avec les contenus suivants :
  - `tresor.html` :
    - Vous tombez sur un coffre rempli de pièces d'or. Faites en bon usage !
  - `grenier.html` :
    - Vous êtes dans le grenier. Que voulez-vous faire ?
      - Trier les affaires
      - Trier les cartons
      - Trier les livres
  - `souvenirs.html` :
    - Vous retrouvez plein de souvenirs d'enfance !
  - `lecture.html` :
    - Vous vous plongez dans la lecture d'un vieux livre.
- À ce stade, le jeu doit être [jouable](https://web.blueur.com/aventure-html/) et l'arborescence du projet doit ressembler à ceci :
  ```txt
  sem03-aventure-{pseudo}/
  ├── cave.html
  ├── grenier.html
  ├── index.html
  ├── lecture.html
  ├── souvenirs.html
  └── tresor.html
  ```

### CSS

- Créer un fichier `styles.css` dans le dossier `web-aventure` :
  ```css title="styles.css"
  body {
    background-color: #fdf6e3;
    color: #657b83;
  }
  p {
    font-size: 20px;
  }
  ```
- Appliquer le style à tous les fichiers HTML en ajoutant la ligne suivante dans le `head` :
  ```html
  <link rel="stylesheet" href="styles.css" />
  ```
- Appliquer les changements suivants dans le style (rechercher avec un moteur de recherche comment faire) :
  - Couleur des titres : #268bd2 (bleu)
  - Couleur des liens : #dc322f (rouge)
  - Taille de police des liens : 18 pixels
  - Couleur des liens au survol : #6c71c4 (violet)
  - Enlever le soulignement des liens
  - Changer le symbole de la liste à puce en carré
  - Changer la police de caractères de toute la page ([indice](https://www.w3schools.com/cssref/css_websafe_fonts.php))
- Créer un commit avec le message `ajouter exemple`
- Lancer les tests pour vérifier que tout fonctionne correctement.
  - Installer [Pytest](https://docs.pytest.org/en/stable/) : `pip install -U pytest`
  - Lancer les tests : `pytest --tb=no -vv`
- Pousser les commits sur le dépôt Git distant.

## Votre aventure

- Commencer par dessiner l'organigramme de votre aventure avec environ 7 étapes.
  - Ajouter l'organigramme dans le rapport.
- Remplacer l'exemple par votre aventure.
  - Modifier et créer les fichiers HTML et CSS nécessaires pour votre aventure.
- Dans le rapport, expliquer les difficultés rencontrées et comment vous les avez résolues.
- Ne pas oublier de créer des commits et de les pousser sur le dépôt Git distant.
- Pour publier votre aventure, vous pouvez utiliser [GitHub Pages](https://pages.github.com/).
  - Sur GitHub, dans le dépôt, aller dans `Settings` > `Pages` > Sous `Branch`, sélectionner `main` et `/ (root)`, puis cliquer sur `Save`.
  - Le site est maintenant accessible à l'adresse `https://hepl-bs21inf5.github.io/sem03-aventure-{pseudo}/`.
    - Revenir dans `Code` > Cliquer sur <i class="ph ph-gear"></i> à côté de `About` > Sous `Website`, cocher `Use your GitHub Pages website` pour voir votre lien.
  - Ajouter le lien dans le rapport.
