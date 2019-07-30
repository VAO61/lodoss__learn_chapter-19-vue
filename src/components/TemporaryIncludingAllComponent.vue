<template>
  <div>
    <header class="header">
      <!-- GitHubSearch logo -->
      <GitHubSearchLogo class="header__logo" />

      <div class="header__item header__control">
        <button class="header__btn header__btn_active btn">Search</button>
        <button class="header__btn header__btn btn">My list</button>
      </div>
    </header>
    <section class="search">
      <!-- Type -->
      <div class="form-group field-checklist">
        <!-- in focus go in top -->
        <label for="type">Type</label>
      </div>
    </section>
    <!-- <main class="main">
    
    </main>-->
  </div>
</template>

<script>
import GitHubSearchLogo from "../assets/logo.svg";

export default {
  name: "Example",
  components: {
    GitHubSearchLogo
  }
};
</script>

<style lang="scss">
</style>
