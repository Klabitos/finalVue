<template >
    <div>
        <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo</button>
                <ul class="dropdown-menu">
                    <li v-for="equipo, index in this.listaEquipos" :key="index" class="d-flex flex-row flex-nowrap justify-content-center">
                        <img :src="require('../assets/escudos/'+index+'.png')" alt="Escudo" width="20" height="20" class="ms-3"> 
                        <a class="dropdown-item" href="#" @click="establecerEquipo(equipo.name)">{{equipo.name}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="nombreEquipoElegido">
        </div>
        <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="nombreJugador">
                <button class="btn btn-secondary" type="button">Nombre Jugador</button>
        </div>
        <div class="d-flex flex-row guardarGoles">
                <div class="input-group mb-3 ">
                    <button class="btn btn-secondary" type="button" >Número de Goles</button>
                    <input type="number" class="form-control goles" v-model="goles">
                </div>
                <button class="btn btn-secondary ms-4" @click="guardarJugador">Guardar Jugador</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"FormularioNuevoJugador",
    params:["nombreEquipo"],
    data(){
        return{
            listaEquipos:[],
            nombreEquipoElegido:"",
            goles:0,
            nombreJugador:""
        }
    },
    methods:{
        async obtenerTodosEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
      
        establecerEquipo(equipo){
            this.nombreEquipoElegido=equipo;
        },
        guardarJugador(){
             axios.post("http://localhost:3000/players", {name:this.nombreJugador, team:this.nombreEquipoElegido, scores:this.goles})
            .then(response => console.log("Introducido Correctamente")); 
        }
    },
    created(){
        console.log(this.nombreEquipo);
        this.obtenerTodosEquipos();
        if(this.nombreEquipo!=""){
            this.establecerEquipo(this.nombreEquipo)
        }else{
            
        }
    }
}
</script>
<style>
    .goles{
        width: 15%;
    }

    .guardarGoles{
        width: 30%;
        margin-left: auto;
        margin-right: auto;
    }
</style>