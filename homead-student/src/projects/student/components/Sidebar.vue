<template>
  <aside class="sidebar" :class="{ 'sidebar-hidden': !isOpen }">
    <div class="brand">
      <div class="logo">Sg</div>
      <div class="brand-text">
        <div class="brand-name">SMGS</div>
        <small class="brand-subtitle">Student Dashboard</small>
      </div>
    </div>

    <nav class="nav">
      <router-link 
        v-for="(link, index) in links" 
        :key="link.to" 
        :to="link.to" 
        class="nav-link" 
        :class="{active: $route.path === link.to}"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <span class="nav-icon">{{ link.icon || '●' }}</span>
        <span class="nav-label">{{ link.label }}</span>
      </router-link>
    </nav>

    <div class="user-info">
      <div class="user-label">Logged in as</div>
      <div class="user-name">{{ currentUser?.displayName || 'Guest' }}</div>
      <div class="user-meta">{{ currentUser?.email || '' }}</div>
      <button class="logout-btn" @click="handleLogout">
        <span>🚪</span>
        <span>Logout</span>
      </button>
    </div>
  </aside>
  
  <button class="sidebar-toggle" @click="$emit('toggle')" :class="{ 'toggle-open': isOpen }">
    <span class="toggle-line"></span>
    <span class="toggle-line"></span>
    <span class="toggle-line"></span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useAuth } from '../useAuth'
import { useRouter } from 'vue-router'

const { currentUser, logout } = useAuth()
const router = useRouter()

const props = defineProps({ 
  links: { type: Array, required: true },
  isOpen: { type: Boolean, default: true }
})

const emit = defineEmits(['toggle'])

function handleLogout() {
  logout().then(success => {
    if (success) {
      router.push('/login')
    }
  })
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border-right: 1px solid rgba(59, 130, 246, 0.1);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  top: 0;
  z-index: 100;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInLeft 0.5s ease-out;
}

.sidebar-hidden {
  transform: translateX(-100%);
}

.brand {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius);
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-name {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-foreground);
}

.brand-subtitle {
  color: var(--color-foreground-muted);
  font-size: 0.75rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-sm);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: slideInLeft 0.5s ease-out backwards;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--color-primary);
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.nav-link:hover {
  background: rgba(59, 130, 246, 0.15);
  color: white;
  transform: translateX(4px);
}

.nav-link.active {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.nav-link.active::before {
  transform: scaleY(1);
}

.nav-icon {
  font-size: 1.125rem;
  width: 1.25rem;
  text-align: center;
}

.nav-label {
  flex: 1;
}

.user-info {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8125rem;
  animation: fadeIn 0.8s ease-out;
}

.user-label {
  color: var(--color-foreground-subtle);
  margin-bottom: 0.5rem;
}

.user-name {
  font-weight: 600;
  color: var(--color-foreground);
  margin-bottom: 0.375rem;
}

.user-meta {
  font-size: 0.75rem;
  color: var(--color-foreground-muted);
}

.logout-btn {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-sm);
  color: #fca5a5;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
  transform: translateY(-1px);
}

.logout-btn span:first-child {
  font-size: 1rem;
}

.sidebar-toggle {
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 101;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-toggle:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.toggle-line {
  width: 1.25rem;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-open .toggle-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.toggle-open .toggle-line:nth-child(2) {
  opacity: 0;
}

.toggle-open .toggle-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 880px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar-hidden {
    transform: translateX(-100%);
  }

  .sidebar:not(.sidebar-hidden) {
    transform: translateX(0);
  }
}
</style>
