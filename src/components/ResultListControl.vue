<template>
  <section :class="`${takeTheme}__control container`">
    <button
      :class="`btn ${takeTheme}__btn ${isActive('result-tile')}`"
      @click="setTheme('result-tile')"
    >
      <IconTile />
    </button>
    <button :class="`btn ${takeTheme}__btn ${isActive('result')}`" @click="setTheme('result')">
      <IconList />
    </button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import IconTile from "../assets/img/icon-tile.svg";
import IconList from "../assets/img/icon-list.svg";

export default {
  props: ["item"],
  // data() {
  //   return {
  //     theme: "result"
  //   };
  // },
  components: {
    IconTile,
    IconList
  },
  computed: { ...mapGetters(["takeTheme"]) },
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

<style>
</style>
