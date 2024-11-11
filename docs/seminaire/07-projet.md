import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 07 Projet

:::note[Objectifs]

Faire un projet avec Vue.js.

:::

## Rendu

- GitHub Classroom : https://classroom.github.com/a/0bPUTptp
  - `./report.md` : Rapport individuel en Markdown.
- Rendu le 26 décembre 2024 à 23h59.

## Journal de bord

- Écrire un journal de bord dans le fichier `report.md`.
  - La mise en forme est libre, structurez-le afin de s'y retrouver facilement chaque semaine.
- Éléments obligatoires qui doit figurer pour chaque semaine :
  - Temps estimé et temps passé sur le projet.
  - Tâches réalisées.
  - Difficultés rencontrées et solutions trouvées.
  - Explications et réflexions sur le code (Il y aura quelques questions pour vous guider chaque semaine).
  - Suite du projet (Que pourrait-on faire pour la suite du projet ?).

## Semaine 1 (07.11-13.11)

### Vue.js

- Cloner le nouveau dépôt Git dans le répertoire du cours.
- Ouvrir le répertoire du dépôt Git dans Visual Studio Code.
  - Installer l'extension [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
- Créer le fichier `report.md`.
- Créer un projet Vue.js depuis le répertoire du dépôt : `npm create vue@latest`
  - Project name: `quiz`
  - Add TypeScript? `Yes`
  - Add JSX Support? `No`
  - Add Vue Router for Single Page Application development? `Yes`
  - Add Pinia for state management? `No`
  - Add Vitest for Unit Testing? `No`
  - Add an End-to-End Testing Solution? `No`
  - Add ESLint for code quality? `Yes`
  - Add Prettier for code formatting? `Yes`
  - Add Vue DevTools 7 extension for debugging? (experimental) `Yes`
- Vérifier où se trouve le projet :
  ```txt
  sem07-project-{pseudo}
  ├── .git
  ├── .github
  ├── quiz
      └── ...
  ├── README.md
  └── report.md
  ```
- Copier tous les fichiers du projet Vue.js (dossier `quiz`) dans le répertoire du dépôt Git (dossier `sem07-project-{pseudo}`) en écrasant les fichiers existants et supprimer le dossier `quiz` :
  ```txt
  sem07-project-{pseudo}
  ├── .git
  ├── .github
  ├── .vscode
  ├── public
  ├── src
  ├── .editorconfig
  ├── .gitignore
  ├── .prettierrc.json
  ├── env.d.ts
  ├── eslint.config.js
  ├── index.html
  ├── package.json
  ├── README.md
  ├── report.md
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── vite.config.ts
  ```
- Installer les dépendances et formater le code :
  ```sh
  npm install
  npm run format
  ```
- Pour lancer le projet en mode développement :
  ```sh
  npm run dev
  ```
  - Ouvrir le navigateur à l'adresse indiquée pour voir le projet.

### Bootstrap

- Installer Bootstrap et Bootstrap Icons :
  ```sh
  npm install bootstrap @popperjs/core bootstrap-icons
  ```
- Changer la langue et le titre de l'application en modifiant `index.html` :
  ```html
  <!doctype html>
  <html lang="fr">
    <head>
      ...
      <title>Quiz</title>
    </head>
    ...
  </html>
  ```
- Dans `eslint.config.js`, remplacer `pluginVue.configs['flat/essential']` par `pluginVue.configs['flat/recommended']`.
- Supprimer tous les fichiers dans `src/components` et dans `src/assets`.
- Créer ou modifier les fichiers suivants :

<Tabs>
<TabItem value="main.ts">

```ts title="src/main.ts" showLineNumbers
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
```

</TabItem>
<TabItem value="App.vue">

```html title="src/App.vue" showLineNumbers
<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <i class="bi bi-question-square"></i>
        Quiz
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">
              <i class="bi bi-info-square"></i>
              À propos
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
```

</TabItem>
<TabItem value="main.css">

```css title="src/assets/main.css" showLineNumbers
/* https://getbootstrap.com/docs/5.3/components/buttons/#variables */
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
```

</TabItem>
<TabItem value="AboutView.vue">

```html title="src/views/AboutView.vue" showLineNumbers
<template>
  <div class="container mt-3">
    <h1>À propos</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</template>
```

</TabItem>
<TabItem value="HomeView.vue">

```html title="src/views/HomeView.vue" showLineNumbers
<script setup lang="ts">
  import QuizForm from "@/components/QuizForm.vue";
</script>

<template>
  <div class="container mt-3">
    <h1>Quiz</h1>
    <QuizForm />
  </div>
</template>
```

</TabItem>
<TabItem value="QuizForm.vue">

```html title="src/components/QuizForm.vue" showLineNumbers
<script setup lang="ts">
  import { computed, ref } from "vue";

  const cheval = ref<string | null>(null);
  const filled = computed<boolean>(() => cheval.value !== null);

  function submit(event: Event): void {
    event.preventDefault();
    if (filled.value) {
      alert(`Vous avez choisi la couleur ${cheval.value} !`);
    }
  }
</script>

<template>
  <form>
    De quelle couleur est le cheval blanc de Napoléon ?
    <div class="form-check">
      <input
        id="chevalBlanc"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="blanc"
      />
      <label class="form-check-label" for="chevalBlanc">Blanc</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBrun"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="brun"
      />
      <label class="form-check-label" for="chevalBrun">Brun</label>
    </div>
    <div class="form-check">
      <input
        id="chevalNoir"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="noir"
      />
      <label class="form-check-label" for="chevalNoir">Noir</label>
    </div>
    <button
      class="btn btn-primary"
      :class="{ disabled: !filled }"
      @click="submit"
    >
      Terminer
    </button>
  </form>
</template>
```

</TabItem>
</Tabs>

- Vérifier que l'application fonctionne correctement.
  - Voici le [code source](https://github.com/blueur/quiz/tree/week/1-init) et le [site web final](https://blueur.github.io/quiz/).
- Ne pas oublier de faire régulièrement des commits à chaque fois qu'on a un état stable du projet (code fonctionnel, comme ici).

### Quiz

- Modifier le quiz pour qu'il y ait deux-trois questions à choix multiples. Voici quelques idées :
  - De quelle couleur est le cheval blanc de Napoléon ?
  - Combien de pattes a un chat ?
  - Quelle est la capitale de la Suisse ?
- Proposer quatre réponses possibles pour chaque question.
- Afficher le score à la fin du quiz (mettre la logique du calcul dans la fonction `submit`, juste après le `event.preventDefault();`).
- Afficher un message de félicitations si le score est parfait.
- Ajouter un bouton pour réinitialiser le quiz.
  - Ajouter un bouton dans `QuizForm.vue` :
    ```html
    <button class="btn btn-secondary" @click="reset">Réinitialiser</button>
    ```
  - Votre bouton va appeler une fonction `reset` qu'il faudra créer.
- Modifier la couleur des `.btn-primary` dans `main.css`.
- Changer les icônes dans la bar de navigation (en haut) en utilisant [Bootstrap Icons](https://icons.getbootstrap.com/).
- Voici le [code source](https://github.com/blueur/quiz/tree/week/1-final) avec les modifications principales.

### Rapport

- Répondre aux questions suivantes dans le rapport :
  - Expliquer le rôle des fichiers suivants :
    - `main.ts`
    - `main.css`
    - `App.vue`
    - `router/index.ts`
    - `AboutView.vue`
    - `HomeView.vue`
    - `QuizForm.vue`
  - Dans le fichier `QuizForm.vue` :
    - Quelles sont les similarités et les différences entre `ref` et `computed` ?
    - Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" ?
    - Qu'est-ce qu'un `v-model` ?
    - À quoi sert le `:class="{ disabled: !filled }"` ?

## Semaine 2 (14.11-20.11)

### QuestionRadio

C'est fastidieux de devoir répéter les mêmes étapes pour chaque question. On va donc créer un composant pour les questions : `QuestionRadio.vue`.

Commencer par définir comment on voudrait que le composant fonctionne. On pourrait vouloir remplacer chaque question par un composant `QuestionRadio` :

```html
<template>
  <form>
    <QuestionRadio
      v-model="cheval"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      name="cheval"
      :options="[
        { name: 'blanc', text: 'Blanc' },
        { name: 'brun', text: 'Brun' },
        { name: 'noir', text: 'Noir' },
      ]"
    />
    ...
  </form>
</template>
```

- Le composant `QuestionRadio` doit recevoir les propriétés suivantes :
  - `v-model` : la valeur de la réponse (bi-directionnel, car on veut pouvoir modifier la réponse depuis le composant parent lorsqu'on clique sur le bouton "Réinitialiser" et récupérer la réponse depuis le composant parent pour calculer le score).
  - `text` : le texte de la question.
  - `name` : un identifiant unique pour le groupe de boutons radio.
  - `options` : un tableau d'objets pour les options de réponse. Chaque objet doit avoir une propriété `name` pour la valeur de la réponse et une propriété `text` pour le texte affiché de l'option.
- Ne pas oublier d'importer le nouveau composant dans `QuizForm.vue` :
  ```html
  <script setup lang="ts">
    import QuestionRadio from "@/components/QuestionRadio.vue";
    ...
  </script>
  ```

Créer le fichier `QuestionRadio.vue` dans le dossier `src/components` :

```html title="src/components/QuestionRadio.vue" showLineNumbers
<script setup lang="ts">
  import { defineModel, defineProps, type PropType } from "vue";

  const model = defineModel<string | null>();
  const props = defineProps({
    name: { type: String, required: true },
    text: { type: String, required: true },
    options: {
      type: Array as PropType<Array<{ name: string; text: string }>>,
      required: true,
    },
  });
</script>

<template>
  {{ props.text }}
  <div v-for="option in props.options" :key="option.name" class="form-check">
    <input
      :id="`${props.name}-${option.name}`"
      v-model="model"
      class="form-check-input"
      type="radio"
      :name="props.name"
      :value="option.name"
    />
    <label class="form-check-label" :for="`${props.name}-${option.name}`">
      {{ option.text }}
    </label>
  </div>
</template>
```

- Dans la partie `<script>`, on utilise les fonctions `defineModel` et `defineProps` pour définir le modèle (`v-model`) et les propriétés (`text`, `name`, `options`) du composant.
- Dans la partie `<template>` :
  - On affiche le texte de la question : `{{ props.text }}`.
  - On affiche les options de réponse en utilisant une boucle `v-for` sur `props.options` : le `<div>` sera répété pour chaque option.
  - La différence entre les attributs qui commencent par `:` et ceux qui ne commencent pas par `:` est que les premiers sont des expressions JavaScript (interprétées) et les seconds sont des chaînes de caractères (non interprétées).

### QuestionText

De manière similaire, créer un composant `QuestionText.vue` pour les questions à réponse textuelle libre. Voici un code qu'on voudrait extraire dans le composant `QuestionText.vue` :

```html
<label for="exampleFormControlInput" class="form-label">
  Combien de pattes a un chat ?
</label>
<input
  v-model="reponse"
  class="form-control"
  id="exampleFormControlInput"
  placeholder="Veuillez saisir un nombre"
/>
```

Et on souhaiterait l'utiliser comme ceci dans `QuizForm.vue` :

```html
<QuestionText
  v-model="reponse"
  text="Combien de pattes a un chat ?"
  placeholder="Veuillez saisir un nombre"
/>
```

:::info[Question rapport]

Comment rendre la propriété `placeholder` optionnelle ?

:::

Documentation : [Vue.js](https://fr.vuejs.org/guide/essentials/forms#text) + [Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/).

### QuestionCheckbox

Les checkboxes sont comme les radios, mais on peut en sélectionner plusieurs. Créer un composant `QuestionCheckbox.vue` pour les questions à choix multiples. Voici un exemple d'utilisation :

```html
<div class="form-check">
  <input
    id="checkboxJane"
    v-model="checkedNames"
    class="form-check-input"
    type="checkbox"
    value="Jane"
  />
  <label class="form-check-label" for="checkboxJane">Jane</label>
</div>
<div class="form-check">
  <input
    id="checkboxJohn"
    v-model="checkedNames"
    class="form-check-input"
    type="checkbox"
    value="John"
  />
  <label class="form-check-label" for="checkboxJohn">John</label>
</div>
```

Noter que comme la réponse est une liste, il faut initialiser la `ref` avec une liste vide :

```js
const checkedNames = ref([]);
```

Documentation : [Vue.js](https://fr.vuejs.org/guide/essentials/forms#checkbox) + [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks).

## Semaine 3 (21.11-27.11)

## Semaine 4 (28.11-04.12)

## Semaine 5 (05.12-11.12)

## Semaine 6 (12.12-18.12)

## Aides

:::tip[Documentations]

Aidez-vous des documentations officielles pour réaliser le projet :

- [Vue.js](https://fr.vuejs.org/guide/introduction)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

:::

## Évaluation

L'évaluation du projet se portera sur les critères suivants :

- Rapport
  - [ ] **Le journal de bord est à jour et complet.**
  - [ ] _Le journal de bord est bien structuré et synthétique._
- Fonctionnalités
  - [ ] **L'application a les mêmes fonctionnalités que l'exemple.**
  - [ ] **L'application est personnalisée.**
  - [ ] _Bootstrap est correctement utilisé pour rendre l'application responsive._
  - [ ] _L'application a plus de fonctionnalités que l'exemple._
- Code
  - [ ] **Le code suit les conventions de codage (formatage, nommage, organisation, &hellip;).**
  - [ ] **Le code est lisible et maintenable (nommage, commentaires, &hellip;).**
  - [ ] _Le code est bien structuré (composants, design pattern, &hellip;)._

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

- **En gras** : critères principaux.
- _En italique_ : critères secondaires.
