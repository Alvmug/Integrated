// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import homeadRoutes from '@/projects/homead/router/index.js'

// Simple routes for now
const routes = [
  {
    path: '/',
    redirect: '/homead',
    meta: { isRoot: true },
  },
  {
    path: '/homead',
    name: 'HomeAd',
    component: () => import('@/projects/homead/App.vue'),
    meta: { project: 'homead' },
    children: homeadRoutes,
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/projects/homead/App.vue'),
    meta: { project: 'student' },
  },{
    path: '/teachers',
    name: 'Teachers',
    component: () => import('@/projects/homead/App.vue'),
meta: { project: 'teachers' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
