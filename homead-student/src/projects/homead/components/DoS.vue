<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (DoS)</h1>
    <p>Kigali, Rwanda</p>
  </div>
  <div class="body">
    <div class="nav">
      <div class="image">
        <img src="/src/projects/homead/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
      </div>
      <div class="links">
        <router-link to="/homead" :class="['router-link', { 'router-link-active': isHomeActive }]"
          ><FontAwesomeIcon :icon="faHome" /> Home</router-link
        >
        <router-link to="/homead/Teachers" class="router-link"
          ><FontAwesomeIcon :icon="faChalkboardTeacher" /> Teachers</router-link
        >
        <router-link to="/homead/Student" class="router-link"
          ><FontAwesomeIcon :icon="faGraduationCap" /> Student</router-link
        >
        <router-link to="/homead/Admin" :class="['router-link', { 'router-link-active': isAdminActive }]"
          ><FontAwesomeIcon :icon="faMicrochip" /> Admin</router-link
        >
      </div>
    </div>
    <div class="content">
      <div class="section">
        <h2><FontAwesomeIcon :icon="faChartLine" /> Student Performance Assessment</h2>
        <div class="assessment">
          <div class="stat">
            <h3>Average Score</h3>
            <p>85%</p>
          </div>
          <div class="stat">
            <h3>Top Performer</h3>
            <p>John Doe - 98%</p>
          </div>
          <div class="stat">
            <h3>Needs Improvement</h3>
            <p>15 Students</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faBullhorn" /> Study Announcements</h2>
        <div class="announcements">
          <div class="announcement" v-for="(announcement, index) in announcements" :key="index">
            <p>{{ announcement }}</p>
            <button @click="removeAnnouncement(index)">Remove</button>
          </div>
          <div class="add-announcement">
            <input v-model="newAnnouncement" placeholder="Add new announcement" />
            <button @click="addAnnouncement">Add</button>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faBook" /> Study Resources</h2>
        <div class="resources">
          <div class="resource">
            <h3>PHP notes</h3>
            <p>Download link: <a href="#">php-textbook.pdf</a></p>
          </div>
          <div class="resource">
            <h3>Computer Lab Manual</h3>
            <p>Download link: <a href="#">comp-lab-manual.pdf</a></p>
          </div>
          <div class="resource">
            <h3>JS Notes</h3>
            <p>Download link: <a href="#">js-notes.pdf</a></p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faCalendarAlt" /> Exam Schedule</h2>
        <div class="schedule">
          <div class="exam">
            <h3>Mathematics Exam</h3>
            <p>Date: 2023-12-15</p>
            <p>Time: 9:00 AM - 12:00 PM</p>
          </div>
          <div class="exam">
            <h3>English Exam</h3>
            <p>Date: 2023-12-18</p>
            <p>Time: 10:00 AM - 1:00 PM</p>
          </div>
          <div class="exam">
            <h3>Physics Exam</h3>
            <p>Date: 2023-12-20</p>
            <p>Time: 8:00 AM - 11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  faBook,
  faBullhorn,
  faCalendarAlt,
  faChartLine,
  faChalkboardTeacher,
  faGraduationCap,
  faHome,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import _ from 'lodash'

const route = useRoute()
const isAdminActive = computed(() => {
  const adminRoutes = ['/homead/Admin', '/homead/HM', '/homead/DoS', '/homead/Secretary', '/homead/Mentron', '/homead/Accountant']
  return adminRoutes.includes(route.path)
})
const isHomeActive = computed(() => {
  return route.path === '/homead'
})

const announcements = ref([
  'Mid-term exams start next week. Prepare well!',
  'New study materials available in the library.',
  'Extra classes for struggling students on Saturdays.',
])

const newAnnouncement = ref('')

const addAnnouncement = () => {
  if (newAnnouncement.value.trim()) {
    announcements.value.push(newAnnouncement.value.trim())
    newAnnouncement.value = ''
  }
}

const removeAnnouncement = (index) => {
  announcements.value.splice(index, 1)
}

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

.assessment {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  margin: 10px;
}

.stat h3 {
  color: #666;
  margin-bottom: 10px;
}

.stat p {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.announcements {
  max-width: 600px;
}

.announcement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.announcement button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.add-announcement {
  display: flex;
  margin-top: 20px;
}

.add-announcement input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.add-announcement button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.resources {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.resource {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.resource h3 {
  color: #333;
  margin-bottom: 10px;
}

.resource p {
  color: #666;
}

.resource a {
  color: #007bff;
  text-decoration: none;
}

.resource a:hover {
  text-decoration: underline;
}

.schedule {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.exam {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.exam h3 {
  color: #333;
  margin-bottom: 10px;
}

.exam p {
  color: #666;
  margin: 5px 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
