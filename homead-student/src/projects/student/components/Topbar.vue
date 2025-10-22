<template>
  <header class="topbar">
    <div class="search-wrapper">
      <span class="search-icon">🔍</span>
      <input class="search" placeholder="Search classes, announcements or assignments..." />
    </div>
    <div class="top-actions">
      <button class="notification-btn">
        <span class="notification-icon">🔔</span>
        <span class="notification-badge">3</span>
      </button>
      <div class="avatar">{{ userInitials }}</div>
    </div>
  </header>
</template>

<script setup>
import { useAuth } from '../useAuth'

const userInitials = useAuth().userInitials
</script>

<style>
.topbar {
  height: 4.5rem;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  animation: slideInRight 0.5s ease-out;
}

.search-wrapper {
  flex: 1;
  max-width: 600px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  opacity: 0.5;
}

.search {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  color: var(--color-foreground);
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.search:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: var(--color-background);
}

.search::placeholder {
  color: var(--color-foreground-subtle);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  padding: 0.625rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn:hover {
  background: var(--color-surface-elevated);
  border-color: var(--color-border-hover);
  transform: translateY(-1px);
}

.notification-icon {
  font-size: 1.125rem;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--color-danger);
  color: var(--color-foreground);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 999px;
  min-width: 1.125rem;
  text-align: center;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-foreground);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid var(--color-border);
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
</style>
