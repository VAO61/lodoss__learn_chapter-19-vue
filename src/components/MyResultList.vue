<template>
  <main :class="`main container ${theme}`">
    <!-- Когда вынесется в отдельный компонент можно будет удалять ${theme}__container и переносить свойства в ${theme} -->
    <div :class="`${theme}__control`">
      <button
        :class="`btn ${theme}__btn ${isActive('result-tile')}`"
        @click="setTheme('result-tile')"
      >
        <IconTile />
      </button>
      <button :class="`btn ${theme}__btn ${isActive('result')}`" @click="setTheme('result')">
        <IconList />
      </button>
    </div>
    <div :class="`${theme}__container`">
      <div
        :class="`${theme}__item-container` "
        v-for="item in getMyList"
        :key="item.id"
        :id="item.id"
      >
        <ResultItem :item="item" />

        <!-- <div :class="`${theme}__item result-item`">
          <div :class="`${theme}__item-details result-item-details`">
            <p class="result-item-details__language">{{item.language}}</p>
            <div class="result-item-details__stars-container">
              <IconStar class="result-item-details__icon" />
              <p class="result-item-details__count">{{item.stargazers_count}}</p>
            </div>
          </div>
          <div class="result-item__main">
            <a :href="`${item.html_url}`" target="_blank" class="lnk result-item__link">
              <p class="result-item__title">{{item.full_name}}</p>
            </a>
            <p class="result-item__desc">{{item.description}}</p>
            <div class="result-item__tags">
              <span class="result-item__tag" v-for="tag in item.topics" :key="tag">{{tag}}</span>
            </div>
          </div>
          <div :class="`${theme}__add-remove`">
            <button @click="addOrRemoveRepo(item)" :class="`btn checkbox ${theme}__checkbox ${getClassNameActive(item.id)}`" type="checkbox" />
            <button @click="addOrRemoveRepo(item)" :class="`btn btn_brand ${theme}__button ${getClassNameActive(item.id)}`">{{getButtonText(item.id)}}</button>
          </div>
        </div>-->
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ResultItem from "./ResultItem";
import IconTile from "../assets/img/icon-tile.svg";
import IconList from "../assets/img/icon-list.svg";
// import IconStar from "../assets/img/icon-star.svg";

export default {
  props: ["item"],

  data() {
    return {
      theme: "result"
    };
  },
  components: {
    ResultItem,
    IconTile,
    IconList
    // IconStar
  },
  computed: { ...mapGetters(["getMyList", "isExistsById"]) },
  methods: {
    // addOrRemoveRepo: function(item) {
    //   this.$store.commit("addOrRemoveRepo", item);
    // },
    isActive: function(value) {
      return this.theme === value ? `${this.theme}__btn_active` : "";
    },
    setTheme: function(value) {
      return (this.theme = value);
    }
    // getClassNameActive: function(id) {
    //   return this.isExistsById(id) ? "active" : "";
    // },
    // getButtonText: function(id) {
    //   return this.isExistsById(id) ? "Remove" : "Add";
    // }
  }
  // props: ['theme']
};
</script>

<style lang="scss">
</style>