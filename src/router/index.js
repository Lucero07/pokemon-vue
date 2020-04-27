import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "../components/layout/main-view"
import Home from '../views/Home.vue'
import PokemonDetail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {

    path: "/",
    component: MainView,

    redirect: {
      name: "pokemon-search"
    },
    children: [
      {
        path: "dashboard",
        name: "pokemon-search",
        component: Home,

      },
      {
        path: ":id/detail/",
        name: "pokemon-detail",
        component: PokemonDetail,

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
