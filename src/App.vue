<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Header />
    <Search />
    <ResultsNotFound />
    <!-- <SomeNewComponent msg="New component" msgButton="Button" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SomeNewComponent from "./components/SomeNewComponent.vue";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import ResultsNotFound from "./components/ResultsNotFound.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    // SomeNewComponent,
    Header,
    Search,
    ResultsNotFound
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
