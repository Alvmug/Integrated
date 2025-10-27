<template>
  <div class="app-root">
    <Sidebar :links="links" :isOpen="sidebarOpen" @toggle="sidebarOpen = !sidebarOpen" />
    <div class="main-area">
      <Topbar />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'

const sidebarOpen = ref(true)

const links = reactive([
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
  { label: 'Grades', to: '/grades' },
  { label: 'Assignments', to: '/assignments' },
  { label: 'Attendance', to: '/attendance' },
  { label: 'Fees', to: '/fees' },
  { label: 'Messaging', to: '/messaging' },
  { label: 'Login', to: '/login' },
])
</script>

<style scoped>
.app-root {
  display: flex;
  height: 100vh;
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--color-background);
  overflow: hidden;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  color: var(--color-foreground);
  overflow: hidden;
  min-width: 0; /* Prevent flex overflow */
}

.content {
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  animation: fadeIn 0.4s ease-out;
}

/* Responsive */
@media (max-width: 880px) {
  .app-root {
    flex-direction: column;
  }

  .content {
    padding: 16px;
  }
}
</style>