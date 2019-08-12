<template>
  <section class="search container">
    <div class="search__form form">
      <div class="form__item">
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
        <input
          class="form__input"
          id="typeForSearch"
          type="text"
          v-model.trim="searchValue"
          @keyup.enter="getData"
        />
        <label class="form__label" for="typeForSearch">Type here for search</label>
      </div>
      <button class="form__btn btn btn_brand" :disabled="isDisableSearch" @click="getData">search</button>
    </div>
  </section>
</template>

<script>
import getJSON from "../api/getJSON.js";
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
      typeValue: "repositories",
      languageValue: "",
      searchValue: ""
    };
  },
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
      this.$store.commit("updateItems", data.items);
    }
  }
};
</script>

<style>
</style>
