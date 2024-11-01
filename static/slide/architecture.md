# Architecture trois tiers

Programmation Web et bases de données

---

## Nomenclature

<div class="r-stack">

```kroki svgbob half
+----------------------------------------------------+
|Application                                         |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
|                                                    |
+----------------------------------------------------+
```

```kroki svgbob half fragment
+----------------------------------------------------+
|Application                                         |
|                                                    |
|                                                    |
|   +------+      +-------+      +---------------+   |
|   |Client|<---->|Serveur|<---->|Base de données|   |
|   +------+      +-------+      +---------------+   |
|                                                    |
+----------------------------------------------------+
```

</div>

- &shy;<!-- .element: class="fragment" --> **Client** : interface utilisateur (navigateur, application mobile)
  - &shy;<!-- .element: class="fragment" --> **Présentation** de l'application
- &shy;<!-- .element: class="fragment" --> **Serveur** : logique "cachée" de l'application
  - &shy;<!-- .element: class="fragment" --> **Traitement** des données
- &shy;<!-- .element: class="fragment" --> **Base de données** : stockage des données
  - &shy;<!-- .element: class="fragment" --> **Persistance** des données

---

## Nomenclature

<div class="r-stack">

```kroki svgbob half
+----------------------------------------------------+
|Application                                         |
| +----------+  +----------------------------------+ |
| |Frontend  |  |Backend                           | |
| | +------+ |  | +-------+      +---------------+ | |
| | |Client|<---->|Serveur|<---->|Base de données| | |
| | +------+ |  | +-------+      +---------------+ | |
| +----------+  +----------------------------------+ |
+----------------------------------------------------+
```

</div>

- &shy;<!-- .element: class="fragment" --> **Frontend**
  - &shy;<!-- .element: class="fragment" --> Exécution côté **client** (navigateur, mobile, &hellip;)
  - &shy;<!-- .element: class="fragment" --> Web : HTML, CSS, JavaScript
- &shy;<!-- .element: class="fragment" --> **Backend**
  - &shy;<!-- .element: class="fragment" --> Exécution côté **serveur** (hébergement distant, cloud, &hellip;)
  - &shy;<!-- .element: class="fragment" --> Web : PHP, Node.js, Python, Java, &hellip;

---

## API

- &shy;<!-- .element: class="fragment" --> API : Application Programming Interface (Interface de programmation)
- &shy;<!-- .element: class="fragment" --> **Contrat** de **communication** entre deux applications
  - &shy;<!-- .element: class="fragment" --> Se mettre d'accord sur les **formats** de données
  - &shy;<!-- .element: class="fragment" --> Utilisation d'une bibliothèque ([pandas](https://pandas.pydata.org/)), d'un service ([Transport API](https://transport.opendata.ch/), [MediaWiki](https://www.mediawiki.org/wiki/API:Main_page/fr), [&hellip;](https://github.com/public-apis/public-apis)), &hellip;
- &shy;<!-- .element: class="fragment" --> API Web : REST, SOAP, GraphQL, &hellip;

---

## REST

![](https://images.ctfassets.net/vwq10xzbe6iz/5sBH4Agl614xM7exeLsTo7/9e84dce01735f155911e611c42c9793f/rest-api.png) <!-- .element: class="full" -->

https://mannhowie.com/rest-api <!-- .element: class="reference" -->

---

## REST

- REST : Representational State Transfer
- &shy;<!-- .element: class="fragment" --> Utilisation des **méthodes HTTP**
  - GET : lecture
  - POST : création
  - PUT : modification
  - DELETE : suppression
- &shy;<!-- .element: class="fragment" --> **Ressources** : URI (Uniform Resource Identifier) (similaire à une URL)
  - `https://api.exemple.com/v1/users/42`
- &shy;<!-- .element: class="fragment" --> **Format** de données : JSON, XML, &hellip;

---

## REST

| Méthode | URI         | Description                    |
| ------- | ----------- | ------------------------------ |
| GET     | `/users`    | Liste de tous les utilisateurs |
| POST    | `/users`    | Créer un nouvel utilisateur    |
| GET     | `/users/42` | Détail de l'utilisateur 42     |
| PUT     | `/users/42` | Modifier l'utilisateur 42      |
| DELETE  | `/users/42` | Supprimer l'utilisateur 42     |

---

## REST

**Lister** les utilisateurs

- _Requête_ : GET `/users`

- _Réponse_ :

```json
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  }
]
```

---

## REST

**Créer** un nouvel utilisateur

- _Requête_ : POST `/users`

```json
{
  "name": "Charlie"
}
```

- _Réponse_ :

```json
{
  "id": 3,
  "name": "Charlie"
}
```
