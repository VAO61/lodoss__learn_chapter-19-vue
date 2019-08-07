<template>
  <main :class="`main container ${theme}`">
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
        v-for="item in getItems"
        :key="item.id"
        :id="item.id"
      >
        <div :class="`${theme}__item result-item`">
          <div :class="`${theme}__item-details result-item-details`">
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
              <!-- + HEADER XMR -->
              <span class="result-item__tag" v-for="tag in item.topics" :key="tag">{{tag}}</span>
            </div>
          </div>
          <!-- TODO: refactoring -->
          <div :class="`${theme}__add-remove`">
            <!-- checkbox_active for repo in myList -->
            <button :class="`btn checkbox *checkbox_active ${theme}__checkbox`" type="checkbox"></button>
            <button :class="`btn btn_brand ${theme}__button`">Add/Remove to/from list</button>
          </div>
        </div>
      </div>
    </div>
  </main>
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