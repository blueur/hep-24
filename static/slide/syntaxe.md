# Syntaxe

Programmation Web et bases de données

---

```ts
const model = defineModel<boolean>();
const props = defineProps({
  answer: { type: String, required: true },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
});
const value = ref<string | null>(null);
watch(value, (newValue) => (model.value = newValue === props.answer), {
  immediate: true,
});
```

---

## defineModel

```ts
const model = defineModel<boolean>();
```

- Crée une constante `model` de type `Model<boolean>`.
- `defineModel` est une fonction **générique** appelé sans argument.
- Les types génériques sont indiqués entre les chevrons `<>`.
  - `boolean` est le type générique passé à `defineModel`.
- On s'attend à ce que ce `v-model` soit de type `boolean`.

```ts
interface ModelRef<T> {
  value: T;
}
```

---

## defineProps

```ts
const props = defineProps({
  answer: { type: String, required: true },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
});
```

---

## defineProps

- `defineProps` est une fonction générique, mais ici, le type générique est implicite (déduit selon les arguments)
- Crée une constante `props` de type `{text: string, options: {value: string, text: string}[]}` (survoler pour voir le type complet).
- l'argument de `defineProps` est un objet dont les propriétés sont les noms des props.
  - Les valeurs sont des objets avec des options pour chaque prop (type, required, default, etc.)
    - `type` est le type de la prop.
      - `String`, `Number`, `Boolean`, `Array`, `Object`, etc.
      - `as PropType<T>` pour préciser `Array` et `Object`
    - `required` indique si la prop est obligatoire.
    - `default` est la valeur par défaut de la prop (si elle n'est pas fournie).

---

## Ref

```ts
const value = ref<string | null>(null);
```

- Crée une constante `value` de type `Ref<string | null>`.
- `ref` est une fonction générique appelée avec un argument.
  - l'argument est la valeur initiale de la référence.
- On s'attend à ce que `value` soit de type `string` ou `null`.
- `Ref` est une interface générique.
  - `value` est la propriété de la référence.

```ts
interface Ref<T> {
  value: T;
}
```

---

## Watch

```ts
watch(value, (newValue) => (model.value = newValue === props.answer), {
  immediate: true,
});
```

- `watch` est une fonction qui observe une propriété réactive (`ref`, `reactive`, `computed`, etc.) et qui fait quelque chose quand elle change.
- `watch` prend trois arguments:
  - La propriété à observer.
  - Une fonction qui sera appelée à chaque changement.
    - Prend en argument `(newValue, oldValue)`.
  - Un objet d'options.
    - `immediate: true` pour appeler la fonction une première fois à la création du composant.

---

### fonction

```ts
(newValue) => (model.value = newValue === props.answer);
```

équivalent à

```ts
(newValue, oldValue) => {
  model.value = newValue === props.answer;
};
```

---

## Computed

```ts
const name = ref<string>("");
const greeting = ref<string>("");

watch(name, (newName) => (greeting.value = "Hello, " + newName + "!"));
```

équivalent à

```ts
const name = ref<string>("");

const greeting = computed<string>(() => "Hello, " + name.value + "!");
```

équivalent à

```ts
const name = ref<string>("");

const greeting = computed<string>(() => {
  return "Hello, " + name.value + "!";
});
```
