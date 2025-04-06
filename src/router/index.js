import { createWebHistory, createRouter } from 'vue-router'

import welcome from '../components/welcome.vue'
import doctors from '../components/doctors.vue'
import contact from '../components/contact.vue'

const routes = [
  { path: '/', name:"home", component: welcome },
  { path: '/doctors', name:"doctors", component: doctors },
  { path: '/contact', name:"contact", component: contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router