<template>
  <!-- <SomeNewComponent msg="New component" msgButton="Button" /> -->
  <div id="app">
    <Header />
    <Search />
    <RepoList />
    <!-- <RepoList v-if="getItems.length > 0" />
    <ResultsNotFound v-else />-->
    <Footer />
  </div>
</template>

<script>
import store from "./store/store";
import { mapGetters } from "vuex";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import RepoList from "./components/RepoList.vue";
import ResultsNotFound from "./components/ResultsNotFound.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  store,
  computed: Object.assign({}, mapGetters(["getItems"])),
  components: {
    Header,
    Search,
    RepoList,
    ResultsNotFound,
    //
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
