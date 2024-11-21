# 10 SQL

<Reaveal name="sql" />

:::note[Objectifs]

Comment manipuler les données ?

:::

## Exercices

### PostgreSQL

- Installer [PostgreSQL](https://www.postgresql.org/download/).
  - macOS : `brew install postgresql`
    - Username : votre nom d'utilisateur (`whoami` pour le retrouver)
    - Password : aucun
    - Port : 5432
    - Database : comme le username
  - Windows : `choco install postgresql`
    - Username : `postgres`
    - Password : indiqué lors de l'installation
    - Port : 5432
    - Database : `postgres`
- Installer [DBeaver](https://dbeaver.io/download/).
  - macOS : `brew install --cask dbeaver-community`
  - Windows : `choco install dbeaver`
- Ouvrir DBeaver et se connecter à la base de données PostgreSQL.
  - Cliquer sur `Database` > `New Database Connection`.
  - Sélectionner `PostgreSQL`.
  - Remplir les champs selon les informations d'installation.
  - Cliquer sur `Test Connection` pour vérifier que tout fonctionne.
  - Cliquer sur `Finish`.

### Personne

- Ouvrir un nouveau SQL Editor.
  - Cliquer sur `SQL Editor` > `Open SQL Editor`.
- Créer une nouvelle table `person` avec les colonnes suivantes :
  - `id` : `SERIAL PRIMARY KEY` (clé primaire [entier auto-incrémentée](https://www.postgresql.org/docs/current/datatype-numeric.html))
  - `name` : `VARCHAR(50)` ([chaîne de caractères de 50 caractères maximum](https://www.postgresql.org/docs/current/datatype-character.html))
  - `email` : `VARCHAR(100)`
  - `age` : `SMALLINT` ([entier signé sur 2 octets](https://www.postgresql.org/docs/current/datatype-numeric.html))
  - Exécuter la commande suivante :
    ```sql
    CREATE TABLE person (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(100),
      age SMALLINT NOT NULL
    );
    ```
    - Cliquer sur <i class="ph ph-play"></i> (Execute SQL query) pour exécuter la commande.
    - Cliquer une seconde fois devrait indiquer une erreur car la table existe déjà.
  - Voir la table créée dans le volet "Database navigator" à gauche : nom de la connexion > `Database` > nom de la database > `Schemas` > `public` > `Tables` > `person`.
- Insérer des données dans la table `person`.
  - ```sql
    INSERT INTO person (name, email, age)
    VALUES
      ('Alice', 'alice@example.com', 28),
      ('Bob', 'bob@example.com', 20),
      ('Charlie', NULL, 25),
      ('Dave', NULL, 30);
    ```
  - Voir les données dans l'onglet "person" > "Data".
- Sélectionner toutes les données de la table `person`.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT * FROM person;
  ```
  </details>
- Sélectionner uniquement les noms et les âges des personnes.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT name, age FROM person;
  ```
  </details>
- Sélectionner dans l'ordre décroissant des âges.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT * FROM person 
  ORDER BY age DESC;
  ```
  </details>
- Sélectionner uniquement les personnes de plus de 25 ans.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT * FROM person 
  WHERE age > 25;
  ```
  </details>
- Sélectionner uniquement les noms des personnes de plus de 25 ans.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT name FROM person 
  WHERE age > 25;
  ```
  </details>
- Calculer la moyenne d'âge des personnes.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT AVG(age) FROM person;
  ```
  </details>

### Éducation

- Voici des données sur l'éducation en Suisse : https://opendata.swiss/fr/dataset/bildung
  - Télécharger le fichier au format CSV.
  - Ouvrir le fichier pour observer les données.
    - `geo_name` : nom du lieu
    - `variable` : [degré d'études](https://www.vd.ch/formation/enseignement-obligatoire-et-pedagogie-specialisee/deroulement-de-lecole-obligatoire-dans-le-canton-de-vaud)
      - `schu_t_20` : élèves totaux en 2020/21
      - `obl_t_20` : total obligatoire en 2020/21
        - `obl_p12_20` : 1P-2P en 2020/21
        - `obl_p38_20` : 3P-8P en 2020/21
        - `obl_sec1_20` : secondaire 1 (9S-11S) en 2020/21
      - `sec_t_20` : total secondaire 2 en 2020/21
        - `sec_tran_20` : formation transitoire sec1-sec2 en 2020/21
        - `sec_mat_20` : maturités (RRM, MS, MP2) en 2020/21
        - `sec_pro_20` : formation professionnelle initiale en 2020/21
        - `sec_gen_20` : autres écoles de formation générale en 2020/21
        - `sec_comp_20` : formation complémentaires sec2 en 2020/21
  - La description des données se trouve dans le fichier ODS.
- Créer une nouvelle table `education` avec les colonnes suivantes :
  - `id` : `SERIAL PRIMARY KEY`
  - `geo_nr` : `VARCHAR(4)`
  - `geo_name` : `VARCHAR(22)`
  - `class_hab` : `VARCHAR(5)`
  - `geom_period` : `DATE`
  - `variable` : `VARCHAR(11)`
  - `source` : `CHAR(3)` ([chaîne de 3 caractères exactement](https://www.postgresql.org/docs/current/datatype-character.html))
  - `value_period` : `CHAR(7)`
  - `unit_value` : `CHAR(3)`
  - `value` : `INTEGER` ([entier signé sur 4 octets](https://www.postgresql.org/docs/current/datatype-numeric.html))
  - `status` : `CHAR(1)`
  - Exécuter la commande suivante :
    ```sql
    CREATE TABLE education (
      id SERIAL PRIMARY KEY,
      geo_nr VARCHAR(4) NOT NULL,
      geo_name VARCHAR(22) NOT NULL,
      class_hab VARCHAR(5) NOT NULL,
      geom_period DATE NOT NULL,
      variable VARCHAR(11) NOT NULL,
      source CHAR(3) NOT NULL,
      value_period CHAR(7) NOT NULL,
      unit_value CHAR(3) NOT NULL,
      value INTEGER NOT NULL,
      status CHAR(1) NOT NULL
    );
    ```
- Importer les données du fichier CSV dans la table `education`.
  - Clic droit sur la table `education` (dans la Database Navigator) > `Import Data`.
  - Sélectionner le fichier CSV.
  - Vérifier que les colonnes soient correctement associées.
  - Cliquer sur `Proceed`.
  - Vérifier les données dans la table `education`.
- Sélectionner toutes les villes disponibles.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT DISTINCT geo_name FROM education;
  ```
  </details>
- Sélectionner toutes les données concernant les élèves de Lausanne.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT * FROM education 
  WHERE geo_name = 'Lausanne';
  ```
  </details>
- Sélectionner le nombre d'élèves avec leur lieu au secondaire 1 dans toutes les villes.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT geo_name, value FROM education 
  WHERE variable = 'obl_sec1_20';
  ```
  </details>
  - Dans l'ordre décroissant des élèves.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT geo_name, value FROM education 
    WHERE variable = 'obl_sec1_20' 
    ORDER BY value DESC;
    ```
    </details>
  - Ne prendre que les 5 premières villes.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT geo_name, value FROM education 
    WHERE variable = 'obl_sec1_20' 
    ORDER BY value DESC LIMIT 5;
    ```
    </details>
  - Ne prendre que les 5 premières villes après les 3 premières.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT geo_name, value FROM education 
    WHERE variable = 'obl_sec1_20' 
    ORDER BY value DESC LIMIT 5 OFFSET 3;
    ```
    </details>
  - Exclure les données de la Suisse.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT geo_name, value FROM education 
    WHERE variable = 'obl_sec1_20' AND geo_name <> 'Schweiz / Suisse';
    ```
    </details>
    - Calculer la moyenne d'élèves au secondaire 1
      <details>
      <summary>Solution</summary>
      ```sql
      SELECT AVG(value) FROM education 
      WHERE variable = 'obl_sec1_20' AND geo_name <> 'Schweiz / Suisse';
      ```
      </details>
    - Calculer le total d'élèves au secondaire 1
      <details>
      <summary>Solution</summary>
      ```sql
      SELECT SUM(value) FROM education 
      WHERE variable = 'obl_sec1_20' AND geo_name <> 'Schweiz / Suisse';
      ```
      </details>
- Lister dans l'ordre croissant le nombre d'élèves par ville pour les maturités en excluant les données de la Suisse ainsi que les villes qui n'ont pas d'élèves.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT geo_name, value FROM education 
  WHERE variable = 'sec_mat_20' 
    AND geo_name <> 'Schweiz / Suisse' 
    AND value > 0 
  ORDER BY value ASC;
  ```
  </details>

### Avis de films

Reprendre ta table `person` et l'étendre pour gérer des avis de films.

- Créer une nouvelle table `movie` avec les colonnes suivantes :
  - `id` : `SERIAL PRIMARY KEY`
  - `title` : `VARCHAR(100)`
  - `year` : `SMALLINT`
  - <details>
    <summary>Solution</summary>
    ```sql
    CREATE TABLE movie (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      year SMALLINT NOT NULL
    );
    ```
    </details>
- Insérer des données dans la table `movie`.
  - ```sql
    INSERT INTO movie (title, year)
    VALUES
      ('Memento', 2000),
      ('The Prestige', 2006),
      ('The Dark Knight', 2008),
      ('Inception', 2010),
      ('Interstellar', 2014),
      ('Dunkirk', 2017),
      ('Tenet', 2020),
      ('Oppenheimer', 2023);
    ```
- Créer une nouvelle table `review` avec les colonnes suivantes :
  - `id` : `SERIAL PRIMARY KEY`
  - `rating` : `SMALLINT` (note de 1 à 6)
  - `comment` : `TEXT` (chaîne de caractères sans limite de taille)
  - `person_id` : `INTEGER` (clé étrangère vers la table `person`)
  - `movie_id` : `INTEGER` (clé étrangère vers la table `movie`)
  - ```sql
    CREATE TABLE review (
      id SERIAL PRIMARY KEY,
      rating SMALLINT NOT NULL,
      comment TEXT,
      person_id INTEGER NOT NULL,
      movie_id INTEGER NOT NULL,
      FOREIGN KEY (person_id) REFERENCES person (id),
      FOREIGN KEY (movie_id) REFERENCES movie (id)
    );
    ```
- Insérer les données dans la table `review` avec les avis suivants :
  - Alice a noté `Memento` 5/6.
  - Alice a noté `Dinkirk` 3/6 avec le commentaire `Pas mal`.
  - Bob a noté `Memento` 1/6 avec le commentaire `Je n'ai rien compris` (il faudra [échapper](https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement) l'apostrophe).
  - Dave a noté `Tenet` 4/6.
  - Charlie a noté `Memento` 6/6 avec le commentaire `Chef-d'œuvre`.
  - Bob a noté `Dinkirk` 2/6 avec le commentaire `Bof`.
  - Charlie a noté `Oppenheimer` 4/6 avec le commentaire `Sympa`.
  - <details>
    <summary>Solution</summary>
    ```sql
    INSERT INTO review (rating, comment, person_id, movie_id)
    VALUES
      (5, NULL, 1, 1),
      (3, 'Pas mal', 1, 6),
      (1, 'Je n''ai rien compris', 2, 1),
      (4, NULL, 4, 7),
      (6, 'Chef-d''œuvre', 3, 1),
      (2, 'Bof', 2, 6),
      (4, 'Sympa', 3, 8);
    ```
    </details>
- Sélectionner les avis de tout le monde sur tous les films.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT * FROM review
  JOIN movie ON review.movie_id = movie.id
  JOIN person ON review.person_id = person.id;
  ```
  </details>
  - Ne garder que les titres, les notes et les commentaires.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT title, rating, comment FROM review
    JOIN movie ON review.movie_id = movie.id
    JOIN person ON review.person_id = person.id;
    ```
    </details>
    - Ne garder que les avis de Bob.
      <details>
      <summary>Solution</summary>
      ```sql
      SELECT title, rating, comment FROM review
      JOIN movie ON review.movie_id = movie.id
      JOIN person ON review.person_id = person.id
      WHERE person.name = 'Bob';
      ```
      </details>
  - Ne garder que les avis sur `Memento` avec le nom de la personne au lieu du titre du film.
    <details>
    <summary>Solution</summary>
    ```sql
    SELECT name, rating, comment FROM review
    JOIN movie ON review.movie_id = movie.id
    JOIN person ON review.person_id = person.id
    WHERE movie.title = 'Memento';
    ```
    </details>
    - Ne garder que les avis de plus de 3/6 sur `Memento`.
      <details>
      <summary>Solution</summary>
      ```sql
      SELECT name, rating, comment FROM review
      JOIN movie ON review.movie_id = movie.id
      JOIN person ON review.person_id = person.id
      WHERE movie.title = 'Memento' AND rating > 3;
      ```
      </details>
- Calculer la moyenne des notes de `Memento`.
  <details>
  <summary>Solution</summary>
  ```sql
  SELECT AVG(rating) FROM review
  JOIN movie ON review.movie_id = movie.id
  WHERE movie.title = 'Memento';
  ```
  </details>

## Références

- https://www.datawithbaraa.com/sql-introduction/
- https://www.guru99.com/fr/sql-commands-dbms-query.html
- https://learnsql.fr/blog/que-sont-ddl-dml-dql-et-dcl-en-sql/
- https://sql.sh/
- https://vladmihalcea.com/tutorials/sql/
