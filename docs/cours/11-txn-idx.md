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



## Références

- https://fauna.com/blog/database-transaction
- https://fr.wikipedia.org/wiki/Propri%C3%A9t%C3%A9s_ACID
- https://fr.wikipedia.org/wiki/Index_(base_de_donn%C3%A9es)
- https://zestedesavoir.com/tutoriels/730/administrez-vos-bases-de-donnees-avec-mysql/949_index-jointures-et-sous-requetes/3935_index/
