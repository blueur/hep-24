# 12 NoSQL

<Reaveal name="nosql" />

:::note[Objectifs]

Qu'est-ce qu'une base de données non relationnelle ?

:::

## Exercices

### Quiz

Le NoSQL c'est une base de données qui (plusieurs réponses possibles) :

- [ ] Permet la tolérance aux pannes
- [ ] Permet la gestion des transactions concurrentielles
- [ ] Permet la distribution des données et des requêtes
- [ ] Permet de distribuer des calculs lourds
- [ ] Permet de stocker des données structurées

<details>
<summary>Solution</summary>

- Permet la tolérance aux pannes
- Permet la distribution des données et des requêtes

</details>

Lesquelles de ces propriétés de type BASE sont associée aux bases NoSQL :

- [ ] Availability
- [ ] Eventually consistent
- [ ] Atomicity
- [ ] Soft-state
- [ ] Efficiency
- [ ] Scalability
- [ ] Basically Available
- [ ] Consistency
- [ ] Blocking

<details>
<summary>Solution</summary>

- Basically Available
- Soft-state
- Eventually consistent

</details>

Lesquelles de ces propriétés font partie du théorème de CAP :

- [ ] Consensus
- [ ] Partition Tolerance
- [ ] Consistency
- [ ] Atomicity
- [ ] Availability
- [ ] Partitioning

<details>
<summary>Solution</summary>

- Consistency
- Availability
- Partition Tolerance

</details>

### Sauvegarde de données

Vos messages sur WhatsApp peuvent être sauvegardés sur Google Drive ou iCloud. Qu'est-ce qui serait mieux à faire par rapport à la règle 3-2-1 ? Comparer les deux façons (avec et sans sauvegarde sur le cloud) et quelles sont les risques associés ?

<details>
<summary>Réponse possible</summary>

Sans sauvegarde sur le cloud, vos données ne sont qu'à un seul endroit. Si votre téléphone est perdu ou cassé, vous perdez tous vos messages. D'après la règle 3-2-1, on n'aurait que 1-1-0.

Avec une sauvegarde sur le cloud, vos données sont répliquées sur un serveur distant. Vous pourrez les récupérer même si votre téléphone est perdu ou cassé. D'après la règle 3-2-1, on aurait 2-2-1. Il y a bien moins de risques de perdre votre téléphone et votre sauvegarde en même temps.

</details>

### Théorème CAP

Pour les cas suivants, dire si le système est cohérent, disponible et/ou tolérant aux partitions.

| Le système est ...                                                                              |  C  |  A  |  P  |
| ----------------------------------------------------------------------------------------------- | :-: | :-: | :-: |
| centralisé sur un seul serveur                                                                  |     |     |     |
| distribué sur plusieurs serveurs et vérifie les données sur tous les serveurs avant de répondre |     |     |     |
| distribué sur plusieurs serveurs et répond parfois des données obsolètes                        |     |     |     |
| distribué sur plusieurs serveurs et répond toujours des données à jour                          |     |     |     |
| centralisé sur un seul serveur mais peut répondre avec des données obsolètes lorsque surchargé  |     |     |     |

<details>
<summary>Solution</summary>

| Le système est ...                                                                              |  C  |  A  |  P  |
| ----------------------------------------------------------------------------------------------- | :-: | :-: | :-: |
| centralisé sur un seul serveur                                                                  |  X  |  X  |     |
| distribué sur plusieurs serveurs et vérifie les données sur tous les serveurs avant de répondre |  X  |     |  X  |
| distribué sur plusieurs serveurs et répond parfois des données obsolètes                        |     |  X  |  X  |
| distribué sur plusieurs serveurs et répond toujours des données à jour                          |  X  |     |  X  |
| centralisé sur un seul serveur mais peut répondre avec des données obsolètes lorsque surchargé  |     |  X  |     |

</details>

### NoSQL

#### Prise en main

- Tester quelques commandes sur MongoDB : https://onecompiler.com/mongodb
  - Modifier l'exemple pour chercher toutes les personnes nommées "Ava".
  - Tester les commandes du tutoriel : https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/
    - Sélectionner "MongoDB Shell" comme langage.
- Tester quelques commandes sur Redis : https://onecompiler.com/redis
  - Voir les commandes disponibles : https://redis.io/docs/latest/commands/?group=list
  - Quelles commandes permettent d'utiliser une liste comme une [pile](https://pixees.fr/informatiquelycee/n_site/nsi_term_structDo_liste.html) (first in, last out) ?
    <details><summary>Solution</summary>LPUSH pour empiler, LPOP pour dépiler</details>
  - Quelles commandes permettent d'utiliser une liste comme une [file](https://pixees.fr/informatiquelycee/n_site/nsi_term_structDo_liste.html) (first in, first out) ?
    <details><summary>Solution</summary>LPUSH pour ajouter, RPOP pour retirer</details>

## Références

- https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_CAP
- https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/
- https://blog.algomaster.io/p/15-types-of-databases
- https://rivery.io/data-learning-center/database-types-guide/
- https://fr.wikipedia.org/wiki/NoSQL
- https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql
- https://www.digitalocean.com/community/tutorials/understanding-database-sharding

### Exercices

- https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/exercises/1686
