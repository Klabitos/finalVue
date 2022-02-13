<template>
    <div>
        <div :class="obtenerColorFondo" >
            <div class="row g-0 d-flex justify-content-between">
                <div class="col-md-4 foto d-flex align-items-center justify-content-between">
                    <img :src="require('../assets/escudos/'+this.equipo.id+'.png')" alt="Escudo" height="50" width="50" class="img rounded-start align-self-start mt-3 mb-3"> 
                    <h2 class="info"> {{this.index+1}}º -  &nbsp;&nbsp;&nbsp;       {{this.equipo.points}} puntos</h2>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title display-5">{{this.equipo.name}}</h5>
                        <p class="card-text">
                            <strong class="country mt-2 mb-2">{{this.equipo.country}}</strong>
                            <div class="scroll text-white mt-2 mb-2">
                                    <ul>
                                        <li><strong>JUGADORES</strong></li>
                                        <li v-for="jugador, index2 in this.arrayJugadores" :key="index2" class="text-white">
                                            {{jugador.name}}
                                        </li>
                                    </ul>
                            </div>  
                            <button class="btn btn-secondary mt-2">Nuevo Jugador</button>                          
                            
                        </p>                                      
                    </div>                   
                </div>               
            </div>          
        </div>
        <FormularioNuevoJugador v-if="mostrar" :nombreEquipo="this.equipo.name"></FormularioNuevoJugador>
    </div>
</template>
<script>
import axios from "axios"
import FormularioNuevoJugador from "../components/FormularioNuevoJugador.vue"
export default {
    name:"EquipoIndividual",
    components:{
        FormularioNuevoJugador
    },
    props:[
        "equipo", "index",
    ],
    data(){
        return{
            arrayJugadores:[],
            mostrar:true,
        }
    },
    methods:{
        async obtenerJugadores(nombreEquipo){
            const jugadores = await axios.get(`http://localhost:3000/players?team=${nombreEquipo}`)
            .then(response => this.arrayJugadores = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
            return jugadores;
        },
        
    },
    created(){
        this.obtenerJugadores(this.equipo.name);
    },
    computed:{
        obtenerColorFondo(){
            if(this.index%2==0){
                return "card mb-3 mt-3 impar text-white"
            }else{  
                return "card mb-3 mt-3 par text-white"
            }
        }
    }
    
}
</script>
<style>
    
    .scroll{    
        height: 130px;
        overflow-y: scroll;
        background-color: rgb(71, 71, 71);
    }
    .country{
       color: white;
    }

</style>
<style scoped>
    .par{
        background-color: #2c3034;
    }
    .impar{
        background-color: #373b3e;
    }
    
    .card{
            border: 1px solid black;
            max-height: 79px;
            max-width: 100%;
            transition: 1.3s;
        }
    .card:hover{
            max-height: 360px;
            transition: 1.3s;
    }
    .card:hover img{
            height: 300px;
            width: 250px;
            border: 1px solid black;
        background-color: #212529;
        padding: 30px;
        border-radius: 100%;
        transition: 1.3s;
    }
    .card-text{
        display: none;
        transition: 1.3s;
    }
    .card:hover .card-text{
        display: block;
        transition: 1.3s;
    }
    .card:hover .info{
        display: none;
        transition: 1.3s;
    }
    img{
        border: 1px solid black;
        background-color: #212529;
        padding: 10px;
        border-radius: 100%;
        transition: 1.3s;

    }
    
</style>