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
  components: {
    IconTile,
    IconList
  },
  computed: { ...mapGetters(["takeTheme"]) },
  methods: {
    isActive: function(value) {
      return this.theme === value ? `${this.theme}__btn_active` : "";
    },
    setTheme: function(value) {
      this.$store.commit("setTheme", value);
    }
  }
};
</script>

<style>
</style>
