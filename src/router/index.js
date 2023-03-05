import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news.vue')
    },
    {
      path: '/rona',
      name: 'rona',
      component: () => import('../views/rona.vue')
    },
    {
      path: '/oh-seong',
      name: 'oh-seong',
      component: () => import('../views/oh-seong.vue')
    },
    {
      path: '/kyo-yang',
      name: 'kyo-yang',
      component: () => import('../views/kyo-yang.vue')
    },
    {
      path: '/akatsuki',
      name: 'akatsuki',
      component: () => import('../views/akatsuki.vue')
    },
    {
      path: '/potato',
      name: 'potato',
      component: () => import('../views/potato.vue')
    },
    {
      path: '/gold-moon',
      name: 'gold-moon',
      component: () => import('../views/gold-moon.vue')
    },
    {
      path: '/moo',
      name: 'moo',
      component: () => import('../views/moo.vue')
    },
    {
      path: '/enchant',
      name: 'enchant',
      component: () => import('../views/enchant.vue')
    },
  ]
})

export default router
