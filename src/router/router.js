import Vue from 'vue';
import Router from 'vue-router';
import SearchResult from '../views/SearchResult';
import MyList from '../views/MyList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: SearchResult
    },
    {
      path: '/search',
      component: SearchResult
    },
    {
      path: '/my-list',
      component: MyList
    }
  ]
});
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/user/:id',
//       component: User,
//       children: [
//         {
//           // при совпадении пути с шаблоном /user/:id/profile
//           // в <router-view> компонента User будет показан UserProfile
//           path: 'profile',
//           component: UserProfile
//         },
//         {
//           // при совпадении пути с шаблоном /user/:id/posts
//           // в <router-view> компонента User будет показан UserPosts
//           path: 'posts',
//           component: UserPosts
//         }
//       ]
//     }
//   ]
// });
