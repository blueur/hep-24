# SQL

Programmation Web et bases de données

---

## Structured Query Language (SQL)

- &shy;<!-- .element: class="fragment" --> Prononcé **SQL** `/ɛs kjuː ɛl/` ou **sequel** `/ˈsiːkwəl/`.
- &shy;<!-- .element: class="fragment" --> **Langage** pour manipuler des bases de données **relationnelles** depuis 1974.
- &shy;<!-- .element: class="fragment" --> Norme **ISO** depuis 1987 pour DBMS relationnels.
- &shy;<!-- .element: class="fragment" --> Proche d'un langage **naturel** pour faciliter l'apprentissage.

![](https://upload.wikimedia.org/wikipedia/commons/a/aa/SQL_ANATOMY_wiki.svg) <!-- .element: class="fragment full-width" -->

https://commons.wikimedia.org/wiki/File:SQL_ANATOMY_wiki.svg <!-- .element: class="reference" -->

---

### ISO 8601

![](https://imgs.xkcd.com/comics/iso_8601.png) <!-- .element: class="full" -->

https://xkcd.com/1179/ <!-- .element: class="reference" -->

---

### Standards

![](https://imgs.xkcd.com/comics/standards.png) <!-- .element: class="full" -->

https://xkcd.com/927/ <!-- .element: class="reference" -->

---

### Tables SQL

![](https://www.datawithbaraa.com/wp-content/uploads/2021/10/sqltable-1-1536x702.png) <!-- .element: class="full" -->

https://www.datawithbaraa.com/sql-introduction/sql-tables/ <!-- .element: class="reference" -->

---

## Commandes SQL

- &shy;<!-- .element: class="fragment" --> **DDL** (Data **Definition** Language)
  - `CREATE`, `ALTER`, `DROP`, `TRUNCATE`
- &shy;<!-- .element: class="fragment" --> **DML** (Data **Manipulation** Language)
  - `INSERT`, `UPDATE`, `DELETE`
- &shy;<!-- .element: class="fragment" --> **DQL** (Data **Query** Language)
  - `SELECT`
- &shy;<!-- .element: class="fragment" --> **DCL** (Data **Control** Language)
  - `GRANT`, `REVOKE`
- &shy;<!-- .element: class="fragment" --> **TCL** (**Transaction** Control Language)
  - `COMMIT`, `ROLLBACK`, `SAVEPOINT`

---

### DDL

- Data **Definition** Language
- &shy;<!-- .element: class="fragment" --> Définition de la **structure** des données (tables, vues, index, &hellip;)
  - &shy;<!-- .element: class="fragment" --> `CREATE` : **créer** une table (et ses colonnes)
  - &shy;<!-- .element: class="fragment" --> `ALTER` : **modifier** une table (ajouter, modifier ou supprimer une colonne)
  - &shy;<!-- .element: class="fragment" --> `DROP` : **supprimer** une table (et ses données)
  - &shy;<!-- .element: class="fragment" --> `TRUNCATE` : **vider** une table (sans la supprimer)

```sql
CREATE TABLE table1 (
  colonne1 type1,
  colonne2 type2
);
ALTER TABLE table1 ADD colonne type;
DROP TABLE table1;
TRUNCATE TABLE table1;
```

---

### DML

- Data **Manipulation** Language
- &shy;<!-- .element: class="fragment" --> Manipulation des **données** dans les tables
  - &shy;<!-- .element: class="fragment" --> `INSERT` : **ajouter** des lignes dans une table
  - &shy;<!-- .element: class="fragment" --> `UPDATE` : **modifier** des lignes existantes
  - &shy;<!-- .element: class="fragment" --> `DELETE` : **supprimer** des lignes existantes

```sql
INSERT INTO table1 (colonne1, colonne2) VALUES (value1, value2);
UPDATE table1 SET colonne = value WHERE condition1;
DELETE FROM table1 WHERE condition1;
```

---

### DQL

- Data **Query** Language
- &shy;<!-- .element: class="fragment" --> **Interrogation** des données dans les tables
  - &shy;<!-- .element: class="fragment" --> `SELECT` : sélectionner des **colonnes** dans une table
    - &shy;<!-- .element: class="fragment" --> `*` : toutes les colonnes
    - &shy;<!-- .element: class="fragment" --> `WHERE` : filtrer les **lignes** sélectionnées
    - &shy;<!-- .element: class="fragment" --> `JOIN` : **joindre** plusieurs tables pour une requête (**clés** primaire/étrangère)
- &shy;<!-- .element: class="fragment" --> Résultat sous forme de **table**

```sql
SELECT colonne1, colonne2 FROM table1 WHERE condition1;
SELECT * FROM table1;

SELECT * FROM table1 JOIN table2 ON table1.colonne = table2.colonne;
SELECT * FROM table1 JOIN table2 ON table1.colonne = table2.colonne WHERE condition1;
```

---

### Conditions

```sql
SELECT * FROM table1 WHERE colonne = value;
SELECT * FROM table1 WHERE colonne > value;
SELECT * FROM table1 WHERE colonne <= value;
SELECT * FROM table1 WHERE colonne <> value; -- ou !=
SELECT * FROM table1 WHERE colonne IS NULL;
SELECT * FROM table1 WHERE colonne IS NOT NULL;
SELECT * FROM table1 WHERE colonne BETWEEN value1 AND value2;
SELECT * FROM table1 WHERE colonne IN (value1, value2);
SELECT * FROM table1 WHERE colonne LIKE 'value%';
SELECT * FROM table1 WHERE condition1 AND condition2;
SELECT * FROM table1 WHERE condition1 OR condition2;
SELECT * FROM table1 WHERE NOT condition1;
```

---

### Fonctions

Pour appliquer des **opérations** sur les données dans les requêtes :

```sql
SELECT COUNT(colonne) FROM table1;
SELECT SUM(colonne) FROM table1;
SELECT AVG(colonne) FROM table1;
SELECT MIN(colonne) FROM table1;
SELECT MAX(colonne) FROM table1;
SELECT DISTINCT colonne FROM table1;
SELECT colonne1, colonne2 FROM table1 ORDER BY colonne1 ASC, colonne2 DESC;
```

---

### DCL

- Data **Control** Language
- &shy;<!-- .element: class="fragment" --> Gestion des **droits** d'accès aux données
  - &shy;<!-- .element: class="fragment" --> `GRANT` : **accorder** des droits d'accès
  - &shy;<!-- .element: class="fragment" --> `REVOKE` : **retirer** des droits accordés

```sql
GRANT SELECT ON table1 TO user1;
REVOKE SELECT ON table1 FROM user1;
```

---

### TCL

- **Transaction** Control Language
- Dans le prochain épisode&hellip;

---

## PostgreSQL

![](https://www.postgresql.org/media/img/about/press/elephant.png) <!-- .element: class="half" -->

- &shy;<!-- .element: class="fragment" --> Système de gestion de base de données **relationnelles**.
- &shy;<!-- .element: class="fragment" --> **Open-source** depuis 1996 et conforme à la norme **SQL**.
- &shy;<!-- .element: class="fragment" --> Documentation complète et **communauté** active.
- &shy;<!-- .element: class="fragment" --> Deuxième DBMS le plus utilisé après **MySQL**.
- &shy;<!-- .element: class="fragment" --> **pgAdmin** : interface graphique pour PostgreSQL.
