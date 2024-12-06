# NoSQL

Programmation Web et bases de données

---

Comment faire pour éviter de perdre des données ?

(photos, supports de cours, vidéos, documents, etc.)

---

## Règle 3-2-1

- &shy;<!-- .element: class="fragment" --> <i class="ph ph-files"></i> **3** **copies** de vos données.
  - &shy;<!-- .element: class="fragment" --> Par exemple : 1x sur l'ordinateur, 1x sur un disque dur externe, 1x sur le cloud.
  - &shy;<!-- .element: class="fragment" --> <i class="ph ph-person"></i> Contre les erreurs **humaines**.
- &shy;<!-- .element: class="fragment" --> <i class="ph ph-hard-drives"></i> **2** **supports** différents.
  - &shy;<!-- .element: class="fragment" --> Par exemple : sur deux disques durs différents.
  - &shy;<!-- .element: class="fragment" --> <i class="ph ph-hammer"></i> Contre les pannes **matérielles**.
- &shy;<!-- .element: class="fragment" --> <i class="ph ph-map-pin-area"></i> **1** copie **hors** site.
  - &shy;<!-- .element: class="fragment" --> Par exemple : sur un serveur distant dans une autre région.
  - &shy;<!-- .element: class="fragment" --> <i class="ph ph-meteor"></i> Contre les catastrophes **naturelles**.

---

## Base de données distribuée

![](https://upload.wikimedia.org/wikipedia/commons/1/14/Base_de_Datos_distribuida_atravez_de_internet.jpg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Base_de_Datos_distribuida_atravez_de_internet.jpg">No machine-readable author provided. Elkeko assumed (based on copyright claims).</a>, Public domain, via Wikimedia Commons
</p>

---

## Théorème CAP

- &shy;<!-- .element: class="fragment" --> **Trilemme** : **impossible** de garantir les trois propriétés **simultanément**.
- &shy;<!-- .element: class="fragment" --> <i class="ph ph-checks"></i> **Consistency** (Cohérence)
  - Toutes les requêtes reçoivent la **dernière** mise à jour.
- &shy;<!-- .element: class="fragment" --> <i class="ph ph-clock-clockwise"></i> **Availability** (Disponibilité)
  - Toutes les requêtes reçoivent une réponse (sans garantie que c'est la dernière version).
- &shy;<!-- .element: class="fragment" --> <i class="ph ph-network-slash"></i> **Partition tolerance** (Tolérance aux pannes)
  - Le système continue de fonctionner malgré les pannes réseaux.

---

## Théorème CAP

![](https://upload.wikimedia.org/wikipedia/commons/c/c6/CAP_Theorem_Venn_Diagram.png) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:CAP_Theorem_Venn_Diagram.png">JamieMcCarthy</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

---

### CA (Consistent + Available)

```kroki svgbob full-width
            Site A
 ,-.       +-----+-------+       ,-.
 `-'       |Name |Balance|       `-'
 /|\ <---> +-----+-------+ <---> /|\
  |        |Alice|    100|        |
 / \       |Bob  |    200|       / \
           +-----+-------+
```

- Une **seule** **source** de vérité : toutes les requêtes sont cohérentes.
- **Pas** de **réplication** des données sur plusieurs sites.

---

### AP (Available + Partition-tolerant)

```kroki svgbob full-width
            Site A                Site B
 ,-.       +-----+-------+       +-----+-------+       ,-.
 `-'       |Name |Balance|       |Name |Balance|       `-'
 /|\ <---> +-----+-------+ <-/-> +-----+-------+ <---> /|\
  |        |Alice|    120|       |Alice|    100|        |
 / \       |Bob  |    180|       |Bob  |    200|       / \
           +-----+-------+       +-----+-------+
```

- **Continuer** à répondre aux requêtes malgré les pannes réseau.
- Les données ne sont **pas** toujours **cohérentes** entre les sites.

---

### CP (Consistent + Partition-tolerant)

```kroki svgbob full-width
            Site A                Site B
 ,-.       +-----+-------+       +-----+-------+       ,-.
 `-'       |Name |Balance|       |Name |Balance|       `-'
 /|\ <-/-> +-----+-------+ <-/-> +-----+-------+ <-/-> /|\
  |        |Alice|    120|       |Alice|    100|        |
 / \       |Bob  |    180|       |Bob  |    200|       / \
           +-----+-------+       +-----+-------+
```

- **Attendre** que le réseau soit réparé pour répondre aux requêtes.
- La base de données n'est **pas** toujours **disponible**.

---

### DBMS

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qN3SlEThmWc3ufvzHzkU0g.png) <!-- .element: class="full" -->

https://alperenbayramoglu2.medium.com/understanding-the-cap-theorem-8e06886c12ac <!-- .element: class="reference" -->

---

## Types de bases de données

![](https://substack-post-media.s3.amazonaws.com/public/images/ffd5e3dc-215c-4f89-8336-6aa835022693_1984x1188.png) <!-- .element: class="full" -->

https://blog.algomaster.io/p/15-types-of-databases <!-- .element: class="reference" -->

---

## NoSQL

- &shy;<!-- .element: class="fragment" --> NoSQL : "Non-SQL" ou "Not only SQL"
- &shy;<!-- .element: class="fragment" --> Modèle de base de données **non relationnelle**.
  - Pas de **tables** ni de **relations** strictes.
  - **Documents**, **clés-valeurs**, **graphes**, etc.
- &shy;<!-- .element: class="fragment" --> Historique :
  - &shy;<!-- .element: class="fragment" --> **1970** : premières bases de données relationnelles.
  - &shy;<!-- .element: class="fragment" --> **2000** : essor d'Internet et besoin de **scalabilité**.
    - Google (Bigtable), Amazon (Dynamo), Facebook (Cassandra), LinkedIn (Voldemort), etc.
  - &shy;<!-- .element: class="fragment" --> **2009** : **NoSQL** devient un terme générique.

---

### Stockage orienté colonnes

![](https://user.oc-static.com/upload/2017/05/26/14957896633548_ColumnStore.png) <!-- .element: class="full-width" -->

https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4462433-choisissez-votre-famille-nosql <!-- .element: class="reference" -->

- Organisation des données en **colonnes** plutôt qu'en lignes.
- Avantageux lorsque qu'il y a des cellules **vides** dans les tables.

---

### Stockage clé/valeur

![](https://user.oc-static.com/upload/2017/05/26/14957914857782_KeyValueStore.png) <!-- .element: class="full-width" -->

https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4462433-choisissez-votre-famille-nosql <!-- .element: class="reference" -->

- Stockage de **paires** clé/valeur (comme un **dictionnaire**).
- **Rapide** pour les **recherches** par clé.

---

### Stockage orienté documents

![](https://user.oc-static.com/upload/2017/05/26/14957919171324_DocumentStore.png) <!-- .element: class="full-width" -->

https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4462433-choisissez-votre-famille-nosql <!-- .element: class="reference" -->

- Similaire au stockage clé/valeur, mais les **valeurs** sont formatées en **documents**.
  - **JSON**, **XML**, **BSON**, etc.

---

### Stockage orienté graphes

![](https://user.oc-static.com/upload/2017/05/26/14958219822158_GraphStore.png) <!-- .element: class="full-width" -->

https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4462433-choisissez-votre-famille-nosql <!-- .element: class="reference" -->

- Organisation des données sous forme de **graphes** (sommets et arêtes).

---

### Série chronologique (time series)

![](https://hazelcast.com/wp-content/uploads/2021/12/diagram-TimeSeriesDatabase.png) <!-- .element: class="half" -->

https://hazelcast.com/glossary/time-series-database/ <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> Des données indexées par **temps**.
  - Par exemple : **mesures** de température, **logs**, etc.
- &shy;<!-- .element: class="fragment" --> **Optimisé** pour les **requêtes** sur des **plages** de temps.
  - Agrégations, moyennes, max, min, etc.

---

### ACID vs BASE

![](https://user.oc-static.com/upload/2017/06/07/14968372992067_ACID_BASE.png) <!-- .element: class="full-width" -->

https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4462471-maitrisez-le-theoreme-de-cap <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> **ACID** : Atomicité, Cohérence, Isolation, Durabilité.
- &shy;<!-- .element: class="fragment" --> **BASE** : Basically Available, Soft state, Eventually consistent.
  - Basically Available : toujours disponible.
  - Soft state : pas de garantie de cohérence.
  - Eventually consistent : la cohérence sera atteinte à un moment donné.
