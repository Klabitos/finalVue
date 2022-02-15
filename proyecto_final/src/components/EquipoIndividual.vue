<template>
    <div>
        <div :class="obtenerClasesCard" @click="verEquipo">
            <div class="row g-0 d-flex justify-content-between">
                <div class="col-md-4 d-flex justify-content-between">
                    <img :src="require('../assets/escudos/'+this.equipo.id+'.png')" alt="Escudo" height="50" width="50" :class="obtenerClasesImg"> 
                    <h2 :class="obtenerClasesInfo"> {{this.index+1}}º -  &nbsp;&nbsp;&nbsp;       {{this.equipo.points}} puntos</h2>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title display-5">{{this.equipo.name}}</h5>
                        <p :class="obtenerClasesCardText">
                            <strong class="country mt-2 mb-2">{{this.equipo.country}}</strong>
                            <ul>
                                <li><strong>JUGADORES</strong></li>
                                <li v-for="jugador, index2 in this.arrayJugadores" :key="index2" class="text-white">
                                    {{jugador.name}}
                                </li>
                            </ul>  
                        </p> 
                        <button :class="obtenerClasesBoton" @click="mostrarFormulario">Nuevo Jugador</button>                                        
                    </div>                   
                </div>               
            </div>          
        </div>
        <FormularioNuevoJugador v-if="mostrar" :nombreEquipo="this.equipo.name" @guardado="guardado" :idBase="this.equipo.id"></FormularioNuevoJugador>
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
        "equipo", "index", "idQueHayQueMostrar"
    ],
    emits:["equipoMostrado"],
    data(){
        return{
            arrayJugadores:[],
            mostrar:false,
            mostrarEquipo:false,
        }
    },
    methods:{
        async obtenerJugadores(nombreEquipo){
            const jugadores = await axios.get(`http://localhost:3000/players?team=${nombreEquipo}`)
            .then(response => this.arrayJugadores = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
            return jugadores;
        },
        mostrarFormulario(){
            this.mostrar=true;
        },
        guardado(nombreEquipo){
            setTimeout(() => {
                this.obtenerJugadores(nombreEquipo);
                this.mostrar=false;
            }, 100);
            
        },
        verEquipo(){
            if(this.mostrarEquipo){
                this.mostrarEquipo=false;
            }else{
                this.$emit("equipoMostrado", this.index);                
                this.mostrarEquipo=true;                               
            }               
        }
          
    },
    created(){
        this.obtenerJugadores(this.equipo.name);
    },
    computed:{
        obtenerClasesImg(){
            if(this.mostrarEquipo){
                return "img rounded-start align-self-start mt-3 mb-3 cardHovereadaAfectaImg"
            }else{
                return "img rounded-start align-self-start mt-3 mb-3";
            }
        },
        obtenerClasesCardText(){
            if(this.mostrarEquipo){
                return "card-text scroll text-white mt-2 mb-2 cardHovereadaAfectaCardText"
            }else{
                return "card-text scroll text-white mt-2 mb-2";
            }
        },
        obtenerClasesInfo(){
            if(this.mostrarEquipo){
                return "info mt-3 cardHovereadaAfectaAinfo"
            }else{
                return "info mt-3";
            }
        },
        obtenerClasesBoton(){
            if(this.mostrarEquipo){
                return "btn btn-secondary mt-2 botonGuardar cardHovereadaAfectaBotonGuardar"
            }else{
                return "btn btn-secondary mt-2 botonGuardar";
            }
        },
        obtenerClasesCard(){
            if(this.mostrarEquipo && this.index%2==0){
                return "card mb-3 mt-3 impar text-white cardHovereada "
            }else if(this.mostrarEquipo && this.index%2!=0){
                return "card mb-3 mt-3 par text-white cardHovereada";
            }else if(!this.mostrarEquipo && this.index%2==0){
                return "card mb-3 mt-3 impar text-white";
            }else{
                 return "card mb-3 mt-3 par text-white";
            }
        },
    },
    updated(){
        if(this.idQueHayQueMostrar==this.index){
                this.mostrarEquipo=true; 
        }else{
            this.mostrarEquipo=false;
        }
    }
    
}
</script>
<style>
    
    .scroll{    
        height: 150px;
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
    .botonGuardar{
        display: none;
        transition: 1.3s;
        margin-left: auto;
        margin-right: auto;
    }

    .card{
            border: 1px solid black;
            max-height: 79px;
            max-width: 100%;
            transition: 1.3s;
            cursor: pointer;
        }
        .cardHovereada{
            max-height: 360px;
            transition: 1.3s;
        }
        .cardHovereadaAfectaImg{
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
        .cardHovereadaAfectaCardText{
            display: block;
            transition: 1.3s;
        }
        .cardHovereadaAfectaAinfo{
            display: none;
            transition: 1.3s;
        }
        .cardHovereadaAfectaBotonGuardar{
            display: block;
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