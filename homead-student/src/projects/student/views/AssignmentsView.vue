<template>
  <div class="assignments-view">
    <h1>Assignments</h1>
    <div class="card">
      <div class="card-header">
        <h3>All Assignments</h3>
        <div class="filter-tabs">
          <button class="filter-tab active">All</button>
          <button class="filter-tab">Pending</button>
          <button class="filter-tab">Submitted</button>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in items" :key="a.id">
            <td><strong>{{ a.title }}</strong></td>
            <td>{{ a.subject }}</td>
            <td>{{ a.due }}</td>
            <td>
              <span class="status-badge" :class="a.status === 'Submitted' ? 'status-submitted' : 'status-pending'">
                {{ a.status }}
              </span>
            </td>
            <td>
              <button 
                class="submit-btn" 
                @click="submit(a)" 
                :disabled="a.status === 'Submitted'"
              >
                {{ a.status === 'Submitted' ? 'Submitted ✓' : 'Submit' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const items = reactive([
  { id: 1, title: 'Math Homework 4', subject: 'Mathematics', due: '2025-10-07', status: 'Pending' },
  { id: 2, title: 'Biology Lab Report', subject: 'Biology', due: '2025-10-09', status: 'Pending' },
  { id: 3, title: 'History Essay', subject: 'History', due: '2025-10-15', status: 'Submitted' },
  { id: 4, title: 'Physics Problem Set', subject: 'Physics', due: '2025-10-12', status: 'Pending' },
])

function submit(a) {
  a.status = 'Submitted'
  alert('Assignment submitted: ' + a.title)
}
</script>

<style scoped>
.assignments-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
}

.filter-tab {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  font-size: 0.875rem;
  font-weight: 500;
}

.filter-tab.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.filter-tab:not(.active):hover {
  background: var(--color-surface-elevated);
}

.status-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.8125rem;
}

.status-pending {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.status-submitted {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.submit-btn {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
}

.submit-btn:disabled {
  background: var(--color-success);
  opacity: 0.7;
}
</style>
