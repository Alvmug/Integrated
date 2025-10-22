
// src/useAuth.js
import { ref, onMounted } from 'vue'
import { auth, provider } from './firebaseConfig'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const user = ref(null)

export function useAuth() {
  async function login() {
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
    } catch (err) {
      console.error('Login failed', err)
    }
  }

  async function logout() {
    await signOut(auth)
    user.value = null
  }

  onMounted(() => {
    onAuthStateChanged(auth, (u) => {
      user.value = u
    })
  })

  return { user, login, logout }
}
