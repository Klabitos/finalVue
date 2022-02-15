<template lang="">
    <div>
        <h1 class="text-white mt-2">Equipos de la Liga</h1>
        <EquipoIndividual v-for="(equipo, index) in this.ordenarPorPuntos()" :key="index" :equipo="equipo" :index="index"></EquipoIndividual>             
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
        }
    },
    created(){
        this.obtenerListaEquipos();
    }
}
</script>

<style>

</style>