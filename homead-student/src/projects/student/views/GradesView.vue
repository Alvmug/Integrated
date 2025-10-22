<template>
  <div class="grades-view">
    <h1>Grades</h1>
    <div class="card">
      <div class="card-header">
        <h3>Marks by Subject (Term 2)</h3>
        <button class="download-btn" @click="downloadTranscript">
          <span>📥</span>
          <span>Download Transcript</span>
        </button>
      </div>
      
      <table class="table grades-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="g in grades" :key="g.id" class="grade-row">
            <td>
              <div class="subject-cell">
                <span class="subject-icon">📚</span>
                <strong>{{ g.subject }}</strong>
              </div>
            </td>
            <td>
              <div class="marks-cell">
                <span class="marks-value">{{ g.marks }}</span>
                <div class="marks-bar">
                  <div class="marks-fill" :style="{ width: g.marks + '%' }"></div>
                </div>
              </div>
            </td>
            <td>
              <span class="grade-badge" :class="getGradeClass(g.marks)">
                {{ getGrade(g.marks) }}
              </span>
            </td>
            <td>{{ g.term }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const grades = [
  { id: 1, subject: 'Mathematics', marks: 88, term: 'Term 2' },
  { id: 2, subject: 'Physics', marks: 81, term: 'Term 2' },
  { id: 3, subject: 'PHP', marks: 89, term: 'Term 2' },
  { id: 4, subject: 'data structure', marks: 76, term: 'Term 2' },
  { id: 5, subject: 'English', marks: 92, term: 'Term 2' },
]

function getGrade(marks) {
  if (marks >= 90) return 'A+'
  if (marks >= 85) return 'A'
  if (marks >= 80) return 'B+'
  if (marks >= 75) return 'B'
  if (marks >= 70) return 'C+'
  return 'C'
}

function getGradeClass(marks) {
  if (marks >= 85) return 'grade-excellent'
  if (marks >= 75) return 'grade-good'
  return 'grade-average'
}

function downloadTranscript() {
  const header = ['Subject', 'Marks', 'Grade', 'Term']
  const rows = grades.map(g => [g.subject, g.marks, getGrade(g.marks), g.term])
  const csv = [header, ...rows].map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'transcript.csv'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.grades-view {
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

.download-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-success);
  padding: 0.625rem 1.25rem;
}

.download-btn:hover {
  background: #059669;
}

.grades-table {
  margin-top: 1rem;
}

.grade-row {
  animation: fadeIn 0.5s ease-out backwards;
}

.grade-row:nth-child(1) { animation-delay: 0.1s; }
.grade-row:nth-child(2) { animation-delay: 0.15s; }
.grade-row:nth-child(3) { animation-delay: 0.2s; }
.grade-row:nth-child(4) { animation-delay: 0.25s; }
.grade-row:nth-child(5) { animation-delay: 0.3s; }

.subject-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.subject-icon {
  font-size: 1.25rem;
}

.marks-cell {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.marks-value {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-foreground);
}

.marks-bar {
  width: 100px;
  height: 6px;
  background: var(--color-surface-elevated);
  border-radius: 999px;
  overflow: hidden;
}

.marks-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 999px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.grade-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.875rem;
}

.grade-excellent {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.grade-good {
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-primary);
}

.grade-average {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}
</style>
