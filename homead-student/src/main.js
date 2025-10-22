// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // This will now use the .js file

const app = createApp(App)
app.use(router)
app.mount('#app')
