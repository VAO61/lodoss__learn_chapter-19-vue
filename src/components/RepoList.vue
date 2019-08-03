<template>
  <main class="main container result-list">
    <button class="btn btn_red"></button>
    <button class="btn btn_blue"></button>
    <!--
      v-bind:class="isTile ? `${resultTile}__` : `${result}__`"
    -->
    <div v-bind:class="isTile ? `${resultTile}__container` : `${result}__container`">
      <div
        v-bind:class="isTile ? `${resultTile}__item result-item` : `${result}__item result-item`"
      >
        <div v-bind:class="isTile ? `${resultTile}__item-info-wrap` : `${result}__item-info-wrap`">
          <p class="result-item__language">Javascript</p>
          <p class="result-item__stars">25k</p>
        </div>
        <div class="result-item__main">
          <a href class="lnk result-item__link result-item__title">TryGhost/Ghost</a>
          <p class="result-item__desc">The platform for professional publishers</p>
          <div class="result-item__tags">
            <span class="result-item__tag">Javascript</span>
            <span class="result-item__tag">cms</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
      result: "result",
      resultTile: "result-tile"
    };
  }
};
</script>

<style lang="scss">
</style>