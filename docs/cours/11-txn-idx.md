# 11 Transaction & Indexation

<Reaveal name="txn-idx" />

:::note[Objectifs]

Comment améliorer les performances d'une base de données ?

:::

## Exercices

### Transactions

Quelles sont les propriétés ACID qu'une transaction doit respecter ?

<details>
<summary>Réponse</summary>

- **Atomicité** : soit toutes les requêtes sont exécutées, soit aucune
- **Cohérence** : l'état de la base de données est valide avant et après
- **Isolation** : les transactions concurrentes ne se perturbent pas
- **Durabilité** : les changements sont persistants après la confirmation, même en cas de panne

</details>

Ajouter une nouvelle colonne `balance` de type `DECIMAL(5, 2)` pour stocker un montant à deux décimales et cinq chiffres au total (de -999,99 à 999,99) à la table `person` :

<details>
<summary>Solution</summary>

```sql
ALTER TABLE person ADD COLUMN balance DECIMAL(5, 2);
```

</details>

Remplir la colonne `balance` avec 100.00 pour tout le monde :

<details>
<summary>Solution</summary>

```sql
UPDATE person SET balance = 100.00;
```

</details>

Transférer 10.00 de la balance de `Alice` à `Bob` sans utiliser de transaction et en vérifiant l'état de la base de données après chaque requête :

<details>
<summary>Solution</summary>

```sql
UPDATE person SET balance = balance - 10.00 WHERE name = 'Alice';
UPDATE person SET balance = balance + 10.00 WHERE name = 'Bob';
```

</details>

Transférer 10.00 de la balance de `Alice` à `Bob` en utilisant une transaction et en vérifiant l'état de la base de données après chaque requête :

<details>
<summary>Solution</summary>

```sql
START TRANSACTION;
UPDATE person SET balance = balance - 10.00 WHERE name = 'Alice';
UPDATE person SET balance = balance + 10.00 WHERE name = 'Bob';
COMMIT;
```

</details>

À quel moment les changements sont-ils visibles dans la base de données ?

<details>
<summary>Solution</summary>

Les changements sont visibles après la confirmation de la transaction avec `COMMIT` et pas avant.

</details>

### Indexation

Rechercher toutes les données de la table `education` qui sont à Lausanne :

<details>
<summary>Solution</summary>

```sql
SELECT * FROM education WHERE geo_name = 'Lausanne';
```

</details>

Quel est le coût de cette requête ?

<details>
<summary>Solution</summary>

```sql
EXPLAIN SELECT * FROM education WHERE geo_name = 'Lausanne';
```

Le coût est de 62,06.

```plaintext
QUERY PLAN                                                  |
------------------------------------------------------------+
Seq Scan on education e  (cost=0.00..62.06 rows=15 width=55)|
  Filter: ((geo_name)::text = 'Lausanne'::text)             |
```

</details>

Comment pourrait-on améliorer les performances de cette requête en utilisant un index ? Quel en serait le gain sur le coût ?

<details>
<summary>Solution</summary>

Créer un index sur la colonne `geo_name` de la table `education` :

```sql
CREATE INDEX idx_geo_name ON education (geo_name);
```

En expliquant de nouveau la requête :

```sql
EXPLAIN SELECT * FROM education WHERE geo_name = 'Lausanne';
```

On obtient un coût de 29,82.

```plaintext
QUERY PLAN                                                                |
--------------------------------------------------------------------------+
Bitmap Heap Scan on education  (cost=4.40..29.82 rows=15 width=55)        |
  Recheck Cond: ((geo_name)::text = 'Lausanne'::text)                     |
  ->  Bitmap Index Scan on idx_geo_name  (cost=0.00..4.39 rows=15 width=0)|
        Index Cond: ((geo_name)::text = 'Lausanne'::text)                 |
```

</details>

Comment supprimer l'index créé précédemment ?

<details>
<summary>Solution</summary>

```sql
DROP INDEX idx_geo_name;
```

</details>

Optimiser la base de données pour la requête suivante :

```sql
SELECT * FROM education WHERE variable = 'obl_sec1_20' AND geo_name = 'Yverdon-les-Bains';
```

<details>
<summary>Indice 1</summary>

Cost = 0.28..8.30

<details>
<summary>Indice 2</summary>

Il est possible de créer un index sur plusieurs colonnes.

<details>
<summary>Solution</summary>

Créer un index sur les colonnes `variable` et `geo_name` de la table `education` :

```sql
CREATE INDEX idx_variable_geo_name ON education (variable, geo_name);
```

Pourquoi cet index est-il plus performant que deux index séparés ?

<details>
<summary>Solution 2</summary>

Une fois que la base de données a trouvé les lignes correspondantes à `variable`, elle peut directement chercher les lignes correspondantes à `geo_name` qui sont déjà triées.

</details>
</details>
</details>
</details>

### DBeaver sample database

- Créer le [DBeaver sample database](https://dbeaver.com/docs/dbeaver/Sample-Database/).
  - Ouvrir DBeaver
  - Menu `Help` > `Create Sample Base`
- Observer le diagramme entité-relation
  - Clic droit sur la base de données > `View Diagrams`
- Décrire ce que la base de données représente (contexte, entités, relations)

<details>
<summary>Solution</summary>

La base de données représente une boutique de musique en ligne. Elle contient les entités suivantes :

- `Track` : les musiques disponibles à la vente
  - Organisé par `Genre`, `Album` (+ `Artist`), `Media_type`
  - Système de `playlist` pour les musiques favorites
- `Invoice` : les factures des clients
  - Contient les `InvoiceLine` pour chaque musique achetée
  - Lié à `Customer` pour le client
    - Chaque client a un `Employee` de référence pour le suivi (support)

</details>

### PostgreSQL Exercises

https://pgexercises.com/questions/basic/

## Références

- https://fauna.com/blog/database-transaction
- https://fr.wikipedia.org/wiki/Propri%C3%A9t%C3%A9s_ACID
- https://fr.wikipedia.org/wiki/Index_(base_de_donn%C3%A9es)
- https://zestedesavoir.com/tutoriels/730/administrez-vos-bases-de-donnees-avec-mysql/949_index-jointures-et-sous-requetes/3935_index/
