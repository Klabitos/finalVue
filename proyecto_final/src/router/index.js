import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../views/Inicio.vue"
import Home from "../views/Home.vue"
import Clasificacion from "../views/Clasificacion.vue"
import Jornadas from "../views/Jornadas.vue"
import FormularioJornada from "../views/FormularioJornada.vue"
import Equipos from "../views/Equipos.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clasificacion/:nombreEquipo/:equipoId',
    name: 'Clasificacion',
    component: Clasificacion
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/jornada/:numeroJornada',
    name: 'Jornadas',
    component: Jornadas
  },
  {
    path: '/formularioJornada',
    name: 'formularioJornada',
    component: FormularioJornada
  },
  {
    path: '/equipos/:nombreEquipo/:equipoId',
    name: 'equipos',
    component: Equipos
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
