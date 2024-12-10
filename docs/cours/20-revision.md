# 13 Révision

## Objectifs

L'examen écrit se portera sur les critères suivants :

- Web
  - [ ] Analyser les erreurs d'une application Web.
  - [ ] Expliquer l'utilisation de code externe dans un projet.
  - [ ] Critiquer l'utilisation d'un générateur de site statique.
  - [ ] Adapter du code Vue.js en TypeScript.
  - [ ] Expliquer l'architecture trois tiers.
- Base de données
  - [ ] Modéliser une base de données.
  - [ ] Adapter des requêtes SQL.
  - [ ] Expliquer les transactions et l'indexation d'une base de données.
  - [ ] Différencier différents types de bases de données.

|            Note            | &nbsp;1&nbsp; | &nbsp;2&nbsp; | 2.5 | &nbsp;3&nbsp; | 3.5 | &nbsp;4&nbsp; | 4.5 | &nbsp;5&nbsp; | 5.5 | &nbsp;6&nbsp; |
| :------------------------: | :-----------: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: | :-: | :-----------: |
| Nombre de critères validés |       0       |       1       |  2  |       3       |  4  |       5       |  6  |       7       |  8  |       9       |

## Base de données

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
