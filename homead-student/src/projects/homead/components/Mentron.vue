<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (Mentron)</h1>
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
        <router-link to="Student" class="router-link"
          ><FontAwesomeIcon :icon="faGraduationCap" /> Student</router-link
        >
        <router-link to="/homead/Admin" class="router-link"
          ><FontAwesomeIcon :icon="faMicrochip" /> Admin</router-link
        >
      </div>
    </div>
    <div class="content">
      <div class="section">
        <h2><FontAwesomeIcon :icon="faCalendarCheck" /> Attendance Tracking</h2>
        <div class="attendance">
          <div class="student-attendance" v-for="student in attendanceData" :key="student.id">
            <h3>{{ student.name }}</h3>
            <p>Attendance: {{ student.percentage }}%</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: student.percentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faExclamationTriangle" /> Discipline Records</h2>
        <div class="discipline">
          <div class="record" v-for="record in disciplineRecords" :key="record.id">
            <h3>{{ record.student }}</h3>
            <p>Incident: {{ record.incident }}</p>
            <p>Date: {{ record.date }}</p>
            <p>Action: {{ record.action }}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faStar" /> Overall Student Behavior Ratings</h2>
        <div class="ratings">
          <div class="rating">
            <h3>Excellent</h3>
            <p>45 Students</p>
          </div>
          <div class="rating">
            <h3>Good</h3>
            <p>30 Students</p>
          </div>
          <div class="rating">
            <h3>Average</h3>
            <p>20 Students</p>
          </div>
          <div class="rating">
            <h3>Needs Improvement</h3>
            <p>5 Students</p>
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
  faExclamationTriangle,
  faGraduationCap,
  faHome,
  faMicrochip,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

const attendanceData = [
  { id: 1, name: 'John Doe', percentage: 95 },
  { id: 2, name: 'Jane Smith', percentage: 88 },
  { id: 3, name: 'Bob Johnson', percentage: 92 },
  { id: 4, name: 'Alice Brown', percentage: 85 },
]

const disciplineRecords = [
  { id: 1, student: 'John Doe', incident: 'Late to class', date: '2023-10-15', action: 'Warning' },
  { id: 2, student: 'Jane Smith', incident: 'Disruptive behavior', date: '2023-10-20', action: 'Detention' },
  { id: 3, student: 'Bob Johnson', incident: 'Cheating on exam', date: '2023-10-25', action: 'Suspension' },
]

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
  min-height: 100vh;
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

.attendance {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.student-attendance {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.student-attendance h3 {
  color: #333;
  margin-bottom: 10px;
}

.student-attendance p {
  color: #666;
  margin: 5px 0;
}

.progress-bar {
  background: #e9ecef;
  border-radius: 4px;
  height: 10px;
  margin-top: 10px;
}

.progress {
  background: #28a745;
  height: 100%;
  border-radius: 4px;
}

.discipline {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.record {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.record h3 {
  color: #333;
  margin-bottom: 10px;
}

.record p {
  color: #666;
  margin: 5px 0;
}

.ratings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.rating {
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.rating h3 {
  color: #333;
  margin-bottom: 10px;
}

.rating p {
  color: #666;
  font-size: 24px;
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
