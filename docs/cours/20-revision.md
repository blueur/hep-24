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

<details>
<summary>Réponse possible</summary>

Un SSG est un outil qui génère un site Web (fichiers HTML, CSS et JavaScript) à partir de templates et de données (fichiers Markdown, JSON, etc.).

</details>

Quels sont les avantages et les inconvénients de cette approche ?

<details>
<summary>Réponse possible</summary>

Avantages :

- Permet de séparer le contenu de la présentation.
- L'utilisation des templates permet de garder une cohérence graphique et d'éviter la duplication de code.
- Le site peut être facilement optimisé (taille des fichiers, métadonnées pour les moteurs de recherche, etc.).

Inconvénients :

- Mise en place plus complexe qu'un site statique.
- Les mises à jour du contenu nécessitent de générer à nouveau le site.
- Plus difficile à corriger les erreurs du site car le résultat visible n'est pas le même que le code source.

</details>

Quels sont les similitudes et les différences entre un SSG et Vue.js ?

<details>
<summary>Réponse possible</summary>

Similitudes :

- Les deux permettent de générer des sites Web.
- Les deux utilisent des templates pour structurer le contenu.
- Les deux peuvent utiliser des fichiers de données pour générer le contenu.

Différences :

- Vue.js génère un SPA (Single Page Application) qui charge le contenu dynamiquement. Il n'y a qu'une seule page HTML et pas de rechargement de la page dans la navigation.
- Un SSG génère des fichiers HTML pour chaque page du site. Chaque lien est une page HTML différente.

</details>

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

<details>
<summary>Réponse possible</summary>

Une application trois tiers est une application qui est divisée en trois parties distinctes : la présentation (frontend), la logique métier (backend) et la base de données (stockage).

</details>

Pour les cas suivants, indiquer de quel tiers il s'agit :

1. L'affichage des graphiques de statistiques.
2. Le stockage des réponses d'un questionnaire.
3. La vérification de l'authentification d'un utilisateur.
4. Le calcul de la moyenne des notes d'un élève.
5. L'envoi d'un courriel de confirmation.
6. Activer le mode sombre de l'application.
7. La traduction des textes de l'application.

<details>
<summary>Solution possible</summary>

1. Frontend : le client reçoit les données numériques et les affiche sous forme de graphiques.
2. Base de données : les réponses sont stockées pour être consultées ultérieurement.
3. Backend : la vérification doit être faite côté serveur pour éviter que l'utilisateur puisse modifier le code côté client.
4. Frontend, backend ou base de données : si la liste des notes est déjà connue par l'utilisateur, le calcul peut être fait côté client (frontend). Si on souhaite indiquer que la moyenne et non la liste des notes, le calcul doit être fait côté serveur (backend) et la base de données peut être utilisée pour faire des calculs simples (AVG).
5. Backend : l'envoi de courriel nécessite un serveur mail.
6. Frontend : le mode sombre est une préférence de l'utilisateur qui est stockée dans le navigateur, donc côté client.
7. Frontend : la traduction est géré par l'affichage des textes dans la langue choisie par l'utilisateur, donc côté client.

</details>

Dans quel tiers se trouve l'application quiz du projet ?

<details>
<summary>Réponse possible</summary>

Frontend : l'application quiz est une application Web qui est exécutée dans le navigateur de l'utilisateur.

</details>

Pourrait-on tricher au quiz ? Si oui, comment et comment l'éviter ?

<details>
<summary>Réponse possible</summary>

Oui, on pourrait tricher en regardant les réponses dans le code source de la page. Pour éviter cela, il faudrait vérifier les réponses côté serveur et envoyer uniquement si la réponse est correcte ou non.

</details>

## Base de données

Modéliser la base de données d'un système de note dans une école.

- Chaque élève et enseignant a un identifiant (7 caractères), un nom, un prénom et une date de naissance.
- Chaque cours a un identifiant (3 caractères), un nom, un enseignant et des élèves.
- Chaque note a une valeur, un élève, un cours et une date.

<details>
<summary>Solution possible</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity personne {
  *id : char(7)
  --
  *nom : text
  *prenom : text
  *date_naissance : date
}
entity cours {
  *id : number <<generated>>
  --
  *nom : text
}
entity note {
  *id : number <<generated>>
  --
  *valeur : number
  *date : date
}

personne ||--o{ cours : enseigne
cours }o--|{ personne : est élève
cours ||--o{ note
personne ||--o{ note
@enduml
```

</details>

Il existe déjà une table `personne` avec les colonnes `id`, `nom`, `prenom` et `date_naissance` :

```sql
CREATE TABLE personne (
  id CHAR(7) PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  prenom VARCHAR(50) NOT NULL,
  date_naissance DATE NOT NULL,
  branche_id CHAR(3),
  FOREIGN KEY (branche_id) REFERENCES branche(id)
);
```

Ainsi qu'une table `branche` avec les colonnes `id` et `nom` (chaque enseignant ne peut enseigner qu'une seule branche) :

```sql
CREATE TABLE branche (
  id CHAR(3) PRIMARY KEY,
  nom VARCHAR(50) NOT NULL
);
```

Écrire les commandes SQL pour créer les autres tables selon votre modèle.

<details>
<summary>Solution possible</summary>

```sql
CREATE TABLE cours (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  enseignant_id CHAR(7) NOT NULL,
  FOREIGN KEY (enseignant_id) REFERENCES personne(id)
);

-- Table intermédiaire pour la relation many-to-many entre les cours et les élèves
CREATE TABLE eleve_cours (
  id SERIAL PRIMARY KEY,
  eleve_id CHAR(7) NOT NULL,
  cours_id INTEGER NOT NULL,
  FOREIGN KEY (eleve_id) REFERENCES personne(id)
  FOREIGN KEY (cours_id) REFERENCES cours(id)
);

CREATE TABLE note (
  id SERIAL PRIMARY KEY,
  valeur SMALLINT NOT NULL,
  date DATE NOT NULL,
  eleve_id CHAR(7) NOT NULL,
  cours_id INT NOT NULL,
  FOREIGN KEY (eleve_id) REFERENCES personne(id),
  FOREIGN KEY (cours_id) REFERENCES cours(id)
);

```

</details>

Est-ce une bonne idée d'avoir les enseignants et les élèves dans la même table ? Pourquoi ?

<details>
<summary>Solution possible</summary>

Étant donné que la table personne existe déjà, cela ne vaut pas forcément la peine de dupliquer les données dans deux tables différentes.

Un risque d'avoir une seule table personne est qu'il n'y a pas de contrainte pour vérifier si une personne est un enseignant ou un élève. Donc une personne peut être enseignante et élève en même temps dans la même classe.

</details>

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

Une élève (id = 'ab42cde') souhaite connaître sa moyenne générale pour un cours (id = 1291). Écrire la requête SQL pour obtenir cette information.

<details>
<summary>Solution possible</summary>

```sql
SELECT AVG(valeur) FROM note WHERE eleve_id = 'ab42cde' AND cours_id = 1291;
```

</details>

On remarque que les recherches des notes par date sont lentes. Comment améliorer les performances de la base de données ?

<details>
<summary>Solution possible</summary>

Ajouter un index sur la colonne `date` de la table `note` permettra d'accélérer les recherches sur cette colonne.

```sql
CREATE INDEX idx_date ON note(date);
```

Car la recherche se fera en log(n) au lieu de n.

</details>

Une élève change de classe au cours de l'année et sera donc inscrite dans plusieurs autres cours :

```sql
UPDATE eleve_cours SET cours_id = 32 WHERE eleve_id = 'qw32yxc' AND cours_id = 16;
UPDATE eleve_cours SET cours_id = 34 WHERE eleve_id = 'qw32yxc' AND cours_id = 17;
UPDATE eleve_cours SET cours_id = 33 WHERE eleve_id = 'qw32yxc' AND cours_id = 18;
```

Est-ce une bonne idée de faire ces trois requêtes successivement ? Pourquoi ? Comment améliorer cela ?

<details>
<summary>Solution possible</summary>

Non, car si une des requêtes échoue, les autres ne le seront pas forcément et l'élève sera inscrite à moitié dans les anciens cours et à moitié dans les nouveaux.

Il vaut mieux utiliser une transaction pour garantir que toutes les requêtes réussissent ou échouent (atomicité).

```sql
BEGIN;
UPDATE eleve_cours SET cours_id = 32 WHERE eleve_id = 'qw32yxc' AND cours_id = 16;
UPDATE eleve_cours SET cours_id = 34 WHERE eleve_id = 'qw32yxc' AND cours_id = 17;
UPDATE eleve_cours SET cours_id = 33 WHERE eleve_id = 'qw32yxc' AND cours_id = 18;
COMMIT;
```

</details>

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
