# my-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run watch
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

> - _**`v-bind`** - директива. Директивы имеют префикс **`v-`**.  
>   Добавляют к отображаемому DOM особое реактивное поведение, управляемое Vue_

> - \_**`v-for`** - для отображения списков, используя данные из массива:
>   > `<...` **`v-for="todo in todos"`**> {{ todo.text }}`</...>`  
>   >  `...data: { todos: [ ... { text: '...' }, ... ]`\_

> - _**`_v-on`** - для отслеживания событий, указав метод-обработчик чтобы пользователи могли взаимодействовать с приложением_
>   > `<... v-on:click="someMethod">`...`</...>`  
>   > `methods: { someMethod: function () {...} }`

> - _**`v-model`** - позволяет легко связывать элементы форм и состояние приложения:_
>   > `<...>`{{ message }}`</...>`  
>   >  `<... v-model="message">`  
>   > `data: { message:` 'some message'`}`
