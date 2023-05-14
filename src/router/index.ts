import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/button',
          component: () => import('../views/ButtonView.vue')
        },
        {
          path: '/input',
          component: () => import('../views/InputView.vue')
        },
        {
          path: '/message',
          component: () => import('../views/MessageView.vue')
        },
        {
          path: '/confirm',
          component: () => import('@/views/confirmView.vue')
        },
        {
          path: '/test',
          component: () => import('../views/TestView.vue')
        }
      ]
    }
  ]
})

export default router
