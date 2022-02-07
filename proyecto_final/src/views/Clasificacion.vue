<template lang="">
    <div>
        <table class="table table-dark table-striped mt-3">
            <thead>
                <tr>
                <th scope="col">Posición</th>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">País</th>
                <th scope="col">Puntos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(equipo, index) in this.listaEquipos" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>
                          <img :src="require('../assets/escudos/'+equipo.id+'.png')" alt="Girl in a jacket" width="50" height="50">  
                    </td>
                    <td>{{equipo.name}}</td>
                    <td>{{equipo.path}}</td>
                    <td>21</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
export default {

    name:"Clasificacion",
    data(){
        return{
            listaEquipos:[],
            image: require("../assets/escudos/2.png")
        }
    },
    methods: {
        obtenerListaEquipos(){
            axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
    },
    created() {
        this.obtenerListaEquipos();
    },
}
</script>
<style lang="">
    
</style>