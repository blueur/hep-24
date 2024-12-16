# 13 Révision

## Objectifs

L'examen écrit se portera sur les critères suivants :

- Web
  - [ ] Expliquer l'utilisation de code externe dans un projet.
  - [ ] Critiquer l'utilisation d'un générateur de site statique.
  - [ ] Adapter du code HTML et CSS en Vue.js.
  - [ ] Adapter du code TypeScript en Vue.js.
  - [ ] Analyser les erreurs d'une application trois tiers.
- Base de données
  - [ ] Modéliser une base de données.
  - [ ] Adapter des requêtes SQL.
  - [ ] Expliquer les transactions et l'indexation d'une base de données.
  - [ ] Différencier différents types de bases de données.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

## Acronymes

Regrouper et expliquer les acronymes suivants (détailler chaque lettre quand il y a \*) :

- ACID\*
- API
- BASE\*
- BDD
- CDN
- CLI
- CSS
- DB
- DRY\*
- GUI
- HTML
- HTTP
- IDE
- JS
- JSON
- MVC
- NPM
- PWA
- REST
- SPA
- SQL
- SSG
- TS
- URL
- VCS

## npm & Node.js

## SSG

## Vue.js

```html showLineNumbers
<script setup>
  import { ref } from "vue";
  const count = ref(0);
  function add() {
    count.value += 2;
  }
</script>

<template>
  <button @click="add">Compteur: {{ count }}</button>
</template>

<style scoped>
  button {
    color: red;
  }
</style>
```

Dessiner le résultat de ce composant Vue.js et expliquer ce qu'il fait.

<details>
<summary>Solution</summary>

[Code interactif](https://play.vuejs.org/#eNp9kT9PwzAQxb+K5YmKKkXAVNKKP+oAAyBg9BKcS3Hr2JZ9LkVRvjtnpy0dgCWK7717/t254zfOFZsIfMrLIL1yyAJgdHNhGFOtsx5Zxzw0rGeNty0TnNyCXyVdWhOQvtEgmyXTydkoC000EpU1rKrrkxHrUi3ZyVhsKh2Bnc7Yebb2wpST4Wa6kw4IrdMVQiYo3yMi5VxLreR6JjgFCj6/s61DiH7Kum53f9+Xk8FMjeXkKIWOAb80sCCtgzrn7mIPYNpSlof6CCm1zPmYI7WZRi2LVbCG1pR7BJeEoDT4J5cGDYITy5BGkFrbz4dcQx9hvK/LD5DrX+qrsE01wZ89BPAb2u9Bw8ovAQd58foIW/o/iK2toyb3P+ILBKtjYhxst9HUhH3ky7T3+amVWb6FxRbBhP1QCTQvJfvz66ft/zX6D+5FcblbZs/7b9HBzE8=)

Il affiche un bouton écrit "Compteur: 0" en rouge. À chaque clic, le compteur augmente de 2 (0, 2, 4, 6, &hellip;).

</details>

Ajouter un bouton aussi écrit en rouge pour réinitialiser le compteur à 0.

<details>
<summary>Solution possible</summary>

```html showLineNumbers
<script setup>
  import { ref } from "vue";
  const count = ref(0);
  function add() {
    count.value += 2;
  }
  // highlight-start
  function reset() {
    count.value = 0;
  }
  // highlight-end
</script>

<template>
  <button @click="add">Compteur: {{ count }}</button>
  <!-- highlight-next-line -->
  <button @click="reset">Réinitialiser</button>
</template>

<style scoped>
  button {
    color: red;
  }
</style>
```

[Code interactif](https://play.vuejs.org/#eNp9kk1OwzAQha9ieUVF1VbAqqQVP+oCFoAKy2yCMy1uHduyx6UoyoE4Bxdj7LQlSIVNFM+8N/6e7ZpfWzvYBOBjnnnhpEXmAYOd5poxWVnjkNXMwYI1bOFMxXJO6pxfxr4w2iN9g0Y2iaKTUS81FkELlEazoixPeqyOtSgn4WBTqADsdMLOkrT5pXdAux93TNhob8iGLSpB0gKhsqpASMjZa0CkQVdCSbGe5JwIcj69NZVFCG7M6noH3DTZsBUfNyYUss6/PqWWKAslPbiOJxt2dqalxw8FzAtjoUwjdxMPWZSh/R2UnRjRMuV9jmTTC7kcrLzRdBfJk3NB2FKBe7TxdHzOib+dRsGUMu/3qYYuQH9fF28g1kfqK7+NtZw/xWRuQ5d46GHhljFsbM+eH2BL/4dmZcqgSP1Pcw7eqBAZW9lN0CVhd3SJ9i69J6mXL362RdB+HyqCpkNJ+vTE4o39Ff0H93xwsTvMhjffHafvnQ==)

</details>

Comment faire pour que les deux boutons ne soient pas de la même couleur ?

<details>
<summary>Solution possible</summary>

En utilisant une classe CSS différente pour chaque bouton.

```html showLineNumbers
<script setup>
  import { ref } from "vue";
  const count = ref(0);
  function add() {
    count.value += 2;
  }
  function reset() {
    count.value = 0;
  }
</script>

<template>
  <button @click="add">Compteur: {{ count }}</button>
  <!-- highlight-next-line -->
  <button @click="reset" class="reset">Réinitialiser</button>
</template>

<style scoped>
  button {
    color: red;
  }
  /* highlight-start */
  .reset {
    color: blue;
  }
  /* highlight-end */
</style>
```

</details>

## Analyse d'erreurs

## Base de données

## Bases de données

Parmi les types de base de données suivants :

- relationnelle
- clé-valeur
- document
- graphe
- géospatial
- séries temporelles (time series)
- colonne

Quelle type serait le plus adapté pour les cas suivants (et pourquoi) :

1. Préférences des utilisateurs (langue, thème, pseudo, etc.)
2. Historique des commandes (produits, quantité, prix, etc.)
3. Réseau social (utilisateurs, amis, etc.)
4. Données météorologiques (température, humidité, etc.)
5. Données financières (transactions, soldes, etc.)
6. Données de géolocalisation (latitude, longitude, etc.)
7. Liste de courses (produits, quantité, prix, etc.)

<details>
<summary>Solution possible</summary>

1. clé-valeur : les préférences des utilisateurs sont des données simples qui peuvent être stockées dans une base clé-valeur. Chaque paramètre est associé à une clé unique.
2. document : l'historique des commandes est une donnée plus complexe qui peut être stockée dans un document. Chaque commande est un document qui contient les produits, la quantité, le prix, etc.
   - ou relationnelle si on lie les produits à une table de produits.
3. graphe : un réseau social est un graphe où les utilisateurs sont des nœuds et les relations d'amitié sont des arêtes.
4. time series : les données météorologiques une valeur à un instant donné.
5. relationnelle : les données financières sont structurées en tables avec des relations entre elles.
6. géospatial : les index sont des données géolocalisées (latitude, longitude).
7. clé-valeur : produits comme clé et quantité comme valeur par exemple.

</details>
