<template>
    <div class="coleccion mt-3 text-white mb-3">
        <h2 class="display-2 text-white mb-3">Jugadores</h2>
        <div class="d-flex flex-row justify-content-between mt-5">
            <h3 class="text-white" v-text="this.$route.params.nombreEquipo"></h3>
            <img :src="require('../assets/escudos/'+this.$route.params.equipoId+'.png')" alt="Escudo" width="50" height="50"> 
        </div>
        <div class="card mt-1 cartuca" v-for="(jugador, index) in devolverJugadores()" :key="index">
            <div class="card-header">
                <button class="btn btn-dark" @click="establecerParaVer(jugador.id)">
                    {{jugador.name}}
                </button>
            </div>
            <div class="paraMostrar"  v-if="idParaVerCarta==jugador.id">
                <img :src="require('../assets/jugadores/'+jugador.id+'.jpg')" class="card-img-top" alt="Foto" v-if="existeRutaImagen(jugador.id)">
                <img src='../assets/jugadores/default.png' class="card-img-top" alt="Foto" v-else>
                <div class="card-body">
                    <h5 class="card-title"><u>  {{$route.params.nombreEquipo}}</u>&nbsp; #{{jugador.id}}</h5>
                    <div>
                        <p class="card-text">Goles: {{jugador.scores}}</p>
                        <div v-if="golesIsModificable" class="golModificable">
                            Añadir goles: 
                            <input type="number" name="" id="" min="0" value="0">
                            <button class="btn btn-secondary ms-2">Añadir</button>
                            <br>
                            <button class="btn btn-danger mt-3">Eliminar Jugador</button>
                        </div>
                    </div>                      
                </div>
            </div>              
        </div>
        <div class="alert alert-danger mt-4" role="alert" v-if="devolverJugadores().length==0">
        El equipo {{this.$route.params.nombreEquipo}} carece de jugadores actualmente. Lamentamos las molestias.
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
            idJugadoresSinFoto:[],
            golesIsModificable:false
        }
    },
    methods: {
        async obtenerJugadores(nombreEquipo){
            await axios.get(`http://localhost:3000/players?team=${this.$route.params.nombreEquipo}`)
            .then(response => this.arrayJugadores = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
            await this.comprobarJugadores();   
        },
        devolverJugadores(){
            return this.arrayJugadores;
        },
        establecerParaVer(id){
            this.idParaVerCarta=id;
        },
        comprobarJugadores(){ //ver si existe foto de los jugadores
            let idRuta;
            let error;
            this.idJugadoresSinFoto=[]
            for(let i=0; i< this.devolverJugadores().length; i++){
                idRuta = this.devolverJugadores()[i].id;
                try {
                    require('../assets/jugadores/'+idRuta+'.jpg')
                }
                    catch (e) {
                    error=true;
                    }
                if(error){
                    this.idJugadoresSinFoto.push(idRuta);
                }else{
                }
               
            }
        },
        existeRutaImagen(id){
            for(let j=0; j<this.idJugadoresSinFoto.length; j++){
                if(this.idJugadoresSinFoto[j]==id){
                    return false;
                }
            }
            return true;
        }
        
    },
    computed:{
    },
    created() {
        this.obtenerJugadores();  
        if(this.$route.name=="jugadoresEquipo"){
            console.log("goles");
            this.golesIsModificable=true;
        }else{
            this.golesIsModificable=false;
        }
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
        background-color: #212529;
        height: 10%;
    }
    .golModificable{
        border: 1px solid black;
        padding: 10px;
        background-color: rgb(71, 71, 71);
    }
    .cartuca{
        padding: 2%;
        
    }
</style>
<style scoped>
    .card-body{
        color: white;
    }
    input[type=number]{
        width: 13%;
    }
    .paraMostrar img{
        border: 1px solid black;
    }
</style>