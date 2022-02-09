<template lang="">
    <div>
        <DesplegableJornadas :numeroJornadas=this.obtenerNumeroJornadas() :fechasJornada=this.devolverFechasJornada()></DesplegableJornadas>
        <div class="d-flex justify-content-between flex-wrap">
            <JornadaIndividual v-for="(jornada, index) in arrayJornadaEspecifica" :key="index" @refresh="refresh" :fechaJornada=jornada.date :idPartido="jornada.id" :numJornada="jornada.round" :idEquipo1="obtenerIdEquipo(jornada.team1)" :idEquipo2="obtenerIdEquipo(jornada.team2)" :nombreEquipo1="jornada.team1" :nombreEquipo2="jornada.team2" :resultado1="obtenerResultadoPartido(jornada.team1)" :resultado2="obtenerResultadoPartido(jornada.team2)"></JornadaIndividual>
        </div>
    </div>
    
</template>
<script>
import axios from "axios"
import DesplegableJornadas from "../components/DesplegableJornadas.vue"
import JornadaIndividual from "../components/JornadaIndividual.vue"
export default {
    components:{
        DesplegableJornadas,
        JornadaIndividual
    },
    data(){
        return{
            arrayJornadas:[],
            arrayJornadaEspecifica:[],
            arrayRoundJornadas:[],
            arrayDateJornadas:[],
            jornadaActual:0,
            listaEquipos:[],
            actualizar:false,
        }
    },
    methods: {
        async obtenerTodasJornadas(){
            await axios.get(`http://localhost:3000/matches`)
            .then(response => this.arrayJornadas = response.data)
            .catch(response => alert("Error al recuperar datos "+ response.status));
        },
        obtenerNumeroJornadas(){
            for(let i=0; i<this.arrayJornadas.length; i++){
                if(this.arrayRoundJornadas.includes(this.arrayJornadas[i].round)){
                    continue;
                }else{
                    this.arrayRoundJornadas.push(this.arrayJornadas[i].round);
                }
            }  
            return this.arrayRoundJornadas.length;
        },
        obtenerFechasJornada(){
            this.arrayDateJornadas=[];
            for(let j=0; j<this.arrayJornadaEspecifica.length; j++){
                if(this.arrayDateJornadas.includes(this.arrayJornadaEspecifica[j].date)){
                }else{
                    this.arrayDateJornadas.push(this.arrayJornadaEspecifica[j].date);
                }
            }  
        },
        devolverFechasJornada(){
            return this.arrayDateJornadas;
        },
        cargarJornada(numJornada){
            this.$router.push({name:"Jornadas", params: {numeroJornada: numJornada}});
        },
        obtenerArrayJornadaEspecifica(){
            this.arrayJornadaEspecifica=[];
            for(let i=0; i<this.arrayJornadas.length; i++){
                if(this.arrayJornadas[i].round==`Jornada ${this.$route.params.numeroJornada}`){
                    this.arrayJornadaEspecifica.push(this.arrayJornadas[i]);
                }
            }
            return this.arrayJornadaEspecifica;
        },
        obtenerIdEquipo(nombreEquipo){
            for(let i=0; i<this.listaEquipos.length;  i++){
                if(this.listaEquipos[i].name==nombreEquipo){
                    return this.listaEquipos[i].id;
                }
            }
            return 0;
        },
        obtenerResultadoPartido(nombreEquipo){
            for(let i=0; i<this.arrayJornadaEspecifica.length; i++){
                if(this.arrayJornadaEspecifica[i].team1==nombreEquipo && this.arrayJornadaEspecifica[i].hasOwnProperty('score')){
                    return this.arrayJornadaEspecifica[i].score[0];
                    
                }else if(this.arrayJornadaEspecifica[i].team2==nombreEquipo && this.arrayJornadaEspecifica[i].hasOwnProperty('score')){
                    return this.arrayJornadaEspecifica[i].score[1];
                }
            }
            return null;
        },
        async obtenerListaEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        refresh(){
            this.actualizar=true;
            setTimeout(() => {
                this.obtenerTodasJornadas();
                this.obtenerArrayJornadaEspecifica();    
            }, 1000);

        }
    },
    created(){
        this.obtenerTodasJornadas();
        this.obtenerArrayJornadaEspecifica();
        this.obtenerListaEquipos();
        this.obtenerFechasJornada();
    },
    updated() {
        if(this.actualizar){
            setTimeout(() => {
                this.obtenerTodasJornadas();
                this.obtenerArrayJornadaEspecifica(); 
                this.obtenerListaEquipos();
                this.actualizar=false   
            }, 1000);
        }   
        if(this.jornadaActual!=this.$route.params.numeroJornada){
            this.jornadaActual=this.$route.params.numeroJornada;
            this.obtenerArrayJornadaEspecifica();
            this.obtenerFechasJornada();
            this.obtenerListaEquipos();
        }
    },
}
</script>
<style lang="">
    
</style>