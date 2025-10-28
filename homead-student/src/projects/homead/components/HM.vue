<template>
  <div class="profile">
    <div class="empty"></div>
    <h1>World Mission High School (HM)</h1>
    <p>Kigali, Rwanda</p>
  </div>
  <div class="body">
    <div class="nav">
      <div class="image">
        <img src="/src/projects/homead/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
      </div>
      <div class="links">
      <router-link to="/homead" class="router-link"
        ><FontAwesomeIcon :icon="faHouse" /> Home</router-link
      >  <router-link to="/homead/Teachers" class="router-link"
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
    <div class="info">
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faGraduationCap" />
          <p>Students</p>
          <h1>456</h1>
          <p>Ongoing...</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faHand" />
          <p style="margin-top: 10%;">Absence/Presence ration</p>
      <router-link to="/homead/Mentron" class="routes"><h1>80-90</h1></router-link>
          <p style="margin-top: 10%;">7:30 A.M</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faClock" />
          <p>Schedule</p>
          <h1>Learning Time</h1>
          <p>8:30 A.M</p>
        </h1>
      </div>
      <div class="students">
        <h1>
          <FontAwesomeIcon :icon="faBullhorn" />
          <p>Announcements</p>
          <h1>Sports meeting</h1>
          <p>Pending...</p>
        </h1>
      </div>
    </div>
    <br />
    <div class="overall">
      <h1>Overall Discipline <FontAwesomeIcon :icon="faBrain" /></h1>
        <h1>Estimation:</h1>
        <div class="scale">
          <h1>87%</h1>
            <hr />
          <hr />
        </div>
      
    </div>
    <div class="admit">
      <h1><FontAwesomeIcon :icon="faStickyNote" class="Sticky" /> Admission requests</h1>
      <div class="request">
        <h1>🧑‍💻 John Doe - <span>L3NIT-B</span></h1>
        <hr
          style="
            width: 250px;
            background-color: black;
            padding: 3px;
            border-radius: 12px;
            margin-left: -50%;
          "
        />
        <br />
        <h1 class="enroll">
          - Recently studied at KCS. <br />
          - Would like to enroll for a place in NIT. <br />
          - Highly passionate in networking fields. <br />
          - Adept in linux.
        </h1>
      </div>
    </div>
    <div class="box1">
      <h1 style="margin-right: 40%;"><FontAwesomeIcon :icon="faClock" class="clock" /> Teaching Schedule</h1>
      <div class="null"></div>
      <div class="Level">
        <div class="time">
          <h1>8:00 - 8:40</h1>
        </div>
        <h1>L3MMP</h1>
        <div class="GD">
          <h1>Graphics Design</h1>
        </div>
      </div>
      <div class="Level4">
        <div class="null"></div>
        <div class="time2">
          <h1>8:00 - 8:40</h1>
        </div>
        <h1>L4SOD</h1>
        <div class="DS">
          <h1>Data Structure</h1>
        </div>
      </div>
    </div>
    <div class="Sudo">
      <h1>
        <a href="https://www.worldmissionhighschool.org/index"
          >"Visionary Minds Create Insightful Innovations"
        </a>
      </h1>
    </div>
    <div class="principal">
      <img src="/src/projects/homead/assets/Principal.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import {
  faBrain,
  faBullhorn,
  faClock,
  faHand,
  faStickyNote,
  faChalkboardTeacher,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, onUnmounted, computed } from 'vue'
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
<style scoped>
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
.router-link-active {
  background-color: #00d5ffc8;
 
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
  width: 105vw;
  top: 20%;
  z-index: 1000;
}
.nav.scrolled {
  box-shadow: 0px 6px 4px rgb(6, 6, 6);
  transition: all 0.1ms ease-out;
}
.routes {
  text-decoration: none;
  font-size: 20px;
  color: black;
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
.info {
  display: flex;
  width: fit-content;
  position: absolute;
  top: 15%;
  gap: 1%;
}
.students {
  border-radius: 11px;
  padding: 35px;

  left: 5%;
  width: 25vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: rgb(246, 241, 241);
  color: black;
}
.students:nth-child(1) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
}
.students:nth-child(2) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
}.students:nth-child(2) p {
  margin-top: -10%;
}

.students:nth-child(3) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
  left: 59%;
}
.students:nth-child(4) {
  box-shadow: 4px 5px 30px rgb(190, 190, 190);
  left: 59%;
}
.students h1:nth-child(3) {
  font-size: 40px;
}
.students p {
  color: rgb(55, 55, 55);
  font-size: 20px;
  margin-top: -2%;
}
.box1 {
  display: flex;
position: relative;
  width: 30rem;
  height: 25rem;
  background: rgb(246, 241, 241);
margin-top: -50%;
  left: 35%;
  border-radius: 12px;
  box-shadow: 1px 1px 49px rgb(156, 155, 155);
  transition: 0.3s ease-in-out;
}

.box1 > h1 {
  position: absolute;
  top: 10%;
  right: 3%;
  font-weight: 450;
  font-size: 25px;
  color: black;
}
.overall{
  left: 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 25rem;
  width: 30rem;
position: absolute;
top: 45%;
border-radius: 12px;
  box-shadow: 1px 1px 49px rgb(156, 155, 155);
  transition: 0.3s ease-in-out;
  align-items: start;
  color: black;
  padding: 10px;
}
.overall h1{
  margin-left: 1%;
    color: black;
   margin: 10px;
   font-weight: 600;
}
.admit {
  left: 40%;
  display: flex;
  justify-content: center;
  width: 26rem;
  height: 27rem;
  margin-top: 70%;
   border-radius: 12px;
  box-shadow: 1px 1px 49px rgb(156, 155, 155);
  transition: 0.3s ease-in-out;
}
.admit > h1 {
  left: 5%;
}
.Sticky {
  position: relative;
  left: 130%;
}
.box1:hover {
  transform: translateY(-5%);
  background: rgba(163, 163, 163, 0.374);
  color: whitesmoke;
}
.request {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 420px;
}
.request > h1 {
  color: rgb(8, 8, 8);
  font-weight: 450;
  font-weight: 500;
  padding: 5px;
  margin-top: -20%;
}
.request > .enroll {
  top: 90%;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
}
.clock {
  position: relative;
  left: 130%;
  color: black;
  font-size: 30px;
}
.null {
  width: 0.4em;
  position: absolute;
  border-radius: 5px;
  top: 30%;
  left: 10%;
  height: 7em;
  background: rgb(21, 21, 21);
}
.null:nth-child(1) {
  left: -29%;
  background-color: rgb(60, 60, 60);
}
.Level {
  color: black;
  position: relative;
  top: 30%;
  left: 15%;
}
.GD {
  position: absolute;
  width: 200px;
  color: rgb(60, 59, 59);
  font-size: 10px;
  top: 22%;
}
.Level4 {
  color: black;
  position: absolute;
  top: 63%;
  left: 15%;
}
.DS {
  color: rgb(60, 59, 59);
  font-size: 10px;
  top: 119%;
  width: 200px;
  position: absolute;
}
.time {
  position: absolute;
  font-size: 10px;
  left: 280%;
  width: 100px;
  opacity: 50%;
  padding: 3px;
  background: rgba(41, 171, 130, 0.386);
  border-radius: 12px;
}
.time2 {
  position: absolute;
  font-size: 10px;
  left: 320%;
  width: 100px;
  opacity: 80%;
  padding: 3px;
  background: rgb(22, 107, 255);
  border-radius: 12px;
}
.Sudo {
  width: 65rem;
  height: 10rem;
  background-color: black;
  position: absolute;
  top: 200%;
  left: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  border-radius: 12px;
  flex-direction: row;
  color: white;
  font-style: italic;
}
.Sudo a {
  text-decoration: none;
  color: rgb(151, 147, 147);
  transition: 0.5s ease;

  padding: 4px;
}
.Sudo a:hover {
  color: white;
}
.principal {
  position: absolute;
  top: 180%;
  left: 70%;
}
.principal img {
  width: 450px;
  height: 350px;
  padding: 1px;
}
.scale {
border-radius: 12px;
  font-size: 35px;
}
.scale hr {
  border-radius: 12px;
  width: 200px;
  position: absolute;
  height: 35px;
  background-color: black;
  box-shadow: 100px 0px 1px rgb(158, 157, 157);
    border: none;
}
/* Responsive Styles */
@media (max-width: 1200px) {
  .info {
    flex-wrap: wrap;
    justify-content: center;
  }
  .students {
    width: 45%;
    margin: 10px;
  }
  .box1 {
    width: 90%;
    left: 5%;
    margin-bottom: 20px;
  }
  .Sudo {
    width: 90%;
    left: 5%;
  }
  .principal img {
    width: 300px;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .body {
    min-height: 600vh;
  }
  .info {
    top: 25%;
    flex-direction: column;
    align-items: center;
  }
  .students {
    width: 80%;
    height: auto;
    padding: 20px;
  }
  .students h1:nth-child(3) {
    font-size: 30px;
  }
  .students p {
    font-size: 18px;
  }
  .box1 {
    position: static;
    width: 90%;
    height: auto;
    margin: 20px auto;
    top: auto;
  }
  .box1:nth-child(4), .box1:nth-child(5) {
    left: auto;
  }
  .Sudo {
    position: static;
    width: 90%;
    margin: 20px auto;
    top: auto;
  }
  .principal {
    position: static;
    margin: 20px auto;
    text-align: center;
  }
  .principal img {
    width: 250px;
    height: 200px;
  }
  .scale {
    font-size: 25px;
  }
  .Bad h1, .good h1 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .profile > h1 {
    font-size: 18px;
  }
  .profile p {
    font-size: 14px;
  }
  .nav {
    padding: 0 10px;
  }
  .links {
    gap: 10px;
  }
  .links .router-link {
    font-size: 12px;
    padding: 5px;
  }
  .students {
    width: 90%;
  }
  .box1 > h1 {
    font-size: 20px;
  }
  .request > h1 {
    font-size: 16px;
  }
  .request > .enroll {
    font-size: 16px;
  }
  .Sudo {
    font-size: 18px;
  }
}
</style>
