import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../views/Inicio.vue"
import Home from "../views/Home.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
