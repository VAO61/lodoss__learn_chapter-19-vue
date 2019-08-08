<template>
  <MyResultList v-if="getMyList.length > 0" />
  <main class="main no-results" v-else>
    <div class="no-results__container">
      <p class="no-results__title">Favorites list is empty</p>
      <p class="no-results__desc">
        <router-link class="link" to="/search">Choose</router-link>&nbsp;any repo and try again
      </p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import MyResultList from "../components/MyResultList";

export default {
  computed: { ...mapGetters(["getMyList"]) },
  components: {
    MyResultList
  }
};
</script>

<style lang="scss">
</style>