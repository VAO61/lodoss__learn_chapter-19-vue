import Vue from 'vue';
import VueRouter from 'vue-router';
import RepoList from '../components/RepoList.vue';
import MyRepoList from '../components/MyRepoList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/search',
      component: RepoList
    },
    {
      path: '/my-list',
      component: MyRepoList
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
