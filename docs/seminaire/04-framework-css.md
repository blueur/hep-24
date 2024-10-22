# Framework CSS

:::note[Objectifs]

Utiliser un framework CSS.

- Estimer son temps de travail
- Utiliser l'outil de développement de son navigateur
- Utiliser le framework CSS Bootstrap

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/KYG0YLFX
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

## Visual Studio Code

- Installer l'extension [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) :
  - <i className="ph ph-squares-four"></i> `Extensions` (dans la barre latérale) > Rechercher `Prettier` > Installer
- Configurer Prettier comme formateur par défaut :
  - <i className="ph ph-gear"></i> (en bas à gauche) > `Settings` > Rechercher `Default Formatter` > Choisir `Prettier`

:::tip[Configuration]

Pour faciliter le développement :

- Sauvegarde automatique
  - <i className="ph ph-gear"></i> (en bas à gauche) > `Settings` > Rechercher `Auto Save` > Choisir `afterDelay`
- Formatage automatique du code
  - <i className="ph ph-gear"></i> (en bas à gauche) > `Settings` > Rechercher `Format On Save` > Activer

:::

:::tip[Raccourcis]

- Commenter/décommenter du code :
  - Sélectionner le code à commenter
  - <kbd>Cmd</kbd> + <kbd>/</kbd> (macOS) ou <kbd>Ctrl</kbd> + <kbd>/</kbd> (Windows)
  - Répéter pour décommenter
- Sélectionner plusieurs occurrences d'un texte :
  - Sélectionner du texte
  - <kbd>Cmd</kbd> + <kbd>D</kbd> (macOS) ou <kbd>Ctrl</kbd> + <kbd>D</kbd> (Windows)
  - Répéter pour sélectionner les occurrences suivantes
  - Vous pouvez maintenant modifier toutes les occurrences en même temps
- Rechercher et remplacer :
  - <kbd>Cmd</kbd> + <kbd>F</kbd> (macOS) ou <kbd>Ctrl</kbd> + <kbd>F</kbd> (Windows)
    - Ajouter <kbd>Shift</kbd> pour rechercher dans tout le projet
    - Cliquer sur <i className="ph ph-caret-right"></i> pour remplacer

:::

:::tip[Le raccourci unique]

Un raccourci pour les gouverner tous. Un raccourci pour les trouver.

- macOS : <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Windows : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Permet de rechercher des commandes (ouvrir le rendu Markdown, formater le document, ouvrir le terminal, etc.)
- Sans le <kbd>Shift</kbd> pour rechercher des fichiers (ou sans le `>`)

:::

## Outils de développement

- Découvrir les outils de développement. Plusieurs façons d'y accéder :
  - Aller sur une page web.
  - Clic-droit > `Inspecter`
  - <kbd>F12</kbd>
- Se documenter sur [L'inspecteur : explorateur du DOM et éditeur de CSS](https://developer.mozilla.org/fr/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#linspecteur_explorateur_du_dom_et_%C3%A9diteur_de_css)
- Utiliser les outils de développement pour :
  - Observer les styles appliqués à un élément
    - Clic-droit sur un élément > `Inspecter` > Sous-onglet `Styles`
  - Modifier le style d'un élément :
    - Clic-droit sur un élément > `Inspecter` > Changer la couleur de fond en rouge par exemple
  - Observer les éléments de la page :
    - Survoler les éléments HTML dans le panneau `Inspecteur`/`Éléments` pour les mettre en surbrillance
  - Modifier le contenu d'un élément :
    - Supprimer un élément HTML de la page
  - Tester le responsive design :
    - <i className="ph ph-devices"></i> (en haut à droite de la fenêtre des outils de développement) > Choisir un appareil ou personnaliser les dimensions
      - Comment réagit la page sur un écran plus petit ?

## Grille Bootstrap

- Lire la documentation de [Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/).
- Faire les exercices sur [Grille Bootstrap](https://smnarnold.com/exercices/bootstrap/grille-bootstrap).
  - [CodePen](https://codepen.io/) est un IDE en ligne pour écrire du code HTML, CSS et JavaScript.
  - Faire au moins deux étapes.

### Étape 1

<details>
<summary>Indice 1</summary>

Tout mettre dans un `container`.

<details>
<summary>Indice 2</summary>

Utiliser des `row` et des `col`.

<details>
<summary>Solution</summary>

```html
<div class="container">
  <div class="row">
    <div class="col">
      <div class="block red"></div>
    </div>
    <div class="col">
      <div class="block blue"></div>
    </div>
    <div class="col">
      <div class="block green"></div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="block yellow"></div>
    </div>
    <div class="col">
      <div class="block purple"></div>
    </div>
    <div class="col">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>
</details>
</details>

### Étape 2

<details>
<summary>Indice 1</summary>

Utiliser les `col-xl-*` avec les classes `col-*`.

<details>
<summary>Indice 2</summary>

Utiliser qu'une seule `row`.

<details>
<summary>Indice 3</summary>

Les breakpoints s'appliquent à partir (plus grand) de la largeur spécifiée.

<details>
<summary>Solution</summary>

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="block red"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block blue"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block green"></div>
    </div>
    <div class="col-12 col-xl-4">
      <div class="block yellow"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="block purple"></div>
    </div>
    <div class="col-12 col-xl-6">
      <div class="block teal"></div>
    </div>
  </div>
</div>
```

</details>
</details>
</details>
</details>

### Étape 5

Utiliser [Horizontal alignment](https://getbootstrap.com/docs/5.3/layout/columns/#horizontal-alignment)

## Aventure

- Copier votre aventure de la semaine passée dans le répertoire Git.
- Utiliser [Bootstrap](https://getbootstrap.com/) pour améliorer le style de votre aventure.
  - Utiliser un [CDN](https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr) pour inclure Bootstrap dans votre projet.
    - Un CDN est un réseau de serveurs qui stockent des fichiers (bibliothèques, frameworks, etc.) pour les rendre accessibles à tous. Votre page HTML va donc chercher ces fichiers sur un serveur distant.
    - Ajouter les lignes suivantes dans le `head` de vos fichiers HTML :
      ```html
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
      ```
- Le résultat final devrait ressembler à [cette page](https://web.blueur.com/aventure-bootstrap/) ([code](https://github.com/blueur/web/tree/main/aventure-bootstrap)).
  - Renommer `index.html` en `aventure.html`.
    - S'inspirer du **CDN Starter** dans les [exemples](https://getbootstrap.com/docs/5.3/examples/).
      - Regarder le code source de la page pour voir comment elle est construite : de manière statique sur [GitHub](https://github.com/twbs/examples/tree/main/starter/) ou interactive sur [StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/starter?file=index.html).
    - Ajouter une [NavBar](https://getbootstrap.com/docs/5.3/components/navbar/) qui contient :
      - Un logo (par exemple [Bootstrap](https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg))
      - Le nom de votre aventure
      - Un lien vers la page d'accueil
      - Un lien vers votre aventure
      - Un lien vers une page de contact (`contact.html`)
    - Mettre le contenu dans un [Container](https://getbootstrap.com/docs/5.3/layout/containers/) dans une [Grid](https://getbootstrap.com/docs/5.3/layout/grid/) et dans une [Card](https://getbootstrap.com/docs/5.3/components/card/).
    - Mettre les choix dans un [Button group](https://getbootstrap.com/docs/5.3/components/button-group/)
  - Créer un nouveau fichier `index.html` pour votre votre page d'accueil.
    - Contient un titre, un [lorem ipsum](https://fr.lipsum.com/) et deux boutons.
    - Utiliser [Text](https://getbootstrap.com/docs/5.3/utilities/text/) pour aligner le titre au centre.
    - Utiliser [Flex](https://getbootstrap.com/docs/5.3/utilities/flex/) pour aligner les boutons au centre.
  - Créer le fichier `contact.html` pour la page de contact.
    - Contient un formulaire de contact.
      - Utiliser [Form](https://getbootstrap.com/docs/5.3/forms/overview/).
      - Contient au moins un [Select](https://getbootstrap.com/docs/5.3/forms/select/), un [Input](https://getbootstrap.com/docs/5.3/forms/form-control/), un [Textarea](https://getbootstrap.com/docs/5.3/forms/textarea/), un [Checkbox](https://getbootstrap.com/docs/5.3/forms/checks-radios/), un [Input group](https://getbootstrap.com/docs/5.3/forms/input-group/) et un [Button](https://getbootstrap.com/docs/5.3/components/buttons/).
      - Configurer les colonnes pour adapter le formulaire selon la largeur de l'écran.
      - Utiliser des [Floating labels](https://getbootstrap.com/docs/5.3/forms/floating-labels/).
      - Ajouter des [Validation](https://getbootstrap.com/docs/5.3/forms/validation/).
- Personnaliser les [variables CSS](https://getbootstrap.com/docs/5.3/customize/css-variables/)
  - Créer un fichier `custom.css` pour ajouter des règles CSS personnalisées.
    ```css
    :root {
      --bs-primary: #0d6efd;
      --bs-secondary: #6c757d;
      --bs-body-color: #212529;
    }
    ```
  - Ajouter le fichier `custom.css` après le fichier Bootstrap dans le `head` de vos fichiers HTML.
    ```html
    <link href="custom.css" rel="stylesheet" />
    ```
  - Modifier les couleurs (avec `color picker` sur Google ou sur [Codes Couleur HTML](https://htmlcolorcodes.com/fr/) par exemple).
  - Liste complète des [variables](https://getbootstrap.com/docs/5.3/customize/css-variables/) disponibles.
- Publier votre aventure sur GitHub Pages.
  - Créer un fichier vide `.nojekyll` à la racine du dépôt pour [désactiver Jekyll](https://docs.github.com/fr/pages/getting-started-with-github-pages/about-github-pages#static-site-generators).
  - Copier le lien de votre aventure dans le fichier `report.md`.

:::info

Adapter au moins complètement une page avec Bootstrap ainsi que les pages d'accueil et de contact.

:::

## Gitignore

Créer un fichier `.gitignore` dans le dépôt Git pour [ignorer les fichiers et dossiers inutiles](https://docs.github.com/fr/get-started/getting-started-with-git/ignoring-files) :

```gitignore title=".gitignore"
__pycache__/
.pytest_cache/

.DS_Store
```

## Test

Pour tester votre projet, ajouter un fichier `test_web.py` contenant :

```python title="test_web.py"
from glob import glob
from os import path
from subprocess import check_output


def test_index():
    assert path.isfile("index.html"), "Il faut le fichier 'index.html'."


def test_html():
    for file in glob("**/*.html", recursive=True):
        output = check_output(
            [
                "curl",
                "-s",
                "-H",
                "Content-Type: text/html",
                "--data-binary",
                f"@{file}",
                "https://validator.w3.org/nu/?out=gnu&level=error",
            ],
        ).decode()
        assert "" == output, f"{file} {output}"


def test_css():
    count: int = 0
    for file in glob("**/*.css", recursive=True):
        count += 1
        output = check_output(
            [
                "curl",
                "-s",
                "-H",
                "Content-Type: text/css",
                "--data-binary",
                f"@{file}",
                "https://validator.w3.org/nu/?out=gnu",
            ],
        ).decode()
        assert "" == output, f"{file} {output}"


def test_filename():
    for file in glob("**/*", recursive=True):
        assert match(
            "^[a-z0-9\\\.\-_/]+$", file
        ), f"{file} ne doit contenir que des lettres minuscules, chiffres, tirets ou underscores. "
```

Lancer les tests avec `pytest --tb=no -vv`.
