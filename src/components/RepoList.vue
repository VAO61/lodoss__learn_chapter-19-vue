<template>
  <main class="main container result-list">
    <div class="result-list__control">
      <button
        :class="`btn result-list__btn ${isActive('result-tile')}`"
        @click="setTheme('result-tile')"
      >
        <IconTile />
      </button>
      <button :class="`btn result-list__btn ${isActive('result')}`" @click="setTheme('result')">
        <IconList />
      </button>
    </div>
    <div :class="`${theme}__container`">
      <div v-for="item in getItems" :key="item.id" :class="`${theme}__item result-item`">
        <div :class="`${theme}__item-info-wrap`">
          <p class="result-item__language">Javascript</p>
          <p class="result-item__stars">25k</p>
        </div>
        <div class="result-item__main">
          <a href class="lnk result-item__link result-item__title">{{item.full_name}}</a>
          <p class="result-item__desc">The platform for professional publishers</p>
          <div class="result-item__tags">
            <span class="result-item__tag">Javascript</span>
            <span class="result-item__tag">cms</span>
          </div>
        </div>
        <!-- TODO: refactoring -->
        <div :class="`${theme}__add-remove`">
          <input :class="`${theme}__checkbox`" type="checkbox" />
          <button :class="`btn btn_brand ${theme}__button`">Add/Remove to/from list</button>
        </div>
        <!-- <div :class="`${theme}__item-checkbox-container`">
          <input :class="`${theme}__item-checkbox`" type="checkbox" />
          <span :class="`${theme}__item-my-checkbox`"></span>
        </div>-->
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import IconTile from "../assets/img/icon-tile.svg";
import IconList from "../assets/img/icon-list.svg";

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
    IconList
  },
  computed: Object.assign({}, mapGetters(["getItems"])),
  methods: {
    isActive: function(value) {
      return this.theme === value ? "result-list__btn_active" : "";
    },
    setTheme: function(value) {
      this.theme = value;
    }
  }
};
</script>

<style lang="scss">
</style>