<template>
  <main class="main container no-results">
    <div class="no-results__container">
      <GitHubLogo />
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
  name: "SvgLogoGitHub",
  components: {
    GitHubLogo
  }
};
</script>

<style>
</style>
