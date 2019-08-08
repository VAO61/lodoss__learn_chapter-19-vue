<template>
  <section class="main">
    <SearchForm />
    <SearchResultList v-if="getItems.length > 0" />
    <ResultsNotFound v-else />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "../components/SearchForm";
import SearchResultList from "../components/SearchResultList";
import ResultsNotFound from "../components/ResultsNotFound";

export default {
  computed: { ...mapGetters(["getItems"]) },
  components: {
    SearchForm,
    SearchResultList,
    ResultsNotFound
  }
};
</script>

<style lang="scss">
</style>