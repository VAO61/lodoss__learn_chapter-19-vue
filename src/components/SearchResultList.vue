<template>
  <main :class="`main container ${theme}`">
    <!-- Когда вынесется в отдельный компонент можно будет удалять ${theme}__container и переносить свойства в ${theme} -->

    <!-- <section :class="`${theme}__control`">
      <button
        :class="`btn ${theme}__btn ${isActive('result-tile')}`"
        @click="setTheme('result-tile')"
      >
        <IconTile />
      </button>
      <button :class="`btn ${theme}__btn ${isActive('result')}`" @click="setTheme('result')">
        <IconList />
      </button>
    </section>-->

    <div :class="`${theme}__container`">
      <div
        :class="`${theme}__item-container` "
        v-for="item in getItems"
        :key="item.id"
        :id="item.id"
      >
        <!-- <ResultItem :item="item" :theme="theme" /> -->
        <ResultItem :item="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ResultItem from "./ResultItem";
// import IconTile from "../assets/img/icon-tile.svg";
// import IconList from "../assets/img/icon-list.svg";
// import IconStar from "../assets/img/icon-star.svg";

export default {
  props: ["item"],

  data() {
    return {
      theme: "result"
    };
  },
  components: {
    ResultItem
    // IconTile,
    // IconList
    // IconStar
  },
  computed: { ...mapGetters(["getItems", "isExistsById"]) },
  methods: {
    // addOrRemoveRepo: function(item) {
    //   this.$store.commit("addOrRemoveRepo", item);
    // },
    isActive: function(value) {
      return this.theme === value ? `${this.theme}__btn_active` : "";
    },
    setTheme: function(value) {
      this.theme = value;
    }
    // getClassNameActive: function(id) {
    //   return this.isExistsById(id) ? "active" : "";
    // },
    // getButtonText: function(id) {
    //   return this.isExistsById(id) ? "Remove from list" : "Add to list";
    // }
  }
};
</script>

<style lang="scss">
</style>