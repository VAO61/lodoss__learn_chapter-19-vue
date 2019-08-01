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
      <div class="form__item">Type here for search</div>
      <button class="form__btn btn btn_brand">search</button>
      <!-- TODO: v-model="readme" -->
    </div>
  </section>
</template>

<script>
// const testFunction = () => {
//   document.querySelector("select").style.backgroundColor = "red";
// };
// testFunction();
export default {
  data() {
    return {
      type: {
        type: "select",
        label: "type",
        model: "type",
        options: ["Repositories"]
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
      }
    };
  }
};
</script>

<style>
</style>
