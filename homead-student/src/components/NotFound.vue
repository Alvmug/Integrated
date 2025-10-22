<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <div class="navigation-links">
        <router-link to="/homead" class="nav-button">Go to HomeAd</router-link>
        <router-link to="/student" class="nav-button">Go to Student</router-link>
        <router-link to="/" class="nav-button">Go Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TypeScript setup for NotFound component
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.not-found h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.not-found p {
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.navigation-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #2980b9;
}
</style>
