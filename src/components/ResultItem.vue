<template>
  <!-- <div>
    <p>New common component for result list</p>
    <p :class="`${this.$parent.theme}__item`">{{item.full_name}}</p>
    <div class>{{theme}}</div>
  </div> -->
  <div :class="`${this.$parent.theme}__item result-item`">
      <div :class="`${this.$parent.theme}__item-details result-item-details`">
        <p class="result-item-details__language">{{item.language}}</p>
        <div class="result-item-details__stars-container">
          <IconStar class="result-item-details__icon" />
          <p class="result-item-details__count">{{item.stargazers_count}}</p>
        </div>
      </div>
      <div class="result-item__main">
        <a href class="lnk result-item__link">
          <p class="result-item__title">{{item.full_name}}</p>
        </a>
        <p class="result-item__desc">{{item.description}}</p>
        <div class="result-item__tags">
          <span class="result-item__tag" v-for="tag in item.topics" :key="tag">{{tag}}</span>
        </div>
      </div>
      <div :class="`${this.$parent.theme}__add-remove`">
        <button @click="addOrRemoveRepo(item)" :class="`btn checkbox ${this.$parent.theme}__checkbox ${getClassNameActive(item.id)}`" type="checkbox" />
        <button @click="addOrRemoveRepo(item)" :class="`btn btn_brand ${this.$parent.theme}__button ${getClassNameActive(item.id)}`">{{getButtonText(item.id)}}</button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import item from "./SearchResultList";
import IconStar from "../assets/img/icon-star.svg";

export default {
  props: ["item", "theme"],
  components: {
    IconStar
  },
  computed: { ...mapGetters(["getItems", "isExistsById"]) },
  methods: {
    addOrRemoveRepo: function(item) {
      this.$store.commit("addOrRemoveRepo", item);
    },
    getClassNameActive: function(id) {
      return this.isExistsById(id) ? "active" : "";
    },
    getButtonText: function(id) {
      return this.isExistsById(id) ? "Remove from list" : "Add to list";
    }
  }
  // data() {
  //   return {
  //     theme: "result",
  //   };
  // },
  // computed: { ...mapGetters(["getItems", "isExistsById"]) },
  // methods: {
  //   addOrRemoveRepo: function(item) {
  //     this.$store.commit("addOrRemoveRepo", item);
  //   },
  //   isActive: function(value) {
  //     return this.theme === value ? `${this.theme}__btn_active` : "";
  //   },
  //   setTheme: function(value) {
  //     this.theme = value;
  //   },
  //   getClassNameActive: function(id) {
  //     return this.isExistsById(id) ? "active" : "";
  //   },
  //   getButtonText: function(id) {
  //     return this.isExistsById(id) ? "Remove from list" : "Add to list";
  //   }
  // }
};
</script>

<style>
</style>
