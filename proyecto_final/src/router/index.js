import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: null
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
