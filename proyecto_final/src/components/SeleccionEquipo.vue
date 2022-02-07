<template>
    <div class="coleccion mt-3">
            <div class="card mt-1" v-for="(jugador, index) in devolverJugadores()" :key="index">
                <div class="card-header">
                    <button class="btn btn-dark" @click="establecerParaVer(jugador.id)">
                        {{jugador.name}}
                    </button>
                </div>
                <div class="paraMostrar"  v-if="idParaVerCarta==jugador.id">
                    <img src="../assets/jugadores/2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                
            </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"SeleccionEquipo",
    data(){
        return{
            arrayJugadores:[],
            idParaVerCarta:"",
        }
    },
    methods: {
        async obtenerJugadores(nombreEquipo){
            await axios.get(`http://localhost:3000/players?team=${this.$route.params.nombreEquipo}`)
            .then(response => this.arrayJugadores = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
            
        },
        devolverJugadores(){
            return this.arrayJugadores;
        },
        establecerParaVer(id){
            this.idParaVerCarta=id;
        }
    },
    created() {
        this.obtenerJugadores();
    },
    updated() {
        this.obtenerJugadores();
    },
}
</script>
<style>
    .coleccion{

    }
</style>
<style scoped>
    .card:nth-of-type(even){
        background-color: #2c3034;
    }
    .card:nth-of-type(odd){
        background-color: #373b3e;
    }
    .card{
        border: 1px solid black;
    }
    button{
        border: 1px solid white;
    }
</style>