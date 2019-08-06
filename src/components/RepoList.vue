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

/**
 * TODO: Flags
 */

// this.state: {
//   isPlate: false,
// };
// onClick = () => {
//   setState({
//     isPLate: !isPLate,
//   })
// }
// <div className={ isPlate? 'plate' : 'stroke'}>dsadsa</div>

/**
 * For <input> -> <button>
 * https://ru.vuejs.org/v2/guide/transitions.html#%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D1%8B-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8
 */
export default {
  data() {
    return {
      theme: "result" // 'result' or 'result-tile'
      // result: "result",
      // resultTile: "result-tile"
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