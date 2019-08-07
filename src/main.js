import './assets/scss/style.scss';
import Vue from 'vue';
import App from './App.vue';
// import router from './router/router.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// });
