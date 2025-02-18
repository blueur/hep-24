# Base de données

Programmation Web et bases de données

---

## Base de données

- Base de données (BD) - Database (**DB**)
- &shy;<!-- .element: class="fragment" --> Donnée ?
  - &shy;<!-- .element: class="fragment" --> Une **information**
- &shy;<!-- .element: class="fragment" --> Base de données ?
  - &shy;<!-- .element: class="fragment" --> Un ensemble **organisé** de données
- &shy;<!-- .element: class="fragment" --> Exemples :
  - Carnet d'adresses
  - Annuaire téléphonique
  - Bibliothèque
  - ...

---

## Système de gestion de base de données

- Système de gestion de base de données (SGBD) - Database Management System (**DBMS**)
- &shy;<!-- .element: class="fragment" --> **Logiciel** permettant de stocker, manipuler et interroger des données
- &shy;<!-- .element: class="fragment" --> Exemples :
  - MySQL
  - PostgreSQL
  - SQLite
  - MongoDB
  - ...

---

## Système de gestion de base de données

![](https://www.datawithbaraa.com/wp-content/uploads/2021/10/SQLWork-1536x528.png) <!-- .element: class="full-width" -->

https://www.datawithbaraa.com/sql-introduction/sql-introduction/ <!-- .element: class="reference" -->

---

## Nomenclature

![](https://www.datawithbaraa.com/wp-content/uploads/2021/10/sqltable-1-1536x702.png) <!-- .element: class="full" -->

https://www.datawithbaraa.com/sql-introduction/sql-tables/ <!-- .element: class="reference" -->

---

## Architecture Ansi/Sparc

![](https://upload.wikimedia.org/wikipedia/commons/5/5c/ANSI-SPARC_DB_model.jpg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:ANSI-SPARC_DB_model.jpg">​Wikipedia user X00022027</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

---

## Architecture Ansi/Sparc

| Niveau     | Utilisé par                  | Description                                       |
| ---------- | ---------------------------- | ------------------------------------------------- |
| Externe    | Programmeur·euse applicatif  | Vue partielle de la DB (selon les droits d'accès) |
| Conceptuel | DBA (Database administrator) | Vue complète de la DB                             |
| Interne    | Programmeur·euse du DBMS     | Comment est stockée l'information (fichiers)      |

- &shy;<!-- .element: class="fragment" --> Une même base de donnée peut être mutualisée par plusieurs applications.
  - &shy;<!-- .element: class="fragment" --> Chaque application peut avoir une vue différente de la base de données.

---

## Modèle entité-association

- Entity–relationship model (ER model)
- &shy;<!-- .element: class="fragment" --> Une **représentation** graphique d'une base de données relationnelle (**modélisation** conceptuelle)

```kroki plantuml half fragment
@startuml
entity Artiste {
}
entity Chanson {
}

Artiste ||--|{ Chanson
@enduml
```

---

### Entité

```kroki plantuml full
@startuml
entity Artiste {
  *id : number <<generated>>
  --
  *nom : text
  nom_de_scene : text
  *date_de_naissance : date
}
@enduml
```

---

### Entité

- _Entité_ : Artiste
  - Qui/Quoi ?
- &shy;<!-- .element: class="fragment" --> _Clé primaire_ (Primary key, _PK_) : id
  - Comment l'identifier de manière unique ?
- &shy;<!-- .element: class="fragment" --> _Attributs_ : nom, nom_de_scene, date_de_naissance
  - Quelles sont ses propriétés/caractéristiques ?
  - Obligatoire (nom, date_de_naissance) ou facultatif (nom_de_scene).
- &shy;<!-- .element: class="fragment" --> Exemples :
  | id | nom | nom_de_scene | date_de_naissance |
  | :-: | ---------------- | ----------------- | ----------------- |
  | 1 | "Fanny Diercksen" | "Phanee de Pool" | 1984-06-06 |
  | 2 | "Cécile Corbel" | | 1980-03-28 |

---

### Limitation(s) ?

```kroki plantuml half
@startuml
entity Artiste {
  *id : number <<generated>>
  --
  *nom : text
  nom_de_scene : text
  *date_de_naissance : date
}
@enduml
```

- &shy;<!-- .element: class="fragment" --> Nom réel inconnu ? (ex. Daft Punk)
- &shy;<!-- .element: class="fragment" --> Date de naissance inconnue ?

---

### Association

```kroki plantuml full
@startuml
entity Artiste {
  *id : number <<generated>>
  --
  *nom : text
  nom_de_scene : text
  *date_de_naissance : date
}
entity Chanson {
  *id : number <<generated>>
  --
  *titre : text
  *secondes : number
  *artiste_id : number <<FK>>
}
Artiste ||--|{ Chanson
@enduml
```

---

### Association

![](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/erd-symbols/ERD-Notation.PNG) <!-- .element: class="full" -->

https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning <!-- .element: class="reference" -->

---

#### One-to-Many

Exemple : Artiste joue Chanson

- &shy;<!-- .element: class="fragment" --> **Relation** entre les entités Artiste et Chanson
  - Chaque Artiste peut jouer **plusieurs** Chanson
  - Chaque Chanson est jouée par **un seul** Artiste
- &shy;<!-- .element: class="fragment" --> **Clé étrangère** (Foreign key, **FK**) : artiste_id
  - &shy;<!-- .element: class="fragment" --> **Référence** à la clé primaire de l'entité Artiste
- &shy;<!-- .element: class="fragment" --> Chanson
  | id | titre | secondes | artiste_id |
  | :-: | ---------------------- | -------- | ---------- |
  | 1 | "Arrietty's Song" | 206 | 2 |
  | 2 | "The Neglected Garden" | 253 | 2 |
  | 3 | "Algorithme" | 232 | 1 |
- &shy;<!-- .element: class="fragment" --> Zero-or-One-to-Many
  - &shy;<!-- .element: class="fragment" --> Un artiste peut ne pas avoir de chanson

---

#### Many-to-Many

Si plusieurs artistes jouent la même chanson ?

- &shy;<!-- .element: class="fragment" --> Chaque Artiste peut jouer **plusieurs** Chanson
- &shy;<!-- .element: class="fragment" --> Chaque Chanson peut être jouée par **plusieurs** Artiste
- &shy;<!-- .element: class="fragment" --> Utilisation d'un **table de liaison** (ou table de jointure)
  - One-to-Many entre Artiste et la table de liaison Artiste_Chanson
  - One-to-Many entre Chanson et la table de liaison Artiste_Chanson
  - La table de liaison est composée de deux **clés** étrangères

![](https://sqlmodel.tiangolo.com/img/tutorial/many-to-many/many-to-many.svg) <!-- .element: class="fragment" -->

https://sqlmodel.tiangolo.com/tutorial/many-to-many/create-models-with-link/ <!-- .element: class="reference" -->

---

#### One-to-One

Exemple : Pays a Capitale

- &shy;<!-- .element: class="fragment" --> **Relation** entre les entités Pays et Capitale
  - Chaque Pays a **une seule** Capitale
  - Chaque Capitale est la capitale d'**un seul** Pays
- &shy;<!-- .element: class="fragment" --> Peut être **fusionné** en une seule entité : Pays
  | id | nom | capitale |
  | :-: | ---------------- | ---------- |
  | 1 | "Suisse" | "Berne" |
  | 2 | "France" | "Paris" |
- &shy;<!-- .element: class="fragment" --> **Clé étrangère** unique dans une des deux entités : Capitale
  | id | nom | pays_id |
  | :-: | ---------------- | -------- |
  | 42 | "Berne" | 1 |
  | 16 | "Paris" | 2 |

---

#### Exemples

<div class="columns">
<div>

```kroki plantuml full
@startuml
entity "Classe" {
}
entity "Directeur·ice" {
}
entity "École" {
}
entity "Enseignant·e" {
}

"Enseignant·e" }|--o{ "Classe"
"Classe" }|--|| "École"
"École" |o--|| "Directeur·ice"
@enduml
```

</div>
<div>

- &shy;<!-- .element: class="fragment" --> Chaque **classe** peut être enseignée par un·e ou plusieurs **enseignants**
- &shy;<!-- .element: class="fragment" --> Chaque **enseignant·e** peut avoir zéro, une ou plusieurs **classes**
- &shy;<!-- .element: class="fragment" --> Chaque **école** a une ou plusieurs **classes**
- &shy;<!-- .element: class="fragment" --> Chaque **classe** appartient à une **école**
- &shy;<!-- .element: class="fragment" --> Chaque **directeur·ice** gère zéro ou une **école**
- &shy;<!-- .element: class="fragment" --> Chaque **école** a un·e **directeur·ice**

</div>
</div>

---

### Résumé

- _Entité_
  - &shy;<!-- .element: class="fragment" --> **Objet** du monde réel (table)
- _Association_
  - &shy;<!-- .element: class="fragment" --> **Relation** entre les entités (clé étrangère)
- _Attribut_
  - &shy;<!-- .element: class="fragment" --> **Propriété** d'une entité (colonne)
- _Clé primaire_ (PK)
  - &shy;<!-- .element: class="fragment" --> Attribut **unique** identifiant un élément de l'entité
- _Clé étrangère_ (FK)
  - &shy;<!-- .element: class="fragment" --> Attribut faisant **référence** à une clé primaire d'une autre entité

---

### Notation

```kroki plantuml full
@startuml
entity Entité {
  * cle_primaire
  --
  * attribut_obligatoire
  attribut_facultatif
  cle_etrangere <<FK>>
}
@enduml
```
