import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Profile from '../views/ProfileView.vue'
import Grades from '../views/GradesView.vue'
import Assignments from '../views/AssignmentsView.vue'
import Attendance from '../views/AttendanceView.vue'
import Fees from '../views/FeesView.vue'
import Messaging from '../views/MessagingView.vue'
import Login from '../views/LoginView.vue'
import { Import } from 'lucide-react'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/grades', name: 'Grades', component: Grades },
  { path: '/assignments', name: 'Assignments', component: Assignments },
  { path: '/attendance', name: 'Attendance', component: Attendance },
  { path: '/fees', name: 'Fees', component: Fees },
  { path: '/messaging', name: 'Messaging', component: Messaging },
   { path: '/login', name: 'Login', component: Login },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

