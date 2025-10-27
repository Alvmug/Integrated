<template>
  <div class="navbar">
    <div class="image">
      <img src="/src/projects/homead/assets/sgms-high-resolution-logo.png" alt="SMGSlogo" />
    </div>
    <div class="links">
      <router-link to="/" class="router-link"><FontAwesomeIcon :icon="faHome" /> Home</router-link>
      <router-link to="/Teachers" class="router-link"
        ><FontAwesomeIcon :icon="faChalkboardTeacher" /> Teachers</router-link
      >
      <router-link to="/homead/Student" class="router-link"
        ><FontAwesomeIcon :icon="faGraduationCap" /> Student</router-link
      >
      <router-link to="/homead/Admin" class="router-link"
        ><FontAwesomeIcon :icon="faMicrochip" /> Admin</router-link
      >
    </div>
  </div>
  <br />
  <div class="add">
    <h1>Scholastic Indulgence</h1>
    <p class="center">Your academic perfomance, activities, and controls in one place.</p>
    <router-link to="/Start" class="register">Get Started</router-link>
  </div>
  <br />
  <div class="desc">
    <div class="Storage">
      <img src="/src/projects/homead/assets/Documents.jpg" alt="" />
      <FontAwesomeIcon :icon="faSchool" class="Icon" />
      <h1>Documentation</h1>
      <p>
        A stronghold for academic documents, and facilitation of document retrieval. Effective
        management of a school's classified documents for students. Info is safe with us.
      </p>
    </div>
    <div class="monitor">

      <FontAwesomeIcon :icon="faCamera" class="Icon" />
      <h1>Monitoring & Announcements</h1>
      <p>
        Delightful real-time display of academic activities and situations. Students can't miss any
        events.
      </p>
    </div>
    <div class="result">
      <h1>Perfomance Illustration</h1>
      <p>
        A showcase of a student's overall perfomance. Hence, their report card. This also gives
        teachers a lot more control. The best feature yet!
      </p>
    </div>
    <div class="join">
        <h1>Join Us.</h1>
        <p>
         Turn Over - We expect your full remarks over issues, bugs and errors. Make sure to contact as if met with an error
        </p>
        <div class="inp">
          <form action="">
            <label for="">First name *</label>
            <br>
            <input type="text" required>
            <br>
            <label for="">Last name *</label>
            <br>
            <input type="text" required>
            <br>
            <label for="">Email *</label>
            <br>
            <input type="text" required>
            <br>
            <label for="">Phone </label>
            <br>
            <input type="tel">
            <br>
            <div class="message">
            <label for="">Message </label>
            <br>
            <input type="field">
            </div>
          </form>
        </div>
                 <FontAwesomeIcon :icon="faBellConcierge" class="Ring"/>
      </div>
  </div>
  <br />
</template>
<script setup>
import _ from 'lodash'
import { onMounted, onUnmounted } from 'vue'
const handleScroll = _.debounce(() => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}, 10)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target)
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      threshold: 0.5,
    },
  )
  const description = document.querySelectorAll('.desc')
  description.forEach((el) => observer.observe(el))

  const hiddenElements = document.querySelectorAll('.add')
  hiddenElements.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import { faBellConcierge, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
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
  overflow: hidden;
  margin: 0;
  max-width: 100%;
  padding: 0;
}

.add {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 16%;
  position: absolute;
  top: 40%;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 40px;
  color: rgb(206, 206, 206);
  flex-direction: column;
  opacity: 0;
  transition: 1.4s ease;
}
.add.show {
  opacity: 1;
}
.add h1 {
  font-weight: bold;
}.add h1:hover {
  transform: translateY(-3%);
}
.add .center {
  text-align: center;
}
.add p {
  font-size: 25px;
  width: 590px;
  opacity: 80%;

}
.add .register {
  position: absolute;
  top: 120%;
  text-decoration: none;
  color: rgb(0, 0, 0);
background: rgb(255, 255, 255);
  font-weight: 550;
  border-radius: 35px;
  font-size: 40px;
  padding: 5px 5px;
  width: 310px;
  text-align: center;
  transition: 0.3s ease;
}
.add .register:hover {
  background: rgb(63, 61, 61);
  color: rgb(255, 255, 255);
}
.desc {
  border-radius: 10px;
  position: absolute;
  top: 150%;
  left: 4%;
  width: 90vw;
  height: 40rem;
  color: white;
 background: black;
  display: flex;
  align-items: center;
  transition: 0.6s ease;
}
.Storage {
  display: flex;
  position: relative;
  top: -29%;
  left: 42%;
  border-radius: 12px;
  width: 33vw;
  height: 12rem;
 padding: 10px;
 background-color: rgb(255, 255, 255);
}
.Storage p {
  position: absolute;
left: 1%;
  top: 55%;
  font-size: 15x;
  font-weight: 650;
  width: 600px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(39, 39, 39);
  color: rgb(205, 205, 205);
}
.Storage h1 {
  margin-top: 3%;
  font-size: 40px;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.Storage img {
  border-radius: 12px;
  position: absolute;
  top: 20%;
  right: 150%;
  height: 100px;
  width: 250px;
}
.Icon {
  opacity: 80%;
  font-size: 45px;
  margin-left: -4%;
  padding: 5% 5%;
  color: black;
}
.Icon:nth-child(1){
  margin-left: 10%;
}
.monitor {
  display: flex;
  position: relative;
  top: 15%;
  left: 5%;
  border-radius: 12px;
  width: 40vw;
  height: 10rem;
  padding: 10px;
  background: whitesmoke;
}
.monitor h1 {
  margin-top: 3%;
  margin-left:1%;
  font-size: 30px;
  font-weight: 500;
color: rgb(0, 0, 0);
}
.monitor p {
  font-style: italic;
  position: absolute;
  left: 10%;
  top: 95%;
  font-size: 18px;
  opacity: 100%;
  font-weight: 600;
  width: 500px;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(43, 43, 43);
}

.monitor img {
  opacity: 80%;
  border-radius: 12px;
  position: absolute;
  top: -16%;
  left: 125%;
  height: 1000px;
  width: 300px;
     border: whitesmoke solid;
}
.monitor, .Storage{
  transition: 0.5s ease;
}
.monitor:hover, .Storage:hover{
  transform: translateY(-5%);
}
.result {
  position: absolute;
  display: flex;
  top: 100%;
  color: black;
  width: 55vw;
  left: 0%;
  height: 10rem;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px;
  background-color: rgb(216, 216, 216);
}
.result h1 {
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-top: 4%;
  margin-left: -25%;
}
.result p {
  position: absolute;
  left: 1%;
  top: 75%;
  font-size: 19px;
  color: rgb(220, 220, 220);
  font-weight: 600;
  width: 40rem;
  padding: 10px;
  border-radius: 12px;
  background-color: rgb(43, 43, 43);
}
.join {
  margin-top: 180%;
  margin-left: -59%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1300px;
  border-radius: 12px;
  box-shadow: 1px 1px 18px rgb(48, 48, 48);
  height: 800px;
}
.join h1 {
  font-weight: bold;
}
.join > *:hover{
  transform: translateY(-6%);
}.join > *{
 transition: 0.5s ease;
}
.join p {
  font-size:18px;
  width: 400px;
  color: rgb(246, 246, 246);
  font-weight: 600;
  margin-left: -50%;
  margin-top: 10%;
  padding: 3px;
  box-shadow: 1px 1px 1px rgb(111, 160, 225);
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
.router-link:hover {
  transform: translateY(-9%);
  background-color: rgb(0, 0, 0);
}
.router-link-active {
  background-color: rgb(24, 23, 23);
  box-shadow: -4px 2px 1px white;
}
.inp{
  margin-top: 10%;
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
}

input{
  padding: 5px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 20px;
}
input:focus{
  outline: none;
}
.message input{
  height: 60px;
}
.join> .Ring{
  font-size: 390px;
  margin-top: -50%;
  margin-left: 50%;
  color: rgb(182, 182, 182);
}

/*Media Queries: */
/* Enhanced Responsive Media Queries */
@media (max-width: 1200px) {
  .links {
    left: 15%;
    gap: 60px;
    width: 80%;
  }
  
  .add {
    left: 10%;
    font-size: 40px;
  }
  
  .add p {
    font-size: 24px;
    width: 500px;
  }
  
  .Storage, .monitor {
    width: 45vw;
  }
}

@media (max-width: 992px) {
  .desc {
    flex-direction: column;
    height: auto;
    top: 80%;
    padding: 2rem 0;
  }
  
  .Storage, .monitor {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 90%;
    height: auto;
    margin: 2rem auto;
    background: none !important;
  }
  
  .Storage img {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto 1rem;
    display: block;
  }
  
  .monitor img {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto 1rem;
    display: block;
  }
  
  .Storage p, .monitor p {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin-top: 1rem;
  }
  
  .result {
    position: relative;
    top: 0;
    width: 90%;
    height: auto;
    margin: 2rem auto;
    padding: 2rem 0;
  }
  
  .join {
    position: relative;
    top: 0;
    width: 90%;
    margin: 2rem auto;
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
  
  .add {
    position: static;
    margin: 3rem auto;
    text-align: center;
    font-size: 24px;
    width: 90%;
  }
  
  .add h1 {
    font-size: 2.5rem;
  }
  
  .add p {
    font-size: 18px;
    width: 100%;
    margin: 1rem auto;
  }
  
  .add .register {
    position: relative;
    top: 0;
    margin: 2rem auto;
    font-size: 20px;
    width: 200px;
  }
  
  .Storage h1, .monitor h1 {
    font-size: 28px;
    text-align: center;
    margin-left: 0;
  }
  
  .Storage p, .monitor p {
    font-size: 16px;
  }
  
  .result h1 {
    margin-left: 0;
    text-align: center;
  }
  
  .result p {
    width: 90%;
    left: 5%;
  }
  
  .join h1 {
    margin-left: 0;
    text-align: center;
  }
  
  .join p {
    font-size: 20px;
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
  
  .add {
    font-size: 20px;
  }
  
  .add h1 {
    font-size: 2rem;
  }
  
  .add p {
    font-size: 16px;
  }
  
  .add .register {
    font-size: 18px;
    width: 180px;
  }
  
  .Storage h1, .monitor h1 {
    font-size: 24px;
  }
  
  .Storage p, .monitor p {
    font-size: 14px;
  }
  
  .Icon {
    font-size: 35px;
  }
  
  .result h1 {
    font-size: 24px;
  }
  
  .result p {
    font-size: 14px;
  }
  
  .join h1 {
    font-size: 2rem;
  }
  
  .join p {
    font-size: 16px;
  }
}

/* Fix for very small screens */
@media (max-width: 400px) {
  .links .router-link {
    font-size: 11px;
    min-width: 90px;
    padding: 5px 8px;
  }
  
  .add h1 {
    font-size: 1.8rem;
  }
  
  .Storage h1, .monitor h1 {
    font-size: 20px;
  }
}

/* Ensure images are responsive */
.Storage img,
.monitor img {
  max-width: 100%;
  height: auto;
}

/* Fix for mobile scrolling */
@media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  .desc {
    width: 100%;
    left: 0;
  }
}

/* Additional responsive improvements */
@media (max-width: 1200px) {
  .add {
    width: 80%;
  }
  .desc {
    flex-direction: column;
    align-items: center;
  }
  .Storage, .monitor, .result {
    width: 80%;
    margin: 20px 0;
  }
}

@media (max-width: 480px) {
  .add h1 {
    font-size: 1.5rem;
  }
  .add p {
    font-size: 14px;
  }
  .Storage h1, .monitor h1, .result h1 {
    font-size: 18px;
  }
  .Storage p, .monitor p, .result p {
    font-size: 12px;
  }
  .join h1 {
    font-size: 1.5rem;
  }
  .join p {
    font-size: 14px;
  }
  .inp input {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
