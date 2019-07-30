<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <TemporaryIncludingAllComponent />
    <SomeNewComponent msg="New component" msgButton="Button" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SomeNewComponent from "./components/SomeNewComponent.vue";
import TemporaryIncludingAllComponent from "./components/TemporaryIncludingAllComponent.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    SomeNewComponent,
    TemporaryIncludingAllComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
