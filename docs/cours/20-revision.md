# 13 Révision

## Objectifs

L'examen écrit se portera sur les critères suivants :

- Web
  - [ ] Expliquer l'utilisation des outils de développement d'un projet Web.
  - [ ] Critiquer l'utilisation d'un générateur de site statique.
  - [ ] Adapter du code HTML et CSS en Vue.js.
  - [ ] Adapter du code TypeScript en Vue.js.
  - [ ] Différencier les parties d'une application trois tiers.
- Base de données
  - [ ] Modéliser une base de données.
  - [ ] Adapter des requêtes SQL.
  - [ ] Améliorer l'utilisation d'une base de données avec les transactions et les index.
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
- WWW

## Outils

Quelle est la bonne pratique pour sauvegarder et partager du code ?

<details>
<summary>Réponse possible</summary>

Utiliser un gestionnaire de versions comme Git permet de garder un historique des modifications sur plusieurs ordinateurs et GitHub permet de l'héberger en ligne pour le partager.

</details>

Pourquoi utiliser du code externe dans un projet ?

<details>
<summary>Réponse possible</summary>

Pour ne pas réinventer la roue et gagner du temps en utilisant des bibliothèques et des frameworks déjà existants.

</details>

Comment ajouter du code externe dans un projet Web et quels sont les rôles de npm et Node.js ?

<details>
<summary>Réponse possible</summary>

npm permet d'installer et de gérer du code externe d'un projet Web. Node.js permet d'exécuter du code JavaScript sur un ordinateur. `npm install` permet d'ajouter une dépendance à un projet dans le fichier `package.json`.

</details>

## SSG

Qu'est-ce qu'un générateur de site statique (SSG) ?

Quels sont les avantages et les inconvénients de cette approche ?

Quels sont les similitudes et les différences entre un SSG et Vue.js ?

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

## Trois tiers

Qu'est-ce qu'une application trois tiers ?

Pour les cas suivants, indiquer de quel tiers il s'agit :

1. L'affichage des graphiques de statistiques.
2. Le stockage des réponses d'un questionnaire.
3. La vérification de l'authentification d'un utilisateur.
4. Le calcul de la moyenne des notes d'un élève.
5. L'envoi d'un courriel de confirmation.
6. Activer le mode sombre de l'application.
7. La traduction des textes de l'application.

Dans quel tiers se trouve l'application quiz du projet ?

Pourrait-on tricher au quiz ? Si oui, comment et comment l'éviter ?

## Base de données

Modéliser la base de données d'un système de note dans une école.

- Chaque élève et enseignant a un identifiant, un nom, un prénom et une date de naissance.
- Chaque cours a un identifiant, un nom, un enseignant et des élèves.
- Chaque note a une valeur, un élève, un cours et une date.

Il existe déjà une table `personne` avec les colonnes `id`, `nom`, `prenom` et `date_naissance` :

```sql
CREATE TABLE personne (
  id CHAR(7) PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  prenom VARCHAR(50) NOT NULL,
  date_naissance DATE NOT NULL,
  FOREIGN KEY (branche_id) REFERENCES branche(id)
);
```

Ainsi qu'une table `branche` avec les colonnes `id` et `nom` :

```sql
CREATE TABLE branche (
  id CHAR(3) PRIMARY KEY,
  nom VARCHAR(50) NOT NULL
);
```

Écrire les commandes SQL pour créer les autres tables selon votre modèle.

Est-ce une bonne idée d'avoir les enseignants et les élèves dans la même table ? Pourquoi ?

Expliquer ce que fait la commande suivante :

```sql
SELECT DISTINCT nom FROM personne WHERE prenom LIKE 'A%';
```

<details>
<summary>Solution</summary>

Sélectionner les noms distincts des personnes dont le prénom commence par "A".

</details>

Sélectionner les noms et prénoms de toutes les personnes nées après 2000 (y compris).

<details>
<summary>Solution</summary>

```sql
SELECT nom, prenom FROM personnes WHERE date_naissance >= '2000-01-01';
```

</details>

Une élève (id = 'ab42cde') souhaite connaître sa moyenne générale. Écrire la requête SQL pour obtenir cette information.

<details>
<summary>Solution possible</summary>

```sql
SELECT AVG(valeur) FROM note WHERE eleve_id = 'ab42cde';
```

</details>

On remarque que les recherches des notes par date sont lentes. Comment améliorer les performances de la base de données ?

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
