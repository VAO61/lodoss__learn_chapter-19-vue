<template>
  <section class="search container">
    <div class="search__form form">
      <div class="form__item">
        <!-- <select v-model="type.model" id="selectType" onchange="testFunction()"> -->
        <select class="form__select" v-model="type.model" id="selectType">
          <option
            class="form__option"
            v-for="option in type.options"
            v-bind:key="option"
            :value="option"
          >{{option}}</option>
        </select>
        <label class="form__label" for="selectType">Type</label>
      </div>
      <div class="form__item">
        <select class="form__select" v-model="language.model" id="selectLanguage">
          <option
            class="form__option"
            v-for="option in language.options"
            :key="option"
            :value="option"
          >{{option}}</option>
        </select>
        <label class="form__label" for="selectLanguage">Language</label>
      </div>
      <div class="form__item">
        <!-- модификатор .trim удаляет пробелы в начале и в конце строки -->
        <input class="form__input" id="typeForSearch" type="text" v-model.trim="inputValue" />
        <!-- placeholder="" -->
        <label class="form__label" for="typeForSearch">Type here for search</label>
      </div>
      <button class="form__btn btn btn_brand" @click="createJSON">search</button>
      <!-- TODO: v-model="readme" -->
    </div>
  </section>
</template>

<script>
// import axios from "axios";
/**
 * +json on the end in string-url
 * // https://api.github.com/user/repos?page=50&per_page=100
 *
 * https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
 * stars -> stargazers_count // кол-во "звезд"
 */
export default {
  data() {
    return {
      type: {
        type: "select",
        label: "type",
        model: "type",
        options: ["repositories"]
      },
      language: {
        type: "select",
        label: "language",
        model: "language",
        options: [
          "Javascript",
          "CSS",
          "HTML",
          "PHP",
          "Ruby",
          "C++",
          "Python",
          "C#",
          "Java",
          "Go",
          "Haskel"
        ]
      },
      inputValue: {
        type: "text",
        label: "Type here for search",
        model: "inputValue"
      }
    };
  },
  methods: {
    createJSON: function() {
      return console.log(
        `https://api.github.com/search/${this.type.model}?q=${this.inputValue}+language:${this.language.model}&sort=stars&order=desc`
      );
    }
    // getItemData: function(items) {
    //   return items.map(item => {
    //     console.log("itemData");
    //   });
    // },
    // search: async function() {
    //   await axios.get(this.createJSON()).then(response => {
    //     console.log("asd");
    //     return response.data;
    //   });
    // }
  }
};
</script>

<style>
</style>
