# Environnement

Programmation Web et bases de données

---

## Système de fichiers

```mermaid
flowchart TD
    dir-root([<i class="ph ph-folder-open"></i> Répertoire racine])
    dir-home([<i class="ph ph-folder-open"></i> Répertoire])
    dir-tmp([<i class="ph ph-folder-open"></i> Répertoire])
    dir-alice([<i class="ph ph-folder-open"></i> Répertoire])
    dir-bob([<i class="ph ph-folder-open"></i> Répertoire])
    dir-docs([<i class="ph ph-folder-open"></i> Répertoire])
    file01{{<i class="ph ph-file"></i> Fichier}}
    file02{{<i class="ph ph-file"></i> Fichier}}
    file03{{<i class="ph ph-file"></i> Fichier}}
    file04{{<i class="ph ph-file"></i> Fichier}}
    file05{{<i class="ph ph-file"></i> Fichier}}
    dir-root --> dir-home
    dir-home --> dir-alice
    dir-alice  --> file01
    dir-alice  --> dir-docs
    dir-home --> dir-bob
    dir-bob  --> file02
    dir-root --> dir-tmp
    dir-tmp  --> file03
    dir-tmp  --> file04
    dir-tmp  --> file05
```

- &shy;<!-- .element: class="fragment" --> **Arborescence** de répertoires (dossiers) et de fichiers
- &shy;<!-- .element: class="fragment" --> Un répertoire peut contenir des **fichiers** et d'autres **répertoires**
- &shy;<!-- .element: class="fragment" --> Répertoire **racine** : `/`

---

### Chemin absolu

```mermaid
flowchart TD
    dir-root([<i class="ph ph-folder-open"></i> /])
    dir-home([<i class="ph ph-folder-open"></i> home/])
    dir-tmp([<i class="ph ph-folder-open"></i> tmp/])
    dir-alice([<i class="ph ph-folder-open"></i> alice/])
    dir-bob([<i class="ph ph-folder-open"></i> bob/])
    dir-docs([<i class="ph ph-folder-open"></i> documents/])
    file01{{<i class="ph ph-file"></i> image.png}}
    file02{{<i class="ph ph-file"></i> image.jpg}}
    file03{{<i class="ph ph-file"></i> archive.zip}}
    file04{{<i class="ph ph-file"></i> texte.txt}}
    file05{{<i class="ph ph-file"></i> image.gif}}
    dir-root --> dir-home
    dir-home --> dir-alice
    dir-alice  --> file01
    dir-alice  --> dir-docs
    dir-home --> dir-bob
    dir-bob  --> file02
    dir-root --> dir-tmp
    dir-tmp  --> file03
    dir-tmp  --> file04
    dir-tmp  --> file05
```

- &shy;<!-- .element: class="fragment" --> **Chemin absolu** d'un fichier ou d'un répertoire
  - &shy;<!-- .element: class="fragment" --> `/home/alice/image.png`
  - &shy;<!-- .element: class="fragment" --> `/home/bob/`
  - &shy;<!-- .element: class="fragment" --> **Identification** unique

---

### Chemin relatif

```mermaid
flowchart TD
    dir-root([<i class="ph ph-folder-open"></i> /])
    dir-home([<i class="ph ph-folder-open"></i> home/])
    dir-tmp([<i class="ph ph-folder-open"></i> tmp/])
    dir-alice([**<i class="ph ph-folder-open"></i> alice/**])
    dir-bob([<i class="ph ph-folder-open"></i> bob/])
    dir-docs([<i class="ph ph-folder-open"></i> documents/])
    file01{{<i class="ph ph-file"></i> image.png}}
    file02{{<i class="ph ph-file"></i> image.jpg}}
    file03{{<i class="ph ph-file"></i> archive.zip}}
    file04{{<i class="ph ph-file"></i> texte.txt}}
    file05{{<i class="ph ph-file"></i> image.gif}}
    dir-root --> dir-home
    dir-home --> dir-alice
    dir-alice  --> file01
    dir-alice  --> dir-docs
    dir-home --> dir-bob
    dir-bob  --> file02
    dir-root --> dir-tmp
    dir-tmp  --> file03
    dir-tmp  --> file04
    dir-tmp  --> file05
```

- **Répertoire de travail (courant)** (working directory)
- &shy;<!-- .element: class="fragment" --> **Chemin relatif** : par rapport au **répertoire courant** (/home/alice/)
  - &shy;<!-- .element: class="fragment" --> `./documents/` (`.` : répertoire courant) ou `documents/`
  - &shy;<!-- .element: class="fragment" --> `../bob/image.jpg` (`..` : répertoire parent)
  - &shy;<!-- .element: class="fragment" --> `../../tmp/texte.txt`

---

## GUI vs CLI

- &shy;<!-- .element: class="fragment" --> Interfaces pour **interagir** avec l'ordinateur
- &shy;<!-- .element: class="fragment" --> Graphical User Interface (**GUI**)
  - &shy;<!-- .element: class="fragment" --> Quoi ? **Souris** et **clavier**
  - &shy;<!-- .element: class="fragment" --> Comment ? **Clics** et **déplacements**
  - &shy;<!-- .element: class="fragment" --> Où ? **Explorateur de fichiers**
- &shy;<!-- .element: class="fragment" --> Command Line Interface (**CLI**)
  - &shy;<!-- .element: class="fragment" --> Quoi ? **Clavier** uniquement
  - &shy;<!-- .element: class="fragment" --> Comment ? **Commandes** textuelles
  - &shy;<!-- .element: class="fragment" --> Où ? **Terminal**

---

## Terminal

![](https://extraterm.org/selection_mode2.gif) <!-- .element: class="full" -->

&shy;<!-- .element: class="reference" --> https://wiki-tech.io/Linux/D%C3%A9butant/Terminal

---

## Terminal

- &shy;<!-- .element: class="fragment" --> **Programme** permettant d'exécuter des **commandes**
- &shy;<!-- .element: class="fragment" --> Commandes possibles:
  - &shy;<!-- .element: class="fragment" --> **Naviguer** dans les répertoires : `cd`
  - &shy;<!-- .element: class="fragment" --> **Créer** et **supprimer** des fichiers et répertoires : `touch`, `mkdir`, `rm`
  - &shy;<!-- .element: class="fragment" --> **Copier** et **déplacer** des fichiers : `cp`, `mv`
  - &shy;<!-- .element: class="fragment" --> **Installer** des logiciels : `apt`, `brew`, `choco`
  - &shy;<!-- .element: class="fragment" --> **Exécuter** des programmes : `node`, `python`
- &shy;<!-- .element: class="fragment" --> **Shell** : programme qui **interprète** les commandes
  - &shy;<!-- .element: class="fragment" --> Exemples: **bash**, **zsh**, **PowerShell**, **cmd**

---

## IDE

- &shy;<!-- .element: class="fragment" --> **I**ntegrated **D**evelopment **E**nvironment (Environnement de développement intégré)
- &shy;<!-- .element: class="fragment" --> **Éditeur de texte** avec des fonctionnalités supplémentaires
- &shy;<!-- .element: class="fragment" --> Facilite l'**édition** et le **débogage** du code
- &shy;<!-- .element: class="fragment" --> Exemples populaires:
  - &shy;<!-- .element: class="fragment" --> [Visual Studio Code](https://code.visualstudio.com/) ou [VSCodium](https://vscodium.com/)
    - **Open source** et **gratuit**
  - &shy;<!-- .element: class="fragment" --> [IntelliJ IDEA](https://www.jetbrains.com/idea/) ou autres IDE de [JetBrains](https://www.jetbrains.com/)
    - **Payant** (sauf étudiant), mais meilleur **refactoring** et **autocomplétion**
  - &shy;<!-- .element: class="fragment" --> [Eclipse](https://www.eclipse.org/)
    - **Open source** et **gratuit**, mais **lourd**
- &shy;<!-- .element: class="fragment" --> **Jupyter** ?
  - &shy;<!-- .element: class="fragment" --> Pour des **rapports** interactifs **&ne;** développement de **logiciels**

---

## Logiciel de gestion de versions

- &shy;<!-- .element: class="fragment" --> Version control system (**VCS**)
- &shy;<!-- .element: class="fragment" --> **Conserve** le code source avec son **historique**
- &shy;<!-- .element: class="fragment" --> Permet de **collaborer** à plusieurs sur le même code
- &shy;<!-- .element: class="fragment" --> Le plus populaire: **Git**

---

### Historique des modifications

```mermaid
gitGraph
  commit id: "Création du projet"
```

---

### Historique des modifications

```mermaid
gitGraph
  commit id: "Création du projet"
  commit id: "Ajout de la page d'accueil"
```

---

### Historique des modifications

```mermaid
gitGraph
  commit id: "Création du projet (16628b8)"
  commit id: "Ajout de la page d'accueil (f40813e)"
  commit id: "Ajout de la page de contact (e5c5279)"
```

---

## Git

- &shy;<!-- .element: class="fragment" --> Les modifications sont stockées dans des **commits**
- &shy;<!-- .element: class="fragment" --> Chaque commit est **identifié** par un **hash**
- &shy;<!-- .element: class="fragment" --> Chaque commit a un **parent**
  - Différence avec le commit précédent (parent)
- &shy;<!-- .element: class="fragment" --> Les **branches** et **tags** sont des **pointeurs** vers un commit
  - Les **branches** sont des pointeurs **mobiles**
  - Les **tags** sont des pointeurs **fixes**

---

### Dépôts (repository) locaux et distants

![](https://miro.medium.com/v2/1*PICyAiWjy3rc2bdb4UM3LA.png)

&shy;<!-- .element: class="reference" --> https://medium.com/@allema_s/git-expliqu%C3%A9-a-mes-coll%C3%A8gues-de-boulot-823875d737fa

---

### Commandes Git

```mermaid
sequenceDiagram
  participant ws as Répertoire de travail (working directory)
  participant sa as Espace de préparation (staging area)
  participant lr as Dépôt local (local repository)
  participant rr as Dépôt distant (remote repository - GitHub)
  ws->>sa: git add --all
  sa->>lr: git commit -m "message"
  lr->>rr: git push
  rr->>ws: git pull
```
