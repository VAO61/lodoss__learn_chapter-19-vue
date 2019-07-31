<template>
  <section class="search container">
    <div class="search__form form">
      <div>
        <!-- <select v-model="type.model" id="selectType" onchange="testF()"> -->
        <select v-model="type.model" id="selectType">
          <option v-for="option in type.options" v-bind:key="option" :value="option">{{option}}</option>
        </select>
        <label for="selectType">Type</label>
      </div>
      <div>
        <select v-model="language.model" id="selectLanguage">
          <option v-for="option in language.options" :key="option" :value="option">{{option}}</option>
        </select>
        <label for="selectLanguage">Language</label>
      </div>
      <!-- TODO: v-model="readme" -->
    </div>
  </section>
</template>

<script>
// const testF = () => {
//   document.querySelector("select").style.backgroundColor = "red";
// };
// testF();
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
