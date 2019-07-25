<template>
  <header class="header">
    <div class="header__item">l-logo</div>
    <button class="btn btn_test-class">{{ msgButton }}</button>
    <div class="header__item">r-details {{ msg }}</div>
  </header>
</template>

<script>
export default {
  name: "Some string",
  props: {
    msg: String,
    msgButton: String
  }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
