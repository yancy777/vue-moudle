import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
//require按需加载 

// const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login');
// const main = r => require.ensure([], () => r(require('../pages/Main')), 'main');

export default new Router({
    routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]




//   routes: [
//     {
//       path: '/',
//       component: login
//     },
//     {
//        path: '/main',
//        component: main,
//        children: [
//            //幼儿园管理列表页
//            {
//                 path: '/kgList/:userId',
//                 name:'kgList',
//                 component: kgList,
//            }]
//     }
//   ]
})
