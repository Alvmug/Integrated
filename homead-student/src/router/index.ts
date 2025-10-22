import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const WelcomeAsync = defineAsyncComponent({
  loader: () => import('@/projects/homead/components/WelcomePage.vue'),
  loadingComponent: { template: '<div>Loading WelcomePage…</div>' },
  errorComponent: {
    // will show the loader error message if import/setup throws
    props: ['error'],
    template:
      '<div style="color:red;padding:1rem">Failed to load WelcomePage: {{ error?.message || "unknown" }}</div>',
  },
  delay: 200,
  timeout: 10000,
})

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/homead' },
  {
    path: '/homead',
    name: 'HomeAd',
    component: WelcomeAsync,
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/projects/student/App.vue'),
  },
  {
    path: '/debug',
    name: 'Debug',
    component: { template: '<div style="padding:1rem">Debug route OK</div>' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
