# Framework CSS

:::note[Objectifs]

Utiliser un framework CSS.

- Estimer son temps de travail

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/KYG0YLFX
  - `./report.md` : Rapport individuel en Markdown.
- Délai : 1 semaine

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

:::tip[Le raccourci unique]

Un raccourci pour les gouverner tous. Un raccourci pour les trouver.

- macOS : <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Windows : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
- Permet de rechercher des commandes (ouvrir le rendu Markdown, formater le document, ouvrir le terminal, etc.)
- Sans le <kbd>Shift</kbd> pour rechercher des fichiers (ou sans le `>`)

:::

## Outils de développement

- Découvrir les outils de développement. Plusieurs façons d'y accéder :
  - Clic-droit > `Inspecter`
  - <kbd>F12</kbd>
- Se documenter sur [L'inspecteur : explorateur du DOM et éditeur de CSS](https://developer.mozilla.org/fr/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#linspecteur_explorateur_du_dom_et_%C3%A9diteur_de_css)
- Utiliser les outils de développement pour :
  - Observer les styles appliqués à un élément
    - Clic-droit sur un élément > `Inspecter` > Onglet `Styles`
  - Modifier le style d'un élément :
    - Clic-droit sur un élément > `Inspecter` > Changer la couleur de fond en rouge par exemple
  - Observer les éléments de la page :
    - Survoler les éléments HTML dans le panneau `Inspector` pour les mettre en surbrillance
  - Modifier le contenu d'un élément :
    - Supprimer un élément HTML de la page
  - Tester le responsive design :
    - <i className="ph ph-devices"></i> (en haut à droite de la fenêtre des outils de développement) > Choisir un appareil ou personnaliser les dimensions
      - Comment réagit la page sur un écran plus petit ?

## Grille Bootstrap

- Lire la documentation de [Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/)
- Faire les exercices sur [Grille Bootstrap](https://smnarnold.com/exercices/bootstrap/grille-bootstrap)
  - [CodePen](https://codepen.io/) est un IDE en ligne pour écrire du code HTML, CSS et JavaScript
  - Copier vos réponses dans le rapport

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
      ```
