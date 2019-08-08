<template>
  <section class="main">
    <Search />
    <SearchResultList v-if="getItems.length > 0" />
    <ResultsNotFound v-else />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "../components/Search";
import SearchResultList from "../components/SearchResultList";
import ResultsNotFound from "../components/ResultsNotFound";

export default {
  computed: { ...mapGetters(["getItems"]) },
  components: {
    Search,
    SearchResultList,
    ResultsNotFound
  }
};
</script>

<style lang="scss">
</style>