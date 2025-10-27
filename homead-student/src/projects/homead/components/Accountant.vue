<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (Accountant)</h1>
    <p>Kigali, Rwanda</p>
  </div>
  <div class="body">
    <div class="nav">
      <div class="image">
        <img src="/src/projects/homead/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
      </div>
      <div class="links">
        <router-link to="/homead" class="router-link"
          ><FontAwesomeIcon :icon="faHome" /> Home</router-link
        >
        <router-link to="/homead/Teachers" class="router-link"
          ><FontAwesomeIcon :icon="faChalkboardTeacher" /> Teachers</router-link
        >
        <router-link to="/Student" class="router-link"
          ><FontAwesomeIcon :icon="faGraduationCap" /> Student</router-link
        >
        <router-link to="/homead/Admin" class="router-link"
          ><FontAwesomeIcon :icon="faMicrochip" /> Admin</router-link
        >
      </div>
    </div>
    <div class="content">
      <div class="section">
        <h2><FontAwesomeIcon :icon="faMoneyBillWave" /> Fee Structure</h2>
        <div class="fees">
          <div class="fee-item">
            <h3>Tuition Fees</h3>
            <p>Annual: $1,200</p>
            <p>Semester: $600</p>
          </div>
          <div class="fee-item">
            <h3>Registration Fees</h3>
            <p>$50 per year</p>
          </div>
          <div class="fee-item">
            <h3>Activity Fees</h3>
            <p>$100 per year</p>
          </div>
          <div class="fee-item">
            <h3>Transportation Fees</h3>
            <p>$200 per year</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faCreditCard" /> Payment Methods</h2>
        <div class="payments">
          <div class="payment-method">
            <h3>Bank Transfer</h3>
            <p>Account: 1234567890</p>
            <p>Bank: ABC Bank</p>
          </div>
          <div class="payment-method">
            <h3>Mobile Money</h3>
            <p>MTN: *182*1*1#</p>
            <p>Airtel: *325#</p>
          </div>
          <div class="payment-method">
            <h3>Cash Payment</h3>
            <p>Pay at the school office</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faFileInvoiceDollar" /> Financial Reports</h2>
        <div class="reports">
          <div class="report">
            <h3>Monthly Income Statement</h3>
            <p>Download: <a href="#">income-statement.pdf</a></p>
          </div>
          <div class="report">
            <h3>Annual Budget</h3>
            <p>Download: <a href="#">annual-budget.pdf</a></p>
          </div>
          <div class="report">
            <h3>Expense Report</h3>
            <p>Download: <a href="#">expense-report.pdf</a></p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faCalendarCheck" /> Payment Deadlines</h2>
        <div class="deadlines">
          <div class="deadline">
            <h3>Registration Fees</h3>
            <p>Due: January 15, 2024</p>
          </div>
          <div class="deadline">
            <h3>First Semester Tuition</h3>
            <p>Due: February 1, 2024</p>
          </div>
          <div class="deadline">
            <h3>Second Semester Tuition</h3>
            <p>Due: August 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  faCalendarCheck,
  faChalkboardTeacher,
  faCreditCard,
  faFileInvoiceDollar,
  faGraduationCap,
  faHome,
  faMicrochip,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.nav')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style>
body {
  background: rgb(5, 5, 5);
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    Segoe UI Symbol,
    'Noto Color Emoji';
  overflow: auto;
  margin: 0;
  max-width: 100%;
  padding: 0;
  overflow-x: hidden;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .content {
    max-width: 90%;
  }
  .section {
    width: 45%;
    margin: 10px;
  }
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    height: auto;
  }
  .nav .image img {
    width: 80px;
    height: 80px;
  }
  .links {
    position: static;
    width: 100%;
    gap: 10px;
    padding: 10px;
  }
  .links .router-link {
    font-size: 12px;
    min-width: 100px;
    padding: 5px;
  }
  .content {
    padding: 20px;
  }
  .section {
    width: 100%;
    margin: 20px 0;
  }
  .section h1 {
    font-size: 24px;
  }
  .section p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .profile h1 {
    font-size: 18px;
  }
  .profile p {
    font-size: 14px;
  }
  .section h1 {
    font-size: 20px;
  }
  .section p {
    font-size: 14px;
  }
}

.body {
  width: 100vw;
  min-height: 400vh;
  background: white;
  position: relative;
}

.nav {
  display: flex;
  align-items: center;
  background-color: black;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
  height: fit-content;
  width: 100vw;
  top: 18%;
  z-index: 1000;
}

.nav.scrolled {
  box-shadow: 0px 6px 4px rgb(6, 6, 6);
  transition: all 0.1ms ease-out;
}

.profile {
  display: flex;
  align-items: center;
  background-color: black;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
  height: fit-content;
  width: 100vw;
  height: 10vw;
  z-index: 1000;
}

.profile > h1 {
  top: -15%;
  left: 1%;
  font-weight: bold;
  position: relative;
  color: white;
}

.profile p {
  position: absolute;
  top: 60%;
  left: 7.5%;
  color: rgb(215, 211, 211);
}

.empty {
  border-radius: 100%;
  width: 5vw;
  height: 5vw;
  background: white;
}

.content {
  margin-top: 30vh;
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section {
  margin-bottom: 40px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section h2 {
  color: #333;
  margin-bottom: 20px;
}

.fees {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.fee-item {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.fee-item h3 {
  color: #333;
  margin-bottom: 10px;
}

.fee-item p {
  color: #666;
  margin: 5px 0;
}

.payments {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.payment-method {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.payment-method h3 {
  color: #333;
  margin-bottom: 10px;
}

.payment-method p {
  color: #666;
  margin: 5px 0;
}

.reports {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.report {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.report h3 {
  color: #333;
  margin-bottom: 10px;
}

.report p {
  color: #666;
}

.report a {
  color: #007bff;
  text-decoration: none;
}

.report a:hover {
  text-decoration: underline;
}

.deadlines {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.deadline {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.deadline h3 {
  color: #333;
  margin-bottom: 10px;
}

.deadline p {
  color: #666;
  margin: 5px 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
