<template>
        <div class="d-flex principalMatch justify-content-around align-items-center mt-3 mb-3">
            <div>
                <img :src="require('../assets/escudos/'+this.idEquipo1+'.png')" alt="Escudo" width="50" height="50"> 
            </div>
            <div class="text-white">
                <div>
                    <strong>{{nombreEquipo1}}</strong>
                </div>
                <div v-if="resultado1!=null">
                    {{resultado1}}-{{resultado2}}
                </div>
                <div v-else>
                    <input type="number" min="0" v-model="resultadoIntroducido1"> &nbsp; <input type="number" min="0" v-model="resultadoIntroducido2">
                </div>
                <div>
                    <strong>{{nombreEquipo2}}</strong>
                </div>
            </div>
            <div>
                <img :src="require('../assets/escudos/'+this.idEquipo2+'.png')" alt="Escudo" width="50" height="50"> 
            </div>
            <div v-if="resultado1==null">
                <button type="button" :class="botonHabilitado" @click="guardarPartido"> Guardar </button>
            </div>
        </div>
</template>
<script>
import axios from "axios";
export default {
    name:"JornadaIndividual",
    props:[
        "nombreEquipo1", "nombreEquipo2", "resultado1", "resultado2", "idEquipo1", "idEquipo2", "numJornada", "idPartido", "fechaJornada"
    ],
    data() {
        return {
            resultadoIntroducido1:"",
            resultadoIntroducido2:"",
            numJornadaActual:"",
        }
    },
    methods: {
        guardarPartido(){
            axios.put(`http://localhost:3000/matches/${this.idPartido}`, {round:this.numJornadaActual, date: this.fechaJornada, team1:this.nombreEquipo1, team2:this.nombreEquipo2, score:[this.resultadoIntroducido1, this.resultadoIntroducido2]});
            /*if(this.resultadoIntroducido1>this.resultadoIntroducido2){
                //mas 3 al 1
            }else if(this.resultadoIntroducido1<this.resultadoIntroducido2){
                //mas 3 al 2
            }else{
                //mas 1 a cada
            }
            */
        }
    },
    computed:{
        botonHabilitado(){
            if(Number.isInteger(this.resultadoIntroducido1) && Number.isInteger(this.resultadoIntroducido2)){
                return "btn btn-secondary";
            }else{
                return "btn btn-outline-secondary"
            }
        }
    },
    created() {
        this.numJornadaActual=this.numJornada
    },
    updated() {
        if(this.numJornadaActual!=this.numJornada){
            this.numJornadaActual=this.numJornada;
            this.resultadoIntroducido1="";
            this.resultadoIntroducido2=""
        }
    },
}
</script>
<style>
    .contenedorJornada{
        width: 30%;
    }
    .principalMatch{
        border: 2px solid black;
        border-radius: 15px;
        width: 30%;
    }
    .principalMatch:nth-of-type(even){
        background-color: #2c3034;
    }
    .principalMatch:nth-of-type(odd){
        background-color: #373b3e;
    }
</style>
<style scoped>
    input{
        width: 40px;
    }
</style>