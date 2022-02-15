import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Clasificacion from "../views/Clasificacion.vue"
import Jornadas from "../views/Jornadas.vue"
import FormularioJornada from "../views/FormularioJornada.vue"
import Equipos from "../views/Equipos.vue"
import Jugadores from "../views/Jugadores.vue"
import NuevoJugador from "../views/NuevoJugadorVista.vue"
import EliminarJugador from "../views/EliminarJugador.vue"
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
    name: 'Home',
    component: Home
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
    path: '/equipos/',
    name: 'equipos',
    component: Equipos
  },
  {
    path: '/jugadores/:nombreEquipo/:equipoId',
    name: 'jugadoresEquipo',
    component: Jugadores
  },
  {
    path: '/nuevoJugador/',
    name: 'nuevoJugador',
    component: NuevoJugador
  },
  {
    path: '/eliminarJugador/',
    name: 'eliminarJugador',
    component: EliminarJugador
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
