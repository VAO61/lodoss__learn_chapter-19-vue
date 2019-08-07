<template>
  <main class="main container no-results">
    <div class="no-results__container">
      <GitHubLogo class="no-results__bg" />
      <div class="*no-results__desc">
        <p class="no-results__title">No results found</p>
        <p class="no-results__desc">select other parameters and try again</p>
      </div>
    </div>
  </main>
</template>

<script>
import GitHubLogo from "../assets/img/github-logo.svg";

export default {
  name: "ResultsNotFound",
  components: {
    GitHubLogo
  }
};
</script>

<style scoped>
</style>
