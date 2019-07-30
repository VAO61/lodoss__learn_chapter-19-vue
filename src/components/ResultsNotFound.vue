<template>
  <main class="main container">
    <div class="no-results">
      <!-- По-хорошему, нужен bgi -->
      <GitHubLogo />
      <p class="no-results__title">No results found</p>
      <p class="no-results__desc">select other parameters and try again</p>
    </div>
  </main>
</template>

<script>
import GitHubLogo from "../assets/img/github-logo.svg";

export default {
  name: "Example",
  components: {
    GitHubLogo
  }
};
</script>

<style>
</style>
