<template>
  <div class="app-root">
    <Sidebar :links="links" />
    <div class="main-area">
      <Topbar />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'

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
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  background: var(--bg-primary);
  overflow: hidden;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
}

.content {
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content::-webkit-scrollbar {
  width: 8px;
}

.content::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

.content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

@media (max-width: 880px) {
  .app-root {
    flex-direction: column;
  }
}
</style>
