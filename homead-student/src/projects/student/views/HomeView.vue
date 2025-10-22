<template>
  <div class="home-view">
    <h1>Home Overview</h1>

    <section class="stats-grid">
      <div class="stat-card card" style="animation-delay: 0.1s">
        <div class="stat-icon attendance-icon">📊</div>
        <div class="stat-content">
          <h3>Attendance</h3>
          <p class="stat-value">{{ attendancePercent }}%</p>
          <p class="stat-meta">Term: {{ currentTerm }}</p>
        </div>
      </div>

      <div class="stat-card card" style="animation-delay: 0.2s">
        <div class="stat-icon grade-icon">🎓</div>
        <div class="stat-content">
          <h3>Current Average Grade</h3>
          <p class="stat-value">{{ averageGrade }}</p>
          <p class="stat-meta">GPA scale 0 - 100</p>
        </div>
      </div>

      <div class="stat-card card" style="animation-delay: 0.3s">
        <div class="stat-icon fee-icon">💳</div>
        <div class="stat-content">
          <h3>Fee Balance</h3>
          <p class="stat-value">{{ formatCurrency(feeBalance) }}</p>
          <p class="stat-meta">Last payment: {{ lastPaymentDate }}</p>
        </div>
      </div>

      <div class="stat-card card" style="animation-delay: 0.4s">
        <div class="stat-icon schedule-icon">📅</div>
        <div class="stat-content">
          <h3>Upcoming Classes</h3>
          <ul class="upcoming-list">
            <li v-for="cls in upcoming" :key="cls.time">
              <span class="time-badge">{{ cls.time }}</span>
              <span>{{ cls.subject }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-grid">
      <div class="main-content">
        <div class="card">
          <h3>Pending Assignments</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Due</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in pending" :key="a.id">
                <td><strong>{{ a.title }}</strong></td>
                <td>{{ a.due }}</td>
                <td><span class="status-badge">{{ a.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="margin-top: 1.25rem">
          <h3>School Announcements</h3>
          <ul class="announcement-list">
            <li v-for="(note, i) in announcements" :key="i" class="announcement-item">
              <span class="announcement-icon">📢</span>
              <span>{{ note }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-content">
        <div class="card">
          <h3>Notifications</h3>
          <ul class="notification-list">
            <li v-for="n in notifications" :key="n.id" class="notification-item">
              <div class="notification-dot"></div>
              <span>{{ n.message }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const attendancePercent = ref(92)
const currentTerm = ref('Term 2')
const averageGrade = ref(86)
const feeBalance = ref(12000)
const lastPaymentDate = ref('2025-09-01')
const upcoming = ref([
  { time: '08:00', subject: 'Mathematics' },
  { time: '09:15', subject: 'Physics' },
])
const pending = ref([
  { id: 1, title: 'Math Homework 4', due: '2025-10-07', status: 'Pending' },
  { id: 2, title: 'Biology Lab Report', due: '2025-10-09', status: 'Pending' },
])
const announcements = ref([
  'Parent meeting on 2025-10-10 at 3pm',
  'School sports day on 2025-11-02',
])
const notifications = ref([
  { id: 1, message: 'Teacher John commented on your submission.' },
  { id: 2, message: 'Fee receipt #345 uploaded.' },
])

function formatCurrency(value) {
  if (!value) return '0 RWF'
  return new Intl.NumberFormat().format(value) + ' RWF'
}
</script>

<style scoped>
.home-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.stat-card {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.stat-icon {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.attendance-icon {
  background: rgba(59, 130, 246, 0.1);
}

.grade-icon {
  background: rgba(16, 185, 129, 0.1);
}

.fee-icon {
  background: rgba(245, 158, 11, 0.1);
}

.schedule-icon {
  background: rgba(6, 182, 212, 0.1);
}

.stat-content {
  flex: 1;
}

.stat-content h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-foreground-muted);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--color-foreground);
  margin-bottom: 0.25rem;
}

.stat-meta {
  font-size: 0.8125rem;
  color: var(--color-foreground-subtle);
}

.upcoming-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.upcoming-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.time-badge {
  background: var(--color-surface-elevated);
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  font-family: var(--font-mono);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 1.25rem;
}

.main-content {
  min-width: 0;
}

.sidebar-content {
  min-width: 0;
}

.status-badge {
  background: rgba(90, 252, 3, 0.1);
  color: var(--color-warning);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.announcement-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  background: var(--color-surface-elevated);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.announcement-item:hover {
  background: var(--color-border);
  transform: translateX(4px);
}

.announcement-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.notification-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  background: var(--color-surface-elevated);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  cursor: pointer;
}

.notification-item:hover {
  background: var(--color-border);
  transform: translateX(4px);
}

.notification-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
  margin-top: 0.375rem;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
