# 09 Base de données

<Reaveal name="database" />

:::note[Objectifs]

Comment structurer les données ?

:::

## Exercices

### Modélisation de données

#### Banque

Compléter le modèle entité-association suivant :

- Chaque banque a un code SWIFT, un nom et une adresse.
- Chaque client a un numéro de client, un nom, un prénom et optionnellement un numéro de téléphone.
- Chaque compte a un numéro de compte, un solde et une date d'ouverture.
- Chaque filiale a un numéro de filiale et une adresse.

Choisir et justifier les clés primaires ainsi que les cardinalités des relations.

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Banque {
}
entity Client {
}
entity Compte {
}
entity Filiale {
}

Banque -- Filiale
Banque -- Compte
Client -- Compte
@enduml
```

<details>
<summary>Solution</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Banque {
  *code_swift : text
  --
  *nom : text
  *adresse : text
}
entity Client {
  *numero_client : number <<generated>>
  --
  *nom : text
  *prenom : text
  telephone : text
}
entity Compte {
  *numero_compte : number <<generated>>
  --
  *solde : number
  *date_ouverture : date
}
entity Filiale {
  *numero_filiale : number <<generated>>
  --
  *adresse : text
}

Banque ||--|{ Filiale
Banque ||--o{ Compte
Client ||--|{ Compte
@enduml
```

- Clés primaires :
  - Banque : code_swift
  - Client : numero_client
  - Compte : numero_compte
  - Filiale : numero_filiale
- Cardinalités :
  - Chaque client peut avoir un ou plusieurs comptes (éventuellement aucun, mais difficile de nos jours).
  - Chaque compte appartient à un seul client (éventuellement plusieurs si compte joint).
  - Chaque banque peut avoir une ou plusieurs filiales (éventuellement aucune pour les néo-banques).
  - Chaque filiale appartient à une seule banque.
  - Chaque banque peut avoir zéro ou plusieurs comptes.
  - Chaque compte appartient à une seule banque.

</details>

Ajouter les clés étrangères (FK) dans le modèle précédent.

<details>
<summary>Solution</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Banque {
  *code_swift : text
  --
  *nom : text
  *adresse : text
}
entity Client {
  *numero_client : number <<generated>>
  --
  *nom : text
  *prenom : text
  telephone : text
}
entity Compte {
  *numero_compte : number <<generated>>
  --
  *solde : number
  *date_ouverture : date
  *banque_code_swift : text <<FK>>
  *client_numero_client : number <<FK>>
}
entity Filiale {
  *numero_filiale : number <<generated>>
  --
  *adresse : text
  *banque_code_swift : text <<FK>>
}

Banque ||--|{ Filiale
Banque ||--o{ Compte
Client ||--|{ Compte
@enduml
```

</details>

#### Bibliothèque

Dessiner le modèle entité-association suivant (ajouter des attributs pour les clés primaires si nécessaire) :

- Modéliser la base de données d'une bibliothèque pour gérer les livres, les emprunts et les lecteurs :
  - Chaque livre a un titre, un auteur et un éditeur.
  - Chaque emprunt a une date de début, une date de fin et un statut (en cours, terminé, retardé).
  - Chaque lecteur a un nom, un prénom et une date de naissance (optionnel).
- Ajouter les clés étrangères (FK) nécessaires.

<details>
<summary>Solution</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Livre {
  *isbn : number
  --
  *titre : text
  *auteur : text
  *editeur : text
}
entity Emprunt {
  *id : number <<generated>>
  --
  *date_debut : date
  *date_fin : date
  *statut : text
  *livre_isbn : number <<FK>>
  *lecteur_id : number <<FK>>
}
entity Lecteur {
  *id : number <<generated>>
  --
  *nom : text
  *prenom : text
  date_naissance : date
}

Livre ||--o{ Emprunt
Lecteur ||--o{ Emprunt
@enduml
```

</details>

Quelle serait la relation entre les entités `Livre` et `Lecteur` si on n'avait pas besoin de garder l'historique des emprunts ?

<details>
<summary>Solution</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Livre {
  *isbn : number
  --
  *titre : text
  *auteur : text
  *editeur : text
}
entity Lecteur {
  *id : number <<generated>>
  --
  *nom : text
  *prenom : text
  date_naissance : date
}

Livre }o--o{ Lecteur
@enduml
```

- Chaque livre peut être emprunté par zéro ou plusieurs lecteurs.
- Chaque lecteur peut emprunter zéro ou plusieurs livres.

</details>

Ajouter les clés étrangères (FK) nécessaires.

<details>

<summary>Solution</summary>

Pour une relation de type _Many-to-Many_ (plusieurs à plusieurs), on doit ajouter une table intermédiaire (similaire à l'`Emprunt`) :

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Livre {
  *isbn : number
  --
  *titre : text
  *auteur : text
  *editeur : text
}
entity Lecteur {
  *id : number <<generated>>
  --
  *nom : text
  *prenom : text
  date_naissance : date
}
entity Emprunt {
  *livre_isbn : number <<FK>>
  *lecteur_id : number <<FK>>
}

Livre ||--o{ Emprunt
Lecteur ||--o{ Emprunt
@enduml
```

</details>

#### Magasin

Dessiner le modèle ER pour un magasin de produits divers :

- Chaque produit a un nom, un prix et une quantité en stock.
- Chaque commande a une date, des articles avec leur quantité et un client.
- Chaque client a un nom, une adresse et un numéro de téléphone.

Justifier quels attributs sont obligatoires ou optionnels (la solution peut varier).

<details>
<summary>Solution</summary>

```kroki type=plantuml
@startuml
skinparam linetype ortho
entity Produit {
  *id : number <<generated>>
  --
  *nom : text
  *prix : number
  quantite_stock : number
}
entity Commande {
  *id : number <<generated>>
  --
  *date : date
  *client_id : number <<FK>>
}
entity Client {
  *id : number <<generated>>
  --
  *nom : text
  *adresse : text
  telephone : text
}
entity Article {
  *id : number <<generated>>
  --
  *quantite : number
  *produit_id : number <<FK>>
  *commande_id : number <<FK>>
}

Produit ||--o{ Article
Commande ||--|{ Article
Client ||--o{ Commande
@enduml
```

</details>

## Références

- https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/
- http://sql.bdpedia.fr/intro.html
- https://www.lemagit.fr/conseil/Les-sept-modeles-de-donnees-les-plus-utilises-en-entreprise
- https://www.lucidchart.com/pages/fr/diagramme-entite-association
- https://datascientest.com/sgbd-tout-savoir

### Exercices

- https://gquercini.github.io/courses/databases/tutorials/data-modeling/
- https://www.richardtwatson.com/open/Reader/answers/chapter07.html
