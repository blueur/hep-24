# HTML & CSS

Programmation Web et bases de données

---

## Les langages Web

- &shy;<!-- .element: class="fragment" --> **HTML** (**H**yper**t**ext **M**arkup **L**anguage)
  - &shy;<!-- .element: class="fragment" --> **Structure** de la page
- &shy;<!-- .element: class="fragment" --> **CSS** (**C**ascading **S**tyle **S**heets)
  - &shy;<!-- .element: class="fragment" --> **Mise en forme** de la page
- &shy;<!-- .element: class="fragment" --> **JS** (**J**ava**S**cript)
  - &shy;<!-- .element: class="fragment" --> **Interactivité** de la page

![](https://scrimba.com/articles/content/images/2022/11/image-1.png) <!-- .element: class="fragment half" -->

&shy;<!-- .element: class="reference" --> https://scrimba.com/articles/html-css-javascript/

---

## HTML

```html []
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Web</title>
  </head>
  <body>
    <h1>Titre de la page</h1>
    <p>Contenu de la page</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Langage de balisage
- &shy;<!-- .element: class="fragment" --> Fichier `.html`
- &shy;<!-- .element: class="fragment" --> `index.html` : Page d'accueil

---

## Balises HTML

![](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics <!-- .element: class="reference" -->

---

## Élément vide

```html
<img src="images/test.png" alt="Mon image">
</img>

<!-- équivalent à -->

<img src="images/test.png" alt="Mon image" />
```

---

## Commentaires

```html
<!-- Voici la balise pour les commentaires -->
```

- &shy;<!-- .element: class="fragment" --> Ne s'**affiche pas**
- &shy;<!-- .element: class="fragment" --> Permets d'ajouter des **notes** explicatives dans le code
  - &shy;<!-- .element: class="fragment" --> Pour les **autres** développeurs
  - &shy;<!-- .element: class="fragment" --> Pour son futur **soi**

---

## Attributs HTML

![](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png)

https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics <!-- .element: class="reference" -->

---

## Structure de base

![](https://user.oc-static.com/upload/2022/11/25/16693917384741_FR_1603881_HTML-CSS_Static-Graphics_p1c3-3.jpg)

https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/8061261-creez-votre-premiere-page-web-en-html <!-- .element: class="reference" -->

---

## Structure de base

```html []
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Web</title>
  </head>
  <body>
    <h1>Titre de la page</h1>
    <p>Contenu de la page</p>
  </body>
</html>
```

---

## Structure de base

- `<!doctype html>` : Déclaration du type de document (HTML5)
- `<html>` : Élément racine
  - `lang="fr"` : Langue de la page
- `<head>` : Métadonnées (informations sur la page qui ne s'affichent pas)
  - `charset="UTF-8"` : Encodage des caractères
  - `viewport` : Affichage sur les appareils mobiles
  - `title` : Titre de la page (onglet)
- `<body>` : Contenu de la page
  - `h1` : Titre principal
  - `p` : Paragraphe

---

## CSS

- &shy;<!-- .element: class="fragment" --> Fichier `.css`

```css []
p {
  color: red;
}

h1 {
  font-size: 24px;
}
```

<!-- .element: class="fragment" -->

---

## Règle CSS

![](https://web.dev/static/learn/css/selectors/image/an-image-a-css-rule-the-ced38545b4bec.svg?hl=fr)

https://web.dev/learn/css/selectors?hl=fr <!-- .element: class="reference" -->

- &shy;<!-- .element: class="fragment" --> Un fichier `.css` peut contenir plusieurs **règles**
  - &shy;<!-- .element: class="fragment" --> Un **sélecteur** : **où** appliquer la règle
  - &shy;<!-- .element: class="fragment" --> Un bloc de **déclarations** délimité par `{}` : **quoi** appliquer
    - &shy;<!-- .element: class="fragment" --> **Propriété** : **quoi** changer
    - &shy;<!-- .element: class="fragment" --> **Valeur** : **comment** changer

---

## Application

- Trois manières d'appliquer du CSS
  - &shy;<!-- .element: class="fragment" --> **Inline** : attribut `style`
  - &shy;<!-- .element: class="fragment" --> **Interne** : balise `<style>`
  - &shy;<!-- .element: class="fragment" --> **Externe** : fichier `.css`
- &shy;<!-- .element: class="fragment" --> **Priorité** : Inline > Interne > Externe
- &shy;<!-- .element: class="fragment" --> **Cascade** : règles plus spécifiques > règles plus générales
- &shy;<!-- .element: class="fragment" --> **Héritage** : les enfants héritent des propriétés des parents

---

### Inline

```html [5]
<!doctype html>
<html>
  <head></head>
  <body>
    <p style="color: red;">Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **ponctuelle** pour un **élément**
- &shy;<!-- .element: class="fragment" --> Difficile à **maintenir** et à **réutiliser** &rarr; **déconseillé**

---

### Interne

```html [4-8]
<!doctype html>
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **ponctuelle** pour une **page**
- &shy;<!-- .element: class="fragment" --> **Mélangé** avec le contenu &rarr; **déconseillé**

---

### Externe

```html [4]
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>Texte rouge</p>
  </body>
</html>
```

- &shy;<!-- .element: class="fragment" --> Application **globale** pour un **site**
- &shy;<!-- .element: class="fragment" --> **Séparé** du contenu et **réutilisable** &rarr; **recommandé**

---

## Chargement par le navigateur

![](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps/How_CSS_works <!-- .element: class="reference" -->
