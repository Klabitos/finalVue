<template lang="">
    <div>
        <table class="table table-dark table-striped mt-3">
            <thead>
                <tr>
                <th scope="col" class="col-2">Posición</th>
                <th scope="col" class="col-1"></th>
                <th scope="col" class="col-4">Nombre</th>
                <th scope="col" class="col-1 offset-3">País</th>
                <th scope="col" class="col-1">Puntos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(equipo, index) in ordenarEquipos()" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td class="cursor">
                        <img :src="require('../assets/escudos/'+equipo.id+'.png')" alt="Escudo" width="50" height="50" @click="mostrarJugadoresEquipo(equipo.name, equipo.id)">  
                    </td>
                    <td class="cursor" @click="mostrarJugadoresEquipo(equipo.name, equipo.id)">{{equipo.name}}</td>
                    <td>{{equipo.country}}</td>
                    <td>{{equipo.points}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
export default {

    name:"TablaClasificacion",
    data(){
        return{
            listaEquipos:[],
        }
    },
    methods: {
        async obtenerListaEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        ordenarEquipos(){
            this.listaEquipos.sort(function(a,b){
                return b.points-a.points;
            });
            return this.listaEquipos;
        },
        mostrarJugadoresEquipo(nombreEquipo, equipoId){
            if(this.$route.name=="jugadoresEquipo"){
                this.$router.push({name:"jugadoresEquipo", params: {nombreEquipo: nombreEquipo, equipoId: equipoId}});
            }else{
                this.$router.push({name:"Clasificacion", params: {nombreEquipo: nombreEquipo, equipoId: equipoId}});
            }
            
        }
    },
    created() {
        this.obtenerListaEquipos();
    },
}
</script>
<style>
    .cursor{
      cursor: pointer;
    }
</style>