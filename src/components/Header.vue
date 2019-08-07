<template>
  <header class="header">
    <a href="/">
      <GitHubSearchLogo class="header__logo" />
    </a>
    <div class="header__item header__control">
      <button class="btn header__btn">Search</button>
      <button class="btn header__btn header__btn_active">My list</button>
    </div>
  </header>
</template>

<script>
import GitHubSearchLogo from "../assets/img/github-search-logo.svg";

export default {
  name: "Example",
  components: {
    GitHubSearchLogo
  }
};
</script>

<style lang="scss">
</style>
