<template>
  <section class="main">
    <SearchForm />
    <ResultListControl v-if="getItems.length > 0" />
    <SearchResultList v-if="getItems.length > 0" />
    <ResultsNotFound v-else />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "../components/SearchForm";
import ResultListControl from "../components/ResultListControl";
import SearchResultList from "../components/SearchResultList";
import ResultsNotFound from "../components/ResultsNotFound";

export default {
  computed: { ...mapGetters(["getItems"]) },
  components: {
    SearchForm,
    ResultListControl,
    SearchResultList,
    ResultsNotFound
  }
};
</script>

<style lang="scss">
</style>