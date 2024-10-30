# JavaScript & TypeScript

Programmation Web et bases de données

---

```mermaid
timeline
  title Histoire du Web
  1991 : HTTP
  1993 : HTML
  1994 : URL
  1995 : JavaScript
  1996 : CSS
  2012 : TypeScript
```

---

## JavaScript

![](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">Christopher Williams</a>, Public domain, via Wikimedia Commons
</p>

---

## JavaScript

- &shy;<!-- .element: class="fragment" --> **Java** + **Script**
  - &shy;<!-- .element: class="fragment" --> Proche de **Java** uniquement au niveau **syntaxique** ! (pas de typage, ni de compilation, ni de JVM)
  - &shy;<!-- .element: class="fragment" --> Popularité de Java à l'époque de la création de JavaScript (**1995**) &rarr; marketing
- &shy;<!-- .element: class="fragment" --> Typage **dynamique** et **faible** (comme Python)
- &shy;<!-- .element: class="fragment" --> **Paradigmes** :
  - &shy;<!-- .element: class="fragment" --> **Script** : interprété, pas de compilation
  - &shy;<!-- .element: class="fragment" --> **Impératif** : instructions séquentielles
  - &shy;<!-- .element: class="fragment" --> **Fonctionnel** : fonctions en tant que valeurs
  - &shy;<!-- .element: class="fragment" --> **Orienté objet** : objets, méthodes, héritage
  - &shy;<!-- .element: class="fragment" --> **Événementiel** : réagir à des événements (clic, clavier, etc.)
- &shy;<!-- .element: class="fragment" --> **Versions** : ES5 (2009), ES6 (2015), ES7 (2016), etc. (ECMAScript)

---

### Commentaires

JavaScript

```javascript
// Commentaire sur une ligne

/* Commentaire
sur plusieurs
lignes */
```

Python

```python
# Commentaire sur une ligne

"""
Commentaire
sur plusieurs
lignes
"""
```

---

### Variables

JavaScript

```javascript
let x = 5;
const y = 10; // Pas réassignable

x = 7;
y = 15; // Erreur
```

Python

```python
x = 5
y = 10
```

---

### Types de données

Similaires à Python

```javascript
const nombre_entier = 5;
const nombre_flottant = 3.14;
const chaine_de_caractere = "Hello"; // string
const booleen = true; // Boolean
const tableau = [1, 2, 3, "bleu", false]; // array
const obj = { name: "Alice", age: 25 }; // object

// Une variable peut aussi être non définie ou nulle
const a = undefined; // jamais déclarée
const b = null;
```

---

### Stdout (sortie standard)

JavaScript

```javascript
console.log("Hello, world!");
```

Python

```python
print("Hello, world!")
```

---

### Blocs de code

JavaScript

```javascript
if (x > 0) {
  console.log("x est positif");
} else {
  console.log("x est négatif ou nul");
}
```

Python

```python
if x > 0:
    print("x est positif")
else:
    print("x est négatif ou nul")
```

---

### Boucles `for`

JavaScript

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Python

```python
for i in range(5):
    print(i)
```

---

#### Sucre syntaxique (Syntactic sugar)

- Une syntaxe **simplifiée** pour une tâche **existante**

La boucle **for** :

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

est un sucre syntaxique pour

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

#### Sucre syntaxique (Syntactic sugar)

L'opérateur **ternaire** :

```javascript
const a = age > 18 ? "majeur" : "mineur";
```

est un sucre syntaxique pour

```javascript
let a;
if (age > 18) {
  a = "majeur";
} else {
  a = "mineur";
}
```

---

### Fonctions

JavaScript

```javascript
function dire_bonjour(nom) {
  console.log("Bonjour, " + nom + " !");
}
// ou avec une fonction fléchée
const dire_bonjour = (nom) => {
  console.log("Bonjour, " + nom + " !");
};

dire_bonjour("Alice");
```

Python

```python
def dire_bonjour(nom):
    print("Bonjour, " + nom + " !")

dire_bonjour("Alice")
```

---

### Objets

```javascript
const personne = {
  nom: "Alice",
  age: 25,
  dire_bonjour: function () {
    console.log("Bonjour, " + this.nom + " !");
  },
  dire_age: () => {
    console.log("J'ai " + this.age + " ans.");
  },
};

personne.dire_bonjour(); // Bonjour, Alice !
personne.dire_age(); // J'ai undefined ans.
// this n'existe pas dans les fonctions fléchées
```

---

### Sucre syntaxique

Affectation par décomposition (destructuring)

```javascript
const list = [1, 2, 3, 4, 5];
const [first, second, ...rest] = list;
console.log(first, second, rest); // 1 2 [3, 4, 5]

const user = {
  id: 1291,
  name: "Pierre",
  email: "pierre@exemple.com",
};
const { name, ...rest } = user;
console.log(name); // Pierre
console.log(rest); // {id: 1291, email: "pierre@exemple.com"}
```

---

### Sucre syntaxique

Syntaxe de décomposition

```javascript
var articulations = ["épaules", "genoux"];
var corps = ["têtes", ...articulations, "bras", "pieds"];
// ["têtes", "épaules", "genoux", "bras", "pieds"]

var profil = { prenom: "Sarah", profilComplet: false };
var profilMisAJour = { nom: "Dupont", profilComplet: true };

var clone = { ...profil };
// Object { prenom: 'Sarah', profilComplet: false }

var fusion = { ...profil, ...profilMisAJour };
// Object { prenom: 'Sarah', nom: 'Dupont', profilComplet: true };
```

---

### DOM (Document Object Model)

![](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg">‍Birger Eriksson</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
</p>

- &shy;<!-- .element: class="fragment" --> Représentation **arborescente** des éléments HTML
- &shy;<!-- .element: class="fragment" --> **API** (interface) pour **manipuler** le DOM (ajouter, supprimer, modifier des éléments) utilisée par JavaScript
- &shy;<!-- .element: class="fragment" --> **Événements** : réagir à des actions de l'utilisateur (clic, survol, etc.)

---

### Manipulation du DOM

```html
<!doctype html>
<html>
  <head>
    <title>Page Web</title>
  </head>
  <body>
    <h1 class="titre">Titre</h1>
    <p>Contenu</p>
    <button id="bouton">Cliquez ici</button>
    <script src="script.js"></script>
  </body>
</html>
```

---

### Manipulation du DOM

```javascript
const titre = document.getElementsByClassName("titre")[0];
titre.innerHTML = "Nouveau titre";

const paragraphes = document.getElementsByTagName("p");
for (const p of paragraphes) {
  p.style.color = "red";
}

const bouton = document.getElementById("bouton");
bouton.addEventListener("click", () => {
  alert("Clic !");
  titre.style.color = "blue";
});
```

---

## TypeScript

![](https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Typescript.svg">TypeScript</a>, Public domain, via Wikimedia Commons
</p>

---

## TypeScript

![](https://learntypescript.dev/static/f5c65fe3cf6dbed670bc14754c33342b/6d494/ts-js.webp) <!-- .element: class="full" -->

https://learntypescript.dev/01/l1-what-is-ts <!-- .element: class="reference" -->

---

## TypeScript

![](https://d2i2xyh28mr8fx.cloudfront.net/wp-content/uploads/2023/03/03165900/WHATS-TYPESCRIPT_.png) <!-- .element: class="full" -->

https://jaydevs.com/javascript-vs-typescript/ <!-- .element: class="reference" -->

---

## TypeScript

- &shy;<!-- .element: class="fragment" --> **Sur-ensemble** de JavaScript
  - Tout code JavaScript est syntaxiquement correct en TypeScript (mais pas type-checked)
- &shy;<!-- .element: class="fragment" --> **Paradigmes** : comme JavaScript
- &shy;<!-- .element: class="fragment" --> **Typage statique** (déclaration des types), &ne; typage dynamique de JavaScript ou Python
- &shy;<!-- .element: class="fragment" --> **Typage fort** (pas de conversion automatique), &ne; typage faible de JavaScript (`4 + "2" = "42"`)
- &shy;<!-- .element: class="fragment" --> **Transpilation** (compilation vers un autre langage) en **JavaScript**
- &shy;<!-- .element: class="fragment" --> Développé par **Microsoft** (2012), mais **libre** et **open-source**

---

### Typage

- Pourquoi **typer** ?
  - &shy;<!-- .element: class="fragment" --> **Lisibilité** : intention explicite du développeur
  - &shy;<!-- .element: class="fragment" --> **Détection d'erreurs** à la compilation (avant l'exécution)
  - &shy;<!-- .element: class="fragment" --> **Documentation** : types des paramètres et valeur de retour
  - &shy;<!-- .element: class="fragment" --> **IDE** : complétion automatique, renommage, refactoring

---

### Typage

- **Types primitifs** : `number`, `string`, `boolean`, `null`, `undefined`
- **Types complexes** : `object`, `array`, `tuple`, `enum`, `any`, `void`, `never`
- **Types personnalisés** : `interface`, `type`, `class`

```typescript
const a: number = 5;
const b: string = "Hello";
const c: boolean = true;
const d: number[] = [1, 2, 3];
const e: { name: string; age: number } = { name: "Alice", age: 25 };

interface Person {
  name: string;
  age: number;
}

const f: Person = { name: "Alice", age: 25 };
```
