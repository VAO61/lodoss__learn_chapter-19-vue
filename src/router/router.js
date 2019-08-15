import Vue from 'vue';
import Router from 'vue-router';
import Search from '../pages/Search';
import MyList from '../pages/MyList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Search
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/my-list',
      component: MyList
    }
  ]
});
