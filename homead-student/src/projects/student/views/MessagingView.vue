<template>
  <div class="messaging-view">
    <h1>Messaging / Support</h1>
    <div class="messaging-grid">
      <div class="contacts-sidebar">
        <div class="card">
          <h3>Contacts</h3>
          <ul class="contacts-list">
            <li v-for="c in contacts" :key="c.id" class="contact-item" @click="select(c)">
              <div class="contact-avatar">{{ c.name.charAt(0) }}</div>
              <div class="contact-info">
                <div class="contact-name">{{ c.name }}</div>
                <div class="contact-status">Online</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="chat-main">
        <div class="card chat-card">
          <div class="messages-container">
            <div v-for="m in messages" :key="m.id" class="message" :class="{ 'message-own': m.from === 'You' }">
              <div class="message-avatar">{{ m.from.charAt(0) }}</div>
              <div class="message-content">
                <div class="message-header">
                  <span class="message-from">{{ m.from }}</span>
                  <span class="message-time">Just now</span>
                </div>
                <div class="message-text">{{ m.text }}</div>
              </div>
            </div>
          </div>

          <div class="message-input-container">
            <input 
              v-model="newMsg" 
              placeholder="Write a message..." 
              class="message-input"
              @keyup.enter="send"
            />
            <button class="send-btn" @click="send">
              <span>📤</span>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const contacts = [
  { id: 1, name: 'Teacher John' },
  { id: 2, name: 'Admin' },
  { id: 3, name: 'Counselor Sarah' },
]
const messages = ref([
  { id: 1, from: 'Teacher John', text: 'Please submit your report.' },
])
const newMsg = ref('')

function select(c) {
  alert('Open conversation with ' + c.name)
}

function send() {
  if (!newMsg.value) return
  messages.value.push({ id: Date.now(), from: 'You', text: newMsg.value })
  newMsg.value = ''
}
</script>

<style scoped>
.messaging-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.messaging-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.25rem;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.contact-item:hover {
  background: var(--color-surface-elevated);
  transform: translateX(4px);
}

.contact-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-foreground);
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
}

.contact-name {
  font-weight: 600;
  color: var(--color-foreground);
  font-size: 0.9375rem;
}

.contact-status {
  font-size: 0.75rem;
  color: var(--color-success);
}

.chat-card {
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
  gap: 0.875rem;
  animation: fadeIn 0.3s ease-out;
}

.message-own {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--color-foreground);
  flex-shrink: 0;
}

.message-content {
  flex: 1;
  max-width: 70%;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.375rem;
}

.message-from {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-foreground);
}

.message-time {
  font-size: 0.75rem;
  color: var(--color-foreground-subtle);
}

.message-text {
  background: var(--color-surface-elevated);
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  color: var(--color-foreground-muted);
  font-size: 0.9375rem;
  line-height: 1.5;
}

.message-own .message-text {
  background: var(--color-primary);
  color: var(--color-foreground);
}

.message-input-container {
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.message-input {
  flex: 1;
}

.send-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .messaging-grid {
    grid-template-columns: 1fr;
  }
}
</style>
