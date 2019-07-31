<template>
  <section class="search container">
    <div class="search__form form">
      <select v-model="type.model">
        <label for="type">Type</label>
        <option v-for="option in type.options" v-bind:key="option" :value="option">{{option}}</option>
      </select>
      <select v-model="language.model">
        <option v-for="option in language.options" :key="option" :value="option">{{option}}</option>
      </select>
      <!-- TODO: v-model="readme" -->
    </div>
  </section>
</template>

<script>
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
