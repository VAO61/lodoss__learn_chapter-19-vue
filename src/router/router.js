import Vue from 'vue';
import Router from 'vue-router';
import SearchList from '../views/SearchList';
import MyList from '../views/MyList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: SearchList
    },
    {
      path: '/search',
      component: SearchList
    },
    {
      path: '/my-list',
      component: MyList
    }
  ]
});