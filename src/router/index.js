import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Beranda.vue"




// const routerOptions = [
//   { path: "/", views: "Landing" },
//   { path: "/signin", views: "SignIn" },
//   { path: "/signup", views: "SignUp" },
//   { path: "/home", views: "Home", meta: { requiresAuth: true } },
//   { path: "*", views: "NotFound" }
// ];

// const routes = routerOptions.map(route => {
//   return {
//     ...route,
//     component: () => import(`../views/${route.component}.vue`)
//   };
// });

Vue.use(VueRouter);

// export default new VueRouter({
//   mode: "history",
//   routes
// });
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/beranda',
    name: 'Beranda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Beranda.vue')
  }, 
  {
    path: '/organisasi',
    name: 'Organisasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Organisasi.vue')
  }, {
    path: '/ruang-baca',
    name: 'Ruang Baca',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RuangBaca.vue')
  },
  {
    path: '/berita',
    name: 'Ruang Baca',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Berita.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
