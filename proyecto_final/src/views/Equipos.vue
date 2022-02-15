<template lang="">
    <div>
        <h1 class="text-white mt-2">Equipos de la Liga</h1>
        <EquipoIndividual v-for="(equipo, index) in this.ordenarPorPuntos()" :key="index" :equipo="equipo" :index="index" @equipoMostrado="equipoMostrado" :idQueHayQueMostrar="quitarFocusDeTodosEquiposMenosEste"></EquipoIndividual>             
    </div>
</template>
<script>
import EquipoIndividual from "../components/EquipoIndividual.vue";
import axios from "axios";
export default {
    name:"Equipos",
    components:{
        EquipoIndividual
    },
    data(){
        return{
            listaEquipos:[],
            variableControlMostrarEquipos:-1 //PARA QUE SOLO SE MUESTRE UN EQUIPO A LA VEZ
        }
    },
    methods:{
        async obtenerListaEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        ordenarPorPuntos(){
            this.listaEquipos.sort(function(a,b){
                return b.points-a.points;
            });
            return this.listaEquipos;
        },
        equipoMostrado(idEquipo){ //RECIBIMOS EL ID DEL EQUIPO QUE SE TIENE QUE VER
            this.variableControlMostrarEquipos=idEquipo;
        }
    },
    created(){
        this.obtenerListaEquipos();
    },
    computed:{
        quitarFocusDeTodosEquiposMenosEste(){
            return this.variableControlMostrarEquipos; //LA MANDAMOS A TODOS LOS EQUIPOS, QUE EN UPDATED() COMPROBARAN SI SE TIENEN QUE CERRAR O NO
        }
    }
}
</script>

<style>

</style>