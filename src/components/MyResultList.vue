<template>
  <main :class="`main container ${theme}`">aaa</main>
</template>

<script>
import { mapGetters } from "vuex";
import IconTile from "../assets/img/icon-tile.svg";
import IconList from "../assets/img/icon-list.svg";
import IconStar from "../assets/img/icon-star.svg";

export default {
  data() {
    return {
      theme: "result"
    };
  },
  components: {
    IconTile,
    IconList,
    IconStar
  },
  computed: Object.assign({}, mapGetters(["getItems"])),
  methods: {
    isActive: function(value) {
      return this.theme === value ? `${this.theme}__btn_active` : "";
    },
    setTheme: function(value) {
      this.theme = value;
    }
  }
};
</script>

<style lang="scss">
</style>