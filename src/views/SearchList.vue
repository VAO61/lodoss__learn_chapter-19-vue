<template>
  <section class="main">
    <Search />
    <SearchResultList />
  </section>
</template>

<script>
import Search from "../components/Search";
import SearchResultList from "../components/SearchResultList";

export default {
  components: {
    Search,
    SearchResultList
  }
};
</script>

<style lang="scss">
</style>