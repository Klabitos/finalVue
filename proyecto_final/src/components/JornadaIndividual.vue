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
                <button type="button" :class="botonHabilitado" @click="guardarPartido">Guardar</button>
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
            llave:0,
            equipo1:"",
            equipo2:"",
            textoBoton:"Guardar"
        }
    },
    methods: {
        guardarPartido(){
            axios.put(`http://localhost:3000/matches/${this.idPartido}`, {round:this.numJornadaActual, date: this.fechaJornada, team1:this.nombreEquipo1, team2:this.nombreEquipo2, score:[this.resultadoIntroducido1, this.resultadoIntroducido2]});
            this.$emit("refresh")
            /* if(this.resultadoIntroducido1>this.resultadoIntroducido2){
                //mas 3 al 1
                 axios.get(`http://localhost:3000/clubs?name=${this.nombreEquipo1}`)
                .then(response => this.equipo1 = response.data)
                .catch(response => alert("Error al recuperar datos"+ response.status));
                this.equipo1.points+=3;
            }else if(this.resultadoIntroducido1<this.resultadoIntroducido2){
                axios.get(`http://localhost:3000/clubs?name=${this.nombreEquipo2}`)
                .then(response => this.equipo2 = response.data)
                .catch(response => alert("Error al recuperar datos"+ response.status));
                this.equipo2.points+=3;
            }else{
                axios.get(`http://localhost:3000/clubs?name=${this.nombreEquipo1}`)
                .then(response => this.equipo1 = response.data)
                .catch(response => alert("Error al recuperar datos"+ response.status));
                this.equipo1.points+=1;
                axios.get(`http://localhost:3000/clubs?name=${this.nombreEquipo2}`)
                .then(response => this.equipo2 = response.data)
                .catch(response => alert("Error al recuperar datos"+ response.status));
                this.equipo2.points+=1;
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