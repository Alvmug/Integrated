<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (Secretary)</h1>
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
        <h2><FontAwesomeIcon :icon="faUserPlus" /> Student Registration</h2>
        <div class="registration">
          <div class="student" v-for="student in registeredStudents" :key="student.id">
            <h3>{{ student.name }}</h3>
            <p>ID: {{ student.id }}</p>
            <p>Class: {{ student.class }}</p>
            <p>Status: {{ student.status }}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2><FontAwesomeIcon :icon="faFileAlt" /> Documentation Management</h2>
        <div class="documents">
          <div class="document" v-for="doc in documents" :key="doc.id">
            <h3>{{ doc.title }}</h3>
            <p>Type: {{ doc.type }}</p>
            <p>Date: {{ doc.date }}</p>
            <a :href="doc.link" target="_blank">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  faChalkboardTeacher,
  faFileAlt,
  faGraduationCap,
  faHome,
  faMicrochip,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted } from 'vue'
import _ from 'lodash'

const registeredStudents = [
  { id: 1, name: 'John Doe', class: 'Grade 10', status: 'Active' },
  { id: 2, name: 'Jane Smith', class: 'Grade 11', status: 'Active' },
  { id: 3, name: 'Bob Johnson', class: 'Grade 9', status: 'Active' },
  { id: 4, name: 'Alice Brown', class: 'Grade 12', status: 'Active' },
]

const documents = [
  { id: 1, title: 'Student Handbook', type: 'PDF', date: '2023-09-01', link: '#' },
  { id: 2, title: 'Registration Form', type: 'DOCX', date: '2023-08-15', link: '#' },
  { id: 3, title: 'Academic Calendar', type: 'PDF', date: '2023-07-01', link: '#' },
  { id: 4, title: 'School Policies', type: 'PDF', date: '2023-06-01', link: '#' },
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

.registration {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.student {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.student h3 {
  color: #333;
  margin-bottom: 10px;
}

.student p {
  color: #666;
  margin: 5px 0;
}

.documents {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.document {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.document h3 {
  color: #333;
  margin-bottom: 10px;
}

.document p {
  color: #666;
  margin: 5px 0;
}

.document a {
  color: #007bff;
  text-decoration: none;
}

.document a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
