<template>
  <main :class="`main container ${takeTheme}`">
    <div :class="`${takeTheme}__container`">
      <div
        :class="`${takeTheme}__item-container` "
        v-for="item in getItems"
        :key="item.id"
        :id="item.id"
      >
        <ResultItem :item="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ResultItem from "./ResultItem";

export default {
  props: ["item"],

  components: {
    ResultItem
  },
  computed: { ...mapGetters(["getItems", "takeTheme"]) }
};
</script>

<style lang="scss">
</style>