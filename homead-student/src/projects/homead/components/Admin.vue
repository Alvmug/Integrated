<template>
  <div class="navbar">
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
  <br />
  <router-link to="/homead/HM"
    ><div class="headmaster" @click="">
      <h1><FontAwesomeIcon :icon="faUserTie" class="tie" />HM</h1>
    </div>
  </router-link>
  <router-link to="/homead/DoS"
    ><div class="DoS">
      <h1><FontAwesomeIcon :icon="faMarker" class="tie" />DoS</h1>
    </div></router-link
  >
  <router-link to="/homead/Accountant"
    ><div class="Account">
      <h1><FontAwesomeIcon :icon="faMoneyCheckDollar" class="tie" />Accountant</h1>
    </div></router-link
  >
  <router-link to="/homead/Mentron"
    ><div class="Mentron">
      <h1><FontAwesomeIcon :icon="faHand" class="tie" />Mentron</h1>
    </div></router-link
  >
  <router-link to="/homead/Secretary"
    ><div class="Secretary">
      <h1><FontAwesomeIcon :icon="faFolderOpen" class="tie" />Secretary</h1>
    </div></router-link
  >
</template>
<script setup>
import {
  faFolderOpen,
  faHand,
  faMarker,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import { onBeforeMount, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const route = useRoute()
const isAdminActive = computed(() => {
  const adminRoutes = ['/homead/Admin', '/homead/HM', '/homead/DoS', '/homead/Secretary', '/homead/Mentron', '/homead/Accountant']
  return adminRoutes.includes(route.path)
})
const isHomeActive = computed(() => {
  return route.path === '/homead'
})

const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)

onBeforeMount(() => {
  const router = useRouter()
  let ask = window.prompt('Enter the code to access: ')
  if (ask !== '344') {
    Swal.fire({
      text: 'Invalid! Access Denied',
      background: '#1a1a1a',
      color: 'white',
      confirmButtonColor: '#d33',
    })
    router.push('/homead')
  } else {
    Swal.fire({
      icon: 'success',
      timer: 1500,
      text: 'Access Granted, transmitting to portal...',
      color: 'white',
      background: '#1a1a1a',
      radius: '12px',
    })
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style>
body {
  background: rgb(0, 0, 0);
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    Segoe UI Symbol,
    'Noto Color Emoji';
  overflow-y: hidden;
  margin: 0;
  max-width: 100%;
  padding: 0;
}

.navbar {
  display: flex;
  align-items: center;
  background-color: rgb(0, 0, 0);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
  height: fit-content;
  width: 100%;
    box-shadow: 0px -5px 15px #00d5ff53;
}

.navbar.scrolled {
  box-shadow: 0px 6px 4px rgb(6, 6, 6);
  transition: all 0.1ms ease-out;
}

.image {
  display: flex;
  min-height: 160px;
  background-color: black;
  top: 0;
}

.image > img {
  width: 160px;
  height: 160px;
}

.links {
  display: flex;
  justify-content: center;
  width: 800px;
  height: 83px;
  border-radius: 5px;
  position: relative;
  top: 1%;
  background-color: rgb(38, 38, 38);
  left: 15%;
  border: solid rgba(82, 81, 81, 0.258);
  gap: 90px;
}

.links .router-link:nth-child(1) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 100px;
  border-radius: 5px;
  margin-top: 2%;
  padding: 8px;
  height: 43px;
  text-decoration: none;
}

.links .router-link:nth-child(2) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 120px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}

.links .router-link:nth-child(3) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 110px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}

.links .router-link:nth-child(4) {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  width: 100px;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  margin-top: 2%;
  height: 43px;
}

.router-link {
  background: transparent;
}

.router-link:hover {
  transform: translateY(-9%);
  background-color: rgb(0, 0, 0);
}

.router-link-active {
  background-color: rgb(40, 205, 255);
}

/* Media Queries */
@media (max-width: 1200px) {
  .links {
    left: 15%;
    gap: 60px;
    width: 80%;
  }
}

@media (max-width: 992px) {
  .links {
    position: static;
    width: 100%;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    padding: 1rem;
  }

  .links .router-link {
    font-size: 14px;
    width: auto;
    min-width: 120px;
    padding: 8px 12px;
    margin: 0.25rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 0.5rem;
    height: auto;
  }

  .image {
    min-height: auto;
    margin-bottom: 1rem;
  }

  .image > img {
    width: 100px;
    height: 100px;
  }

  .links {
    position: static;
    width: 100%;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    padding: 1rem;
  }

  .links .router-link {
    font-size: 14px;
    width: auto;
    min-width: 120px;
    padding: 8px 12px;
    margin: 0.25rem;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .links {
    gap: 10px;
  }

  .links .router-link {
    font-size: 12px;
    min-width: 100px;
    padding: 6px 10px;
  }
}

@media (max-width: 400px) {
  .links .router-link {
    font-size: 11px;
    min-width: 90px;
    padding: 5px 8px;
  }

  .headmaster, .DoS, .Account, .Mentron, .Secretary {
    width: 90% !important;
    height: 150px !important;
    left: 5% !important;
    top: auto !important;
    margin: 10px 0;
    position: relative !important;
  }

  .headmaster > h1, .DoS > h1, .Account > h1, .Mentron > h1, .Secretary > h1 {
    font-size: 2em !important;
    top: 20% !important;
  }
}

.headmaster:hover {
  transform: translateY(-2%);
   box-shadow: 0px 0px 10px rgb(1, 166, 255);
}
.headmaster {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 5%;
  width: 25rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  transition: 0.5s ease;
    box-shadow: 0px 0px 1px rgba(21, 172, 253, 0.712);
}
.headmaster > h1 {
  position: relative;
  top: 25%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 4em;
}

.DoS {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 40%;
  width: 20rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  transition: 0.5s ease;
    box-shadow: 0px 0px 1px rgba(21, 172, 253, 0.642);
}
.DoS:hover {
  transform: translateY(-2%);
   box-shadow: 0px 0px 10px rgb(1, 166, 255);
}
.DoS > h1 {
  position: relative;
  top: 20%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 4em;
}
.Secretary {
  display: flex;
  position: absolute;
  top: 75%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 40%;
  width: 20rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  transition: 0.5s ease;
    box-shadow: 0px 0px 1px rgba(21, 172, 253, 0.664);
}
.Secretary:hover {
  transform: translateY(-2%);
   box-shadow: 0px 0px 10px rgb(1, 166, 255);
}
.Secretary > h1 {
  position: relative;
  top: 35%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 2.5em;
}
.Account > h1 {
  position: relative;
  top: 28%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 2.5em;
}
.Account:hover {
  transform: translateY(-2%);
   box-shadow: 0px 0px 10px rgb(1, 166, 255);
}
.Account {
  display: flex;
  position: absolute;
  top: 30%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 68%;
  width: 20rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  transition: 0.5s ease;
    box-shadow: 0px 0px 1px rgb(21, 172, 253);
}
.Mentron {
  display: flex;
  position: absolute;
  top: 75%;
  border-radius: 12px;
  justify-content: center;
  align-content: center;
  left: 5%;
  width: 25rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  transition: 0.5s ease;
      box-shadow: 0px 0px 1px rgb(21, 172, 253);
}
.Mentron:hover {
  transform: translateY(-2%);
   box-shadow: 0px 0px 10px rgb(1, 166, 255);
}
.Mentron > h1 {
  position: relative;
  top: 35%;
  color: rgb(199, 199, 199);
  font-weight: 500;
  font-size: 2.5em;
}
</style>
