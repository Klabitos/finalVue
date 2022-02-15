<template>
    <div class="text-white">
        <div>
            <h2 class="display-2 text-white mb-3">Eliminar Jugador</h2>
            <img :src="require('../assets/escudos/'+this.idEquipo+'.png')" alt="Escudo" width="200" height="200" class="ms-3 imagenEquipo mt-3" v-if="this.nombreEquipo!=''">
            <img :src="require('../assets/LaLiga.png')" alt="Escudo" width="200" height="200" class="ms-3 imagenEquipo mt-3" v-else>
            <div class="input-group mb-3 d-flex flex-row justify-content-center align-items-center mt-4">
                <div class="parteIzq">
                    <button class="btn btn-secondary dropdown-toggle botonListaEquipos" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipos</button>
                    <ul class="dropdown-menu">
                        <li v-for="equipo, index in this.listaEquipos" :key="index" class="d-flex flex-row flex-nowrap justify-content-center" >
                            <img :src="require('../assets/escudos/'+index+'.png')" alt="Escudo" width="20" height="20" class="ms-3"> 
                            <a class="dropdown-item" href="#" @click="establecerEquipo(equipo.name, index)">{{equipo.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="input-group mb-3 d-flex flex-row justify-content-around">
                <div class="parteIzq">
                    <button class="btn btn-secondary dropdown-toggle botonListaEquipos" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <span :class="colorJugadores">Jugadores
                        <svg v-if="this.calcularJugadores.length==0 && this.nombreEquipo!=''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                         </svg>
                         </span>
                    </button>
                    
                    <ul class="dropdown-menu">
                        <li v-for="jugador, index in this.calcularJugadores" :key="index" class="d-flex flex-row flex-nowrap justify-content-center" >
                            <a class="dropdown-item" href="#" @click="establecerJugador(jugador.name)">{{jugador.name}}</a>
                        </li>
                    </ul>

                </div> 
            </div>
        </div>
        <div class="d-flex flex-column justify-content-center">
            <span v-if="this.nombreJugador!=''">Jugador: {{this.nombreJugador}}</span>
            <button class="btn btn-danger mt-3">Eliminar Jugador</button>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"EliminarJugador",
    data(){
        return{
            arrayJugadores:[],
            listaEquipos:[],
            nombreEquipo:"",
            idEquipo:0,
            nombreJugador:"",
        }
    },
    methods: {
        establecerEquipo(equipo, idEquipo){
            this.nombreEquipo=equipo;
            this.idEquipo=idEquipo;
            this.nombreJugador="";
        },
        establecerJugador(nombre){
            this.nombreJugador=nombre;
        },
        async obtenerJugadores(){
            await axios.get(`http://localhost:3000/players?team=${this.nombreEquipo}`)
            .then(response => this.arrayJugadores = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));   
        },
        async obtenerListaEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        
    },
    created(){
        this.obtenerListaEquipos();
    },
    computed:{
        calcularJugadores(){
            this.obtenerJugadores()
            return this.arrayJugadores;
        },
        colorJugadores(){
            if(this.calcularJugadores.length==0){
                return "gris";
            }else{
                return "blanco";
            }
        }
    }
}
</script>
<style>
    .gris{
        color: grey;
    }
    .blanco{
        color: white;
    }
</style>

<style scoped>
.parteIzq{
    width: 50%;
}
    .botonListaEquipos{
        width: 100%;
    }


</style>