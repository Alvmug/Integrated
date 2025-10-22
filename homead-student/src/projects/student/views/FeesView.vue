<template>
  <div class="fees-view">
    <h1>Fees</h1>
    
    <div class="card balance-card">
      <div class="balance-header">
        <div>
          <h3>Current Balance</h3>
          <p class="balance-amount">{{ formatCurrency(balance) }}</p>
        </div>
        <div class="balance-icon">💰</div>
      </div>
    </div>

    <div class="card" style="margin-top: 1.25rem">
      <h3>Payment History</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in payments" :key="p.id">
            <td>{{ p.date }}</td>
            <td><strong>{{ p.amount }}</strong></td>
            <td>
              <button class="receipt-btn" @click="downloadReceipt(p)">
                <span>📄</span>
                <span>Download</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const balance = 12000
const payments = [
  { id: 1, date: '2025-09-01', amount: '10,000 RWF' },
  { id: 2, date: '2025-06-01', amount: '15,000 RWF' },
  { id: 3, date: '2025-03-01', amount: '20,000 RWF' },
]

function formatCurrency(v) {
  return new Intl.NumberFormat().format(v) + ' RWF'
}

function downloadReceipt(p) {
  alert('Downloading receipt for ' + p.date)
}
</script>

<style scoped>
.fees-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.balance-card {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
  border-color: var(--color-primary);
}

.balance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-foreground);
  margin-top: 0.5rem;
}

.balance-icon {
  font-size: 4rem;
  opacity: 0.3;
}

.receipt-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  font-size: 0.8125rem;
}

.receipt-btn:hover {
  background: var(--color-surface-elevated);
  border-color: var(--color-primary);
}
</style>
