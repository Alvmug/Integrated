<template>
  <div class="profile-view">
    <h1>Profile</h1>
    <div class="profile-grid">
      <div class="profile-sidebar">
        <div class="card profile-card">
          <div class="profile-header">
            <img 
              v-if="currentUser.photoURL" 
              :src="currentUser.photoURL" 
              alt="Profile" 
              class="avatar-large-img"
            />
            <div v-else class="avatar-large">{{ userInitials }}</div>
            <div class="profile-info">
              <div class="profile-name">{{ currentUser.displayName || 'Guest' }}</div>
              <div class="profile-role">Student</div>
            </div>
          </div>

          <div class="contact-section">
            <div class="section-label">Contact</div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>{{ currentUser.email || 'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-main">
        <div class="card">
          <h3>Personal Details</h3>
          <div class="details-grid">
            <div class="detail-item">
              <span class="detail-label">Full Name</span>
              <span class="detail-value">{{ currentUser.displayName || 'N/A' }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <span class="detail-value">{{ currentUser.email || 'N/A' }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">User ID</span>
              <span class="detail-value">{{ currentUser.uid || 'N/A' }}</span>
            </div>
          </div>

          <button class="change-password-btn" @click="editing = !editing">
            {{ editing ? 'Cancel' : 'Change Password' }}
          </button>

          <div v-if="editing" class="password-form">
            <div class="input-group">
              <label>New Password</label>
              <input 
                type="password" 
                placeholder="Enter new password" 
                v-model="pw1" 
              />
            </div>
            <div class="input-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm new password" 
                v-model="pw2" 
              />
            </div>
            <button class="save-btn" @click="changePassword">Save Password</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../useAuth'

const { currentUser, userInitials } = useAuth()

const editing = ref(false)
const pw1 = ref('')
const pw2 = ref('')

function changePassword() {
  if (pw1.value !== pw2.value) {
    return alert('Passwords do not match')
  }
  alert('Password changed successfully')
  editing.value = false
  pw1.value = pw2.value = ''
}
</script>

<style scoped>
.profile-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.profile-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.25rem;
}

.profile-card {
  animation-delay: 0.1s;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.avatar-large {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.875rem;
  color: var(--color-foreground);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.avatar-large-img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-foreground);
  margin-bottom: 0.25rem;
}

.profile-role {
  color: var(--color-foreground-muted);
  font-size: 0.875rem;
}

.contact-section {
  margin-top: 1.5rem;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-foreground-subtle);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0;
  color: var(--color-foreground-muted);
  font-size: 0.875rem;
}

.contact-icon {
  font-size: 1.125rem;
}

.details-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.detail-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-foreground-subtle);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.detail-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-foreground);
}

.change-password-btn {
  margin-top: 1.5rem;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-foreground);
}

.change-password-btn:hover {
  background: var(--color-surface-elevated);
  border-color: var(--color-primary);
}

.password-form {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  animation: fadeIn 0.3s ease-out;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-foreground-muted);
  margin-bottom: 0.5rem;
}

.save-btn {
  width: 100%;
  margin-top: 0.5rem;
  background: var(--color-success);
}

.save-btn:hover {
  background: #059669;
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}
</style>
