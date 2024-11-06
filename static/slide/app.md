# Application Web

Programmation Web et bases de données

---

## Application

- &shy;<!-- .element: class="fragment" --> Un logiciel/**programme** qui permet de réaliser des **tâches** spécifiques
- &shy;<!-- .element: class="fragment" --> **Interface** entre l'utilisateur et le système
- &shy;<!-- .element: class="fragment" --> **Installation** et **exécution** sur un appareil (ordinateur, mobile, &hellip;)
- &shy;<!-- .element: class="fragment" --> Application **Web**
  - &shy;<!-- .element: class="fragment" --> **navigateur** comme interface
  - &shy;<!-- .element: class="fragment" --> Pas d'installation car exécutée **en ligne**
  - &shy;<!-- .element: class="fragment" --> Contrairement aux **applications natives** (installées sur l'appareil)

---

## SPA

![](https://upload.wikimedia.org/wikipedia/commons/1/18/Single-vs-multi-site.png) <!-- .element: class="full" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Single-vs-multi-site.png">Inseritore</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

---

## SPA

- &shy;<!-- .element: class="fragment" --> **Single Page Application** (application monopage)
- &shy;<!-- .element: class="fragment" --> Chargement **dynamique** des contenus
  - **Mise à jour** de la page sans rechargement grâce à **JavaScript**
- &shy;<!-- .element: class="fragment" --> Réduction des temps de **chargement**
- &shy;<!-- .element: class="fragment" --> Expérience d'une **application mobile** sur navigateur

---

### SPA Frameworks

- ![](https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg) <!-- .element: height="32px" --> _Angular_
  - &shy;<!-- .element: class="fragment" --> par **Google** depuis 2009 (AngularJS, puis réécriture complète en 2016)
  - &shy;<!-- .element: class="fragment" --> **TypeScript** obligatoire
  - &shy;<!-- .element: class="fragment" --> Courbe d'apprentissage **complexe**
    - Plus simple pour les développeurs Java
- ![](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) <!-- .element: height="32px" --> _React_
  - &shy;<!-- .element: class="fragment" --> par **Meta** (Facebook) depuis 2013
  - &shy;<!-- .element: class="fragment" --> **JSX** (JavaScript Syntax Extension) : mélange de HTML et JS
  - &shy;<!-- .element: class="fragment" --> Grande **popularité** et **communauté** (bibliothèques et aides)
- ![](https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg) <!-- .element: height="32px" --> _Vue.js_
  - &shy;<!-- .element: class="fragment" --> par **Evan You** depuis 2014
  - &shy;<!-- .element: class="fragment" --> **Simple** et **lisible**

---

## PWA

- &shy;<!-- .element: class="fragment" --> **Progressive Web App** (application web progressive)
- &shy;<!-- .element: class="fragment" --> Alternative aux **applications mobiles**, développée par **Google** depuis 2015
- &shy;<!-- .element: class="fragment" --> **Installation** d'une application web sur un appareil pour un accès **hors ligne**
- &shy;<!-- .element: class="fragment" --> Avec les avantages des **applications natives** (notifications, accès à l'appareil photo, géolocalisation, &hellip;)
- &shy;<!-- .element: class="fragment" --> Développement plus **simple** et moins **coûteux** (pas de boutique d'applications, mises à jour automatiques, compatibilité multi-plateforme, &hellip;)

---

## Design Pattern : Composite

![](https://refactoring.guru/images/patterns/diagrams/composite/problem-fr-2x.png) <!-- .element: class="full" -->

https://refactoring.guru/fr/design-patterns/composite <!-- .element: class="reference" -->

---

## Design Pattern : Composite

![](https://refactoring.guru/images/patterns/content/composite/composite-2x.png) <!-- .element: class="full" -->

https://refactoring.guru/fr/design-patterns/composite <!-- .element: class="reference" -->

---

## Design Pattern : Composite

![](https://refactoring.guru/images/patterns/content/composite/composite-comic-1-fr-2x.png) <!-- .element: class="full" -->

https://refactoring.guru/fr/design-patterns/composite <!-- .element: class="reference" -->

---

## Design Pattern : Composite

- &shy;<!-- .element: class="fragment" --> Les **frameworks** SPA utilisent le design pattern **composite** pour structurer les **composants**
- &shy;<!-- .element: class="fragment" --> Un composant est une "balise" HTML personnalisée avec des **propriétés** et des **méthodes**
  - &shy;<!-- .element: class="fragment" --> Chaque composant est **indépendant** et **interagit** avec les autres
  - &shy;<!-- .element: class="fragment" --> **Séparation des préoccupations** (Separation of concerns) au sein d'un composant : **template**, **script** et **style**
- &shy;<!-- .element: class="fragment" --> Les composants peuvent être **imbriqués** les uns dans les autres
- &shy;<!-- .element: class="fragment" --> **Réutilisation** des composants

---

## Design Pattern : Composite

![](https://fr.vuejs.org/assets/components.B1JZbf0_.png) <!-- .element: class="full-width" -->

https://fr.vuejs.org/guide/essentials/component-basics <!-- .element: class="reference" -->

---

### Séparation des préoccupations

```vue
<script setup>
import { ref } from "vue";
const greeting = ref("Hello World!");
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

https://fr.vuejs.org/guide/scaling-up/sfc#what-about-separation-of-concerns <!-- .element: class="reference" -->

---

## Cycle de vie d'un composant

![](https://fr.vuejs.org/assets/lifecycle.BR0X3NQP.png) <!-- .element: class="full" -->

https://fr.vuejs.org/guide/essentials/lifecycle.html <!-- .element: class="reference" -->
