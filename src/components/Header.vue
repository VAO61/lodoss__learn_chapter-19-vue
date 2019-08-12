<template>
  <header class="header">
    <a href="/" class="link">
      <GitHubSearchLogo class="header__logo" />
    </a>
    <div class="header__item header__control">
      <router-link class="link link_tdn header__link" to="/search">
        Search
        <!-- <button class="btn header__btn"></button> -->
      </router-link>
      <router-link class="link link_tdn header__link" to="/my-list">
        My list
        <!-- <button class="btn header__btn"></button> -->
      </router-link>
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
