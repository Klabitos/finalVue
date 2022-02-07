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
                         <img :src="image" alt="Girl in a jacket" width="50" height="50"> 
                    </td>
                    <td>{{equipo.name}}</td>
                    <td>@mdo</td>
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
            path: "../assets/escudos/3.png",
            str: 2,
            image: require("../assets/escudos/"+this.str+".png")
        }
    },
    methods: {
        obtenerListaEquipos(){
            axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        obtenerRutaConId(){
            return "../assets/escudos/3.png";
        }
    },
    created() {
        this.obtenerListaEquipos();
    },
}
</script>
<style lang="">
    
</style>