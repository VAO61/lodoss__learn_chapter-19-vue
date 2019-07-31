<template>
  <section class="search container">
    <div class="search__form form">
      <!-- <select v-model="type">
        <label for="type">Type</label>
        <option v-for="value in values" v-bind:key="value">{{value}}</option>
      </select>-->
      <select v-model="language">
        <label for="type">Language</label>
        <option v-for="value in values" v-bind:key="value">{{value}}</option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      type: "select",
      label: "language",
      // model: "language",
      values: [
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
    };
  }
};
</script>

<style>
</style>
