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

const routes = [
  {
    path: '',
    name: 'Welcome',
    component: WelcomePage,
  },
  {
    path: 'Start',
    name: 'Start',
    component: Start,
  },
  {
    path: 'Teachers',
    name: 'Teachers',
    component: Teachers,
  },
  {
    path: 'Student',
    name: 'Student',
    component: Student,
  },
  {
    path: 'Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: 'HM',
    name: 'HM',
    component: HM,
  },


  {
    path: 'DoS',
    name: 'DoS',
    component: DoS,
  },
  {
    path: 'Secretary',
    name: 'Secretary',
    component: Secretary,
  },
  {
    path: 'Mentron',
    name: 'Mentron',
    component: Mentron,
  },
  {
    path: 'Accountant',
    name: 'Accountant',
    component: Accountant,
  },
  {
    path: 'Mentron',
    name: 'Mentron',
    component: Mentron,
  },
]

export default routes
