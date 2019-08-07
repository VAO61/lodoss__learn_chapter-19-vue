<template>
  <MyResultList v-if="getMyList.length > 0" />
  <div v-else>Ничего нет</div>
</template>

<script>
import { mapGetters } from "vuex";
import MyResultList from "../components/MyResultList";

export default {
  computed: Object.assign({}, mapGetters(["getMyList"])),
  components: {
    MyResultList
  }
};
</script>

<style lang="scss">
</style>