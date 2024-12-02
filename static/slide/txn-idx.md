# Transaction & Indexation

Programmation Web et bases de données

---

### Transaction bancaire

- &shy;<!-- .element: class="fragment" --> Table `account` :
  | user | balance |
  | ----- | ------- |
  | Alice | 1000.- |
  | Bob | 500.- |
- &shy;<!-- .element: class="fragment" --> Alice **transfert** 100.- à Bob
- ```sql
  UPDATE account SET balance = balance - 100 WHERE user = 'Alice';
  UPDATE account SET balance = balance + 100 WHERE user = 'Bob';
  ```
  <!-- .element: class="fragment" -->
- ```kroki plantuml half fragment
  @startuml
  Application -> DB : Alice.balance -= 100.-
  Application -> DB : Bob.balance += 100.-
  @enduml
  ```

---

### Transaction bancaire

```kroki plantuml half
@startuml
Application -> DB : Alice.balance -= 100.-
Application ->x DB : Bob.balance += 100.-
@enduml
```

- &shy;<!-- .element: class="fragment" --> Que se passe-t-il si la deuxième requête SQL **échoue** ?
  - Coupure réseau, panne de serveur, SQL invalide, etc.
- &shy;<!-- .element: class="fragment" --> **Incohérence** des données
- &shy;<!-- .element: class="fragment" --> Solution : **transaction**

---

## Transactions

- &shy;<!-- .element: class="fragment" --> **Groupe** de requêtes SQL
- &shy;<!-- .element: class="fragment" --> Propriétés **ACID**
  - &shy;<!-- .element: class="fragment" --> **Atomicité** : toutes les requêtes ou aucune
  - &shy;<!-- .element: class="fragment" --> **Cohérence** : d'une état valide à un autre
  - &shy;<!-- .element: class="fragment" --> **Isolation** : indépendance des transactions en parallèle
  - &shy;<!-- .element: class="fragment" --> **Durabilité** : persistance des changements après la confirmation

---

![](https://substack-post-media.s3.amazonaws.com/public/images/826d6425-8401-4806-b801-5ff758d5c69f_1280x1664.gif) <!-- .element: class="full" -->

https://blog.bytebytego.com/p/ep89-what-does-acid-mean <!-- .element: class="reference" -->

---

### TCL (Transaction Control Language)

Sans transaction :

```sql
UPDATE account SET balance = balance - 100 WHERE user = 'Alice';
UPDATE account SET balance = balance + 100 WHERE user = 'Bob';
```

Avec transaction :

```sql
BEGIN TRANSACTION;
UPDATE account SET balance = balance - 100 WHERE user = 'Alice';
UPDATE account SET balance = balance + 100 WHERE user = 'Bob';
COMMIT; -- ou ROLLBACK pour annuler
```

---

### États d'une transaction

```mermaid
stateDiagram-v2
  direction LR
  [*] --> Actif : BEGIN TRANSACTION
  Actif --> Actif : Requête SQL
  Actif --> Validé : COMMIT
  Actif --> Abandonné : ROLLBACK
  Validé --> Terminé
  Abandonné --> Terminé
```

---

## Indexation

| id  | name    | age | city     |
| --- | ------- | --- | -------- |
| 1   | Alice   | 25  | Lausanne |
| 2   | Bob     | 30  | Berne    |
| 3   | Charlie | 20  | Genève   |
| 4   | Dave    | 35  | Fribourg |
| 5   | Eve     | 20  | Lausanne |
| 6   | Frank   | 32  | Genève   |
| 7   | Grace   | 22  | Berne    |
| 8   | Harry   | 20  | Lausanne |

- &shy;<!-- .element: class="fragment" --> Les données dans une table sont **ordonnées** (stockage physique)
- &shy;<!-- .element: class="fragment" --> **Complexité** pour la colonne `city` (recherche, tri, etc.) :
  - **Recherche** (`WHERE city = 'Lausanne'`) : <span class="fragment">O(n)</span>
  - **Tri** (`ORDER BY city`) : <span class="fragment">O(n log n)</span>

---

### Données ordonnées

| id  | name    | age | city     |
| --- | ------- | --- | -------- |
| 2   | Bob     | 30  | Berne    |
| 7   | Grace   | 22  | Berne    |
| 4   | Dave    | 35  | Fribourg |
| 3   | Charlie | 20  | Genève   |
| 6   | Frank   | 32  | Genève   |
| 1   | Alice   | 25  | Lausanne |
| 5   | Eve     | 20  | Lausanne |
| 8   | Harry   | 20  | Lausanne |

- &shy;<!-- .element: class="fragment" --> Les lignes sont **ordonnées** par la colonne `city`
- &shy;<!-- .element: class="fragment" --> **Complexité** pour la colonne `city` :
  - **Recherche** (`WHERE city = 'Lausanne'`) : <span class="fragment">O(log n)</span>
  - **Tri** (`ORDER BY city`) : <span class="fragment">O(n) (parcours des lignes)</span>

---

![](https://upload.wikimedia.org/wikipedia/commons/0/09/Binary_search_vs_Linear_search_example_svg.svg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Binary_search_vs_Linear_search_example_svg.svg">Jochen Burghardt</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

---

### Complexité

| Opération   | Non ordonné | Ordonné  |
| ----------- | ----------- | -------- |
| Recherche   | O(n)        | O(log n) |
| Tri         | O(n log n)  | O(n)     |
| Ajout       | O(1)        | O(n)     |
| Suppression | O(n)        | O(n)     |

- &shy;<!-- .element: class="fragment" --> L'**ajout** (et la **suppression**) sont plus **coûteux** pour une table ordonnée

---

### Complexité

Pour une table avec 1'000 lignes :

| Opération   | Non ordonné | Ordonné |
| ----------- | ----------- | ------- |
| Recherche   | 1'000       | 10      |
| Tri         | 10'000      | 1'000   |
| Ajout       | 1           | 1'000   |
| Suppression | 1'000       | 1'000   |

---

### Complexité

Pour une table avec 1'000'000 lignes :

| Opération   | Non ordonné | Ordonné   |
| ----------- | ----------- | --------- |
| Recherche   | 1'000'000   | 20        |
| Tri         | 20'000'000  | 1'000'000 |
| Ajout       | 1           | 1'000'000 |
| Suppression | 1'000'000   | 1'000'000 |

---

### Complexité

![](https://www.sfeir.dev/content/images/2024/01/image-18.png) <!-- .element: class="full" -->

https://www.sfeir.dev/front/comprendre-la-complexite-des-algorithmes/ <!-- .element: class="reference" -->

---

### Un index

![](https://zestedesavoir.com/media/galleries/1255/04b01b04-6d8e-4e45-a0d8-e6d073db64d5.png) <!-- .element: class="full" -->

https://zestedesavoir.com/tutoriels/730/administrez-vos-bases-de-donnees-avec-mysql/949_index-jointures-et-sous-requetes/3935_index/ <!-- .element: class="reference" -->

---

### Plusieurs index

![](https://zestedesavoir.com/media/galleries/1255/bc5bfd35-b148-4ffb-9b24-0b7ddc9d9fee.png) <!-- .element: class="full-width" -->

https://zestedesavoir.com/tutoriels/730/administrez-vos-bases-de-donnees-avec-mysql/949_index-jointures-et-sous-requetes/3935_index/ <!-- .element: class="reference" -->

---

### Table d'index

![](https://learn.microsoft.com/fr-fr/azure/architecture/patterns/_images/index-table-figure-3.png) <!-- .element: class="full" -->

https://learn.microsoft.com/fr-fr/azure/architecture/patterns/index-table <!-- .element: class="reference" -->

---

### Indexation

- &shy;<!-- .element: class="fragment" --> Créer une **table d'index** selon un certain ordre
- &shy;<!-- .element: class="fragment" --> La table d'index contient les **références** des lignes de la table principale (comme une clé étrangère)
- &shy;<!-- .element: class="fragment" --> Accélère les **recherches** et les **tris** sur la colonne indexée
- &shy;<!-- .element: class="fragment" --> **Coût mémoire** supplémentaire pour stocker la table d'index
- &shy;<!-- .element: class="fragment" --> **Coût de temps** pour l'ajout et la suppression (mise à jour de l'index)

---

### Commandes SQL

- &shy;<!-- .element: class="fragment" --> Créer un index `idx_city` sur la colonne `city` de la table `person` :
  - ```sql
    CREATE INDEX idx_city ON person (city);
    ```
- &shy;<!-- .element: class="fragment" --> Les requêtes SQL utilisent automatiquement l'index si possible :
  - ```sql
    SELECT * FROM person WHERE city = 'Lausanne';
    ```

---

## Analyse

- &shy;<!-- .element: class="fragment" --> La commande `EXPLAIN` permet d'**analyser** comment une requête SQL sera exécutée
  - **Plan d'exécution** de la requête
  - ```sql
    EXPLAIN SELECT * FROM person WHERE city = 'Lausanne';
    ```

```plaintext
QUERY PLAN                                             |
-------------------------------------------------------+
Seq Scan on person  (cost=0.00..13.75 rows=2 width=242)|
  Filter: ((city)::text = 'Lausanne'::text)            |
```

<!-- .element: class="fragment" -->

- &shy;<!-- .element: class="fragment" --> **Seq Scan** : parcours séquentiel de la table
  - &shy;<!-- .element: class="fragment" --> **cost** : 0.00..13.75 (coût estimé de l'opération)
    - &shy;<!-- .element: class="fragment" --> **startup cost** : 0.00 (avant de donner le premier résultat)
    - &shy;<!-- .element: class="fragment" --> **total cost** : 13.75 (pour donner tous les résultats)
- &shy;<!-- .element: class="fragment" --> **Filter** : condition de la requête

---

## Analyse

- &shy;<!-- .element: class="fragment" --> La commande `EXPLAIN ANALYZE` y ajoute le **temps d'exécution** de chaque opération
  - **Plan d'exécution** de la requête
  - **Temps d'exécution** de chaque opération
  - ```sql
    EXPLAIN ANALYZE SELECT * FROM person WHERE city = 'Lausanne';
    ```

```plaintext
QUERY PLAN                                                                                       |
-------------------------------------------------------------------------------------------------+
Seq Scan on person  (cost=0.00..13.75 rows=2 width=242) (actual time=0.015..0.017 rows=3 loops=1)|
  Filter: ((city)::text = 'Lausanne'::text)                                                      |
  Rows Removed by Filter: 5                                                                      |
Planning Time: 0.053 ms                                                                          |
Execution Time: 0.029 ms                                                                         |
```

<!-- .element: class="fragment" -->

---

### Avec index

En ajoutant l'index `idx_city` sur la colonne `city` :

```plaintext
QUERY PLAN                                                                                            |
------------------------------------------------------------------------------------------------------+
Seq Scan on person_cours  (cost=0.00..1.10 rows=1 width=242) (actual time=0.008..0.009 rows=3 loops=1)|
  Filter: ((city)::text = 'Lausanne'::text)                                                           |
  Rows Removed by Filter: 5                                                                           |
Planning Time: 0.052 ms                                                                               |
Execution Time: 0.016 ms                                                                              |
```

- &shy;<!-- .element: class="fragment" --> Le **coût** de l'opération est passé de 13.75 à 1.10.
- &shy;<!-- .element: class="fragment" --> Le **temps d'exécution** est passé de 0.029 ms à 0.016 ms.
