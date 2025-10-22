<template>
  <div class="attendance-view">
    <h1>Attendance</h1>

    <div class="summary-cards">
      <div class="card summary-card">
        <div class="summary-icon present-icon">✅</div>
        <div class="summary-content">
          <h3>Present Days</h3>
          <p class="summary-value">{{ summary.present }}</p>
        </div>
      </div>

      <div class="card summary-card">
        <div class="summary-icon absent-icon">❌</div>
        <div class="summary-content">
          <h3>Absent Days</h3>
          <p class="summary-value">{{ summary.absent }}</p>
        </div>
      </div>

      <div class="card summary-card">
        <div class="summary-icon rate-icon">📊</div>
        <div class="summary-content">
          <h3>Attendance Rate</h3>
          <p class="summary-value">{{ attendanceRate }}%</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 1.25rem">
      <h3>Daily Record</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in records" :key="r.date">
            <td><strong>{{ r.date }}</strong></td>
            <td>{{ r.day }}</td>
            <td>
              <span class="status-badge" :class="r.status === 'Present' ? 'status-present' : 'status-absent'">
                {{ r.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const records = [
  { date: '2025-10-01', day: 'Monday', status: 'Present' },
  { date: '2025-10-02', day: 'Tuesday', status: 'Present' },
  { date: '2025-10-03', day: 'Wednesday', status: 'Absent' },
  { date: '2025-10-04', day: 'Thursday', status: 'Present' },
  { date: '2025-10-05', day: 'Friday', status: 'Present' },
]

const summary = { present: 45, absent: 3 }

const attendanceRate = computed(() => {
  const total = summary.present + summary.absent
  return Math.round((summary.present / total) * 100)
})
</script>

<style scoped>
.attendance-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.summary-card {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.summary-icon {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.present-icon {
  background: rgba(16, 185, 129, 0.1);
}

.absent-icon {
  background: rgba(239, 68, 68, 0.1);
}

.rate-icon {
  background: rgba(59, 130, 246, 0.1);
}

.summary-content h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-foreground-muted);
  margin-bottom: 0.5rem;
}

.summary-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--color-foreground);
}

.status-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.8125rem;
}

.status-present {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.status-absent {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-danger);
}
</style>
