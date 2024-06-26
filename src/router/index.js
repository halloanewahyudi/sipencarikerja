import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component:() => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component:() => import('../views/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component:() => import('../views/Dashboard.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pencari-kerja',
      name: 'pencari kerja',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
