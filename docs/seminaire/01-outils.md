# Outils

:::note[Objectifs]

Préparer l'environnement de travail.

- Installer les outils nécessaires
- Créer un compte GitHub
- Configurer Git
- Rendre une présentation en PDF sur Moodle

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/ktZFZ07-
  - `./report.md` : Rapport individuel en [Markdown](https://fr.wikipedia.org/wiki/Markdown)
- Moodle : https://elearning.hepl.ch/mod/assign/view.php?id=176080
- Délai : 1 semaine

## Installation

:::warning[Windows]

Pour les utilisateurs Windows, commencer par installer [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=fr-ch).

:::

Installer les outils suivants :

- Navigateur web ([Mozilla Firefox](https://www.mozilla.org/fr/firefox/new/), [Google Chrome](https://www.google.com/chrome/) ou [Microsoft Edge](https://www.microsoft.com/fr-ch/edge))
- [Visual Studio Code](https://code.visualstudio.com/)
  - Avec l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    - Extensions > Rechercher `Live Server` > Installer
- [Git](https://git-scm.com/)
  - Vérifier avec `git --version` dans un terminal
- [Node.js](https://nodejs.org/)
  - Au moins la dernière version LTS
  - Vérifier avec `node --version` dans un terminal
  - Possibilité d'utiliser [nvm](https://github.com/nvm-sh/nvm) pour gérer les versions de Node.js
- [Python](https://www.python.org/)
  - Vérifier avec `python --version` dans un terminal
  - Possibilité d'utiliser [pyenv](https://github.com/pyenv/pyenv) pour gérer les versions de Python

Créer un répertoire pour le cours (par exemple `hep/bs21inf5` dans vos documents) pour y mettre tous les projets du cours.

:::tip[Conseils]

- Préférer les versions stables (LTS pour long term support) aux versions plus récentes
  - Moins de bugs
- Préférer les versions officielles aux versions tierces
  - Plus sûr de ce qui est installé

:::

:::tip[Conseils pour Windows]

- Utiliser [Chocolatey](https://community.chocolatey.org/) pour installer les outils
- Utiliser [cmder](https://cmder.app/) comme terminal (disponible via Chocolatey)
  - Intégration avec [Windows Terminal](https://medium.com/talpor/windows-terminal-cmder-%EF%B8%8F-573e6890d143)
- Pour désactiver l'[alias d'exécution de Python](https://www.thewindowsclub.com/manage-app-execution-aliases-on-windows-10)

:::

## GitHub

- Créer un compte sur [GitHub](https://github.com/)
- [Configurer Git](https://docs.github.com/fr/get-started/getting-started-with-git/set-up-git)
  - `git config --global user.name "[VOTRE_NOM]"`
    - Par exemple : `git config --global user.name "John Doe"`
  - `git config --global user.email "[VOTRE_EMAIL]"`
    - Par exemple : `git config --global user.email "john.doe@etu.hepl.ch"`
  - [Fins de ligne pour Windows](https://docs.github.com/fr/get-started/getting-started-with-git/configuring-git-to-handle-line-endings?platform=windows) : `git config --global core.autocrlf true`
- Accepter le devoir sur [GitHub Classroom](https://classroom.github.com/a/ktZFZ07-)

## Terminal

- Ouvrir un terminal
  - macOS : <kbd>Cmd</kbd> + <kbd>Space</kbd> puis taper `terminal`
  - Linux : <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>
  - Windows : <kbd>Win</kbd> + <kbd>R</kbd> puis taper `wt`
- Pour exécuter une commande, il suffit de taper le nom de la commande puis la touche <kbd>Enter</kbd>. Essayez les commandes suivantes :
  - `ls` pour lister les fichiers et répertoires
  - `pwd` pour afficher le chemin absolu du répertoire courant
- Naviguer dans les répertoires jusqu'à celui du cours
  - `cd [NOM_DU_REPERTOIRE]` pour changer de répertoire (`cd` pour change directory)
  - `cd ..` pour remonter d'un niveau
  - La touche <kbd>Tab</kbd> permet de compléter automatiquement le nom des fichiers et répertoires
  - Les touches fléchées <kbd>&larr;</kbd> et <kbd>&rarr;</kbd> permettent de se déplacer dans la ligne de commande
  - Les touches fléchées <kbd>&uarr;</kbd> et <kbd>&darr;</kbd> permettent de naviguer dans l'historique des commandes
  - Le raccourci <kbd>Ctrl</kbd> + <kbd>C</kbd> permet d'annuler une commande en cours
- Une fois dans le répertoire du cours, vérifier avec `pwd`.
- [Cloner le dépôt](https://docs.github.com/fr/repositories/creating-and-managing-repositories/cloning-a-repository) du devoir sur GitHub Classroom sur votre machine
  ```bash
  git clone [URL_DU_DEPOT]
  ```
- Se déplacer dans le répertoire du devoir
  ```bash
  cd sem01-outils-[VOTRE_PSEUDO_GITHUB]
  ```
- Créer un répertoire `terminal` (`mkdir` pour make directory)
  ```bash
  mkdir terminal
  ```
- Se déplacer dans le répertoire `terminal`
  ```bash
  cd terminal
  ```
- La commande `echo` permet d'afficher du texte dans le terminal
  ```bash
  echo "Hello, World!"
  ```
- Elle permet aussi de créer un fichier avec du texte
  ```bash
  echo "Hello, World!" > hello.txt
  ```
  - Vérifier le contenu du fichier avec votre navigateur de fichiers
- Pour lire un fichier dans le terminal, on utilise la commande `cat` (pour concatenate)
  ```bash
  cat hello.txt
  ```
- Pour copier un fichier, on utilise la commande `cp` (pour copy)
  ```bash
  cp hello.txt hello-2.txt
  ```
  - Vérifier le contenu du fichier copié

## Git

- Revenir dans le répertoire du devoir
  ```bash
  cd ..
  ```
- Ajouter les fichiers créés dans le "staging area" (zone de préparation)
  ```bash
  git add --all
  ```
- Créer un "commit" avec un message
  ```bash
  git commit -m "ajouter les exercices sur le terminal"
  ```
- Envoyer le commit sur le dépôt distant
  ```bash
  git push
  ```

## Présentation

- Écrire une brève présentation de soi avec ses centres d'intérêt, ses compétences en informatique, pourquoi avoir choisi cette formation, etc.
- Rendre la présentation au format PDF nommé `presentation-prenom-nom.pdf` (avec votre prénom et nom, tout en minuscule, sans accent, sans espace avec des tirets) sur [Moodle](https://elearning.hepl.ch/mod/assign/view.php?id=176080)

## Markdown

Le Markdown est un langage de balisage léger. Il est utilisé pour formater du texte de manière simple et lisible. Les rapports à rendre pour le cours seront rédigés en Markdown.

- Créer un fichier `report.md` dans le répertoire du devoir avec le contenu ci-dessous
  - Modifier et compléter le contenu du tableau avec les tâches effectuées, le temps passé et éventuellement des commentaires
  - [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- Plusieurs outils permettent de visualiser le rendu du Markdown :
  - [Dillinger](https://dillinger.io/)
  - Visual Studio Code : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> lors de l'édition d'un fichier Markdown
- Ajouter le fichier au dépôt Git et le pousser sur le dépôt distant
  - Il est possible d'utiliser Git avec une interface graphique avec [Visual Studio Code](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_staging-and-committing-code-changes) ou [GitHub Desktop](https://desktop.github.com/)

```markdown title="./report.md"
# Séminaire 01 - Outils

[Prénom Nom]

## Temps passé

| Tâche        | Temps passé | Commentaire                    |
| ------------ | ----------- | ------------------------------ |
| Installation | 1h          |                                |
| GitHub       | 30m         | difficulté à trouver un pseudo |
| ...          | ...         | ...                            |
| Total        | 2h30        |                                |
```

## Raccourcis clavier

Les raccourcis clavier sont des combinaisons de touches qui permettent d'effectuer des actions bien plus rapidement. Voici quelques raccourcis clavier utiles :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="macOS">
    - <kbd>Cmd</kbd> + <kbd>C</kbd> : Copier
    - <kbd>Cmd</kbd> + <kbd>V</kbd> : Coller
    - <kbd>Cmd</kbd> + <kbd>X</kbd> : Couper
    - <kbd>Cmd</kbd> + <kbd>Z</kbd> : Annuler
    - <kbd>Cmd</kbd> + <kbd>S</kbd> : Enregistrer
    - <kbd>Cmd</kbd> + <kbd>A</kbd> : Tout sélectionner
    - <kbd>Cmd</kbd> + <kbd>F</kbd> : Rechercher
  </TabItem>
  <TabItem value="Linux/Windows">
    - <kbd>Ctrl</kbd> + <kbd>C</kbd> : Copier
    - <kbd>Ctrl</kbd> + <kbd>V</kbd> : Coller
    - <kbd>Ctrl</kbd> + <kbd>X</kbd> : Couper
    - <kbd>Ctrl</kbd> + <kbd>Z</kbd> : Annuler
    - <kbd>Ctrl</kbd> + <kbd>S</kbd> : Enregistrer
    - <kbd>Ctrl</kbd> + <kbd>A</kbd> : Tout sélectionner
    - <kbd>Ctrl</kbd> + <kbd>F</kbd> : Rechercher
  </TabItem>
</Tabs>

## Pour aller plus loin

- [Apprendre Git sous forme de jeu](https://learngitbranching.js.org/)
- [Exercices sur Markdown](https://www.markdowntutorial.com/fr/)
- [Exercices sur le terminal](https://cmdchallenge.com/)

## Références

- https://fr.wikipedia.org/wiki/Markdown
