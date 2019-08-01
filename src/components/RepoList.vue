<template>
  <main class="main container result-list">
    <button class="btn btn_red"></button>
    <button class="btn btn_blue"></button>
    <!--
      v-bind:class="isTile ? `${listTile}__` : `${list}__`"
    -->
    <div v-bind:class="isTile ? `${listTile}__container` : `${list}__container`">
      <div v-bind:class="isTile ? `${listTile}__item` : `${list}__item`">
        <div v-bind:class="isTile ? `${listTile}__info` : `${list}__info`"></div>
      </div>
      <!-- .result-list -->
    </div>
    <!-- :class="ListMode ? TileTheme : RowsTheme" -->
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
      list: "result-list",
      listTile: "result-list_tile"
    };
  }
};
</script>

<style lang="scss">
</style>