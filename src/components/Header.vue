<template>
  <header class="header">
    <router-link to="/">
      <GitHubSearchLogo class="header__logo" />
    </router-link>
    <div class="header__item header__control">
      <router-link class="link header__link" to="/search">
        <button class="btn header__btn">Search</button>
      </router-link>
      <router-link class="link header__link" to="/my-list">
        <button class="btn header__btn header__btn_active">My list</button>
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
