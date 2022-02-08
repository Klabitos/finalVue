<template>
    <div class="coleccion mt-3">
        <div class="d-flex flex-row justify-content-between">
            <h1 class="display-5 text-white" v-text="this.$route.params.nombreEquipo"></h1>
            <img :src="require('../assets/escudos/'+this.$route.params.equipoId+'.png')" alt="Escudo" width="50" height="50"> 
        </div>
            <div class="card mt-1" v-for="(jugador, index) in devolverJugadores()" :key="index">
                <div class="card-header">
                    <button class="btn btn-dark" @click="establecerParaVer(jugador.id)">
                        {{jugador.name}}
                    </button>
                </div>
                <div class="paraMostrar"  v-if="idParaVerCarta==jugador.id">
                    <img :src="require('../assets/jugadores/'+jugador.id+'.jpg')" class="card-img-top" alt="Foto">
                <div class="card-body">
                        <h5 class="card-title"><u>  {{$route.params.nombreEquipo}}</u>&nbsp; #{{jugador.id}}</h5>
                        <p class="card-text">Goles: {{jugador.scores}}</p>
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
            nombreEquipo:"",
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
        if(this.nombreEquipo!=this.$route.params.nombreEquipo){
            this.nombreEquipo=this.$route.params.nombreEquipo;
            this.obtenerJugadores();
        }
        
    },
}
</script>
<style>

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
    .coleccion{
        border: 1px solid black;
        padding: 5%;
        border-radius: 10px;
    }
</style>
<style scoped>
    .card-body{
        color: white;
    }
</style>