<template>
  <section class="search container">
    <div class="search__form form">
      <div class="form__item">
        <!-- <select v-model="type.model" id="selectType" onchange="testFunction()"> -->
        <select class="form__select" v-model="typeValue" id="selectType">
          <option
            class="form__option"
            v-for="option in typeList"
            v-bind:key="option"
            :value="option"
          >{{option}}</option>
        </select>
        <label class="form__label" for="selectType">Type</label>
      </div>
      <div class="form__item">
        <select class="form__select" v-model="languageValue" id="selectLanguage">
          <option
            class="form__option"
            v-for="option in languageList"
            :key="option"
            :value="option"
          >{{option}}</option>
        </select>
        <label class="form__label" for="selectLanguage">Language</label>
      </div>
      <div class="form__item">
        <!-- модификатор .trim удаляет пробелы в начале и в конце строки -->
        <input
          class="form__input"
          id="typeForSearch"
          type="text"
          v-model.trim="searchValue"
          @keyup.enter="getData"
        />
        <!-- placeholder="" -->
        <label class="form__label" for="typeForSearch">Type here for search</label>
      </div>
      <button class="form__btn btn btn_brand" :disabled="isDisableSearch" @click="getData">search</button>
      <!-- TODO: v-model="readme" -->
    </div>
  </section>
</template>

<script>
// import axios from "axios";
import getJSON from "../api/getJSON.js";
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
      typeList: ["repositories"],
      languageList: [
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
      ],
      typeValue: "",
      languageValue: "",
      searchValue: "",
      items: []
    };
  },
  // mounted() {
  //   this.getData();
  // },
  computed: {
    isDisableSearch() {
      return (
        this.searchValue === "" ||
        this.typeValue === "" ||
        this.languageValue === ""
      );
    }
  },
  methods: {
    async getData() {
      if (this.isDisableSearch) {
        return;
      }

      const { data } = await getJSON({
        type: this.typeValue,
        searchValue: this.searchValue,
        lang: this.languageValue
      });
      this.items = data.items;
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
