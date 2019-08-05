<template>
  <header class="header">
    <!-- GitHubSearch logo -->
    <a href="/">
      <GitHubSearchLogo class="header__logo" />
    </a>

    <div class="header__item header__control">
      <button class="header__btn header__btn_active btn">Search</button>
      <button class="header__btn header__btn btn">My list</button>
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
