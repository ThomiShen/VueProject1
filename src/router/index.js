import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../components/first.vue'
import A from '../components/A.vue'
import B from '../components/B.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: First,   /*逗号不要忘记操作*/
    children:[
      {
        path: '/a',
        component: A
      },
      {
        path: '/b',
        component: B
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
