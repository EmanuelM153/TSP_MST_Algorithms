import VistaInicio from '@/views/VistaInicio.vue'
import VistaGrafos from '@/views/VistaGrafos.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VistaInicio
    },
    {
      path: '/grafos',
      name: 'grafos',
      component: VistaGrafos
    },
  ]
})

export default router
