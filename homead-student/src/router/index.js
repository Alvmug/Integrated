// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Teachers from '@/projects/homead/components/Teachers.vue'
import WelcomePage from '@/projects/homead/components/WelcomePage.vue'
import Student from '@/projects/homead/components/Student.vue'
import Admin from '@/projects/homead/components/Admin.vue'
import Start from '@/projects/homead/components/Start.vue'
import HM from '@/projects/homead/components/HM.vue'
import DoS from '@/projects/homead/components/DoS.vue'
import Secretary from '@/projects/homead/components/Secretary.vue'
import Accountant from '@/projects/homead/components/Accountant.vue'
import Mentron from '@/projects/homead/components/Mentron.vue'

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
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/projects/student/App.vue'),
    meta: { project: 'student' },
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
