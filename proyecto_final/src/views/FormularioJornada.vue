<template >
    <div class="d-flex justify-content-around align-items-center">
        <img v-if="this.equipo1.name!=''" :src="require('../assets/escudos/'+this.idEquipo1+'.png')" alt="Escudo" width="75" height="250" class="col-2"> 
        <div class="mt-5 col-5 formulario mb-3">
            <h2 class="display-2 text-white mb-3">Generar Partido</h2>
            <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo 1</button>
                <ul class="dropdown-menu">
                    <li v-for="equipo, index in this.listaEquipos" :key="index" >
                        <a class="dropdown-item" href="#" @click="establecerEquipo1(equipo)">{{equipo.name}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="equipo1.name">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="equipo2.name">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo 2</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li v-for="equipo, index in this.listaEquipos" :key="index">
                        <!-- imagen-->
                        <a class="dropdown-item" href="#" @click="establecerEquipo2(equipo)">{{equipo.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jornadas</button>
                <ul class="dropdown-menu">
                    <li v-for="n, index in 19" :key="index" >
                        <a class="dropdown-item" href="#" @click="establecerJornada(index+1)">Jornada {{index+1}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="jornada">
            </div>
             <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Fecha">
                <input type="text" class="form-control bg-secondary text-white" v-model="fecha" onfocus="(this.type='date')">             
            </div>
            <!-- https://stackoverflow.com/questions/9624578/add-scrollbar-on-dropdown-menu-options/12459974  PARA EL SCROLL EN EL DROPDOWN-->
        </div>
        <img v-if="this.equipo2.name!=''" :src="require('../assets/escudos/'+this.idEquipo2+'.png')" alt="Escudo" width="75" height="250" class="col-2"> 
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"FormularioJornada",
    data(){
        return{
            fecha:"Fecha",
            listaEquipos:"",
            equipo1:{name:""},
            equipo2:{name:""},
        }
    },
    methods:{
        async obtenerTodosEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        establecerEquipo1(equipo){
            this.equipo1=equipo;
        },
        establecerEquipo2(equipo){
            this.equipo2=equipo;
        }
    },
    created(){
        this.obtenerTodosEquipos();
    },
    computed:{
        idEquipo1(){
            if(this.equipo1.name==""){
                return 0;
            }else{
                return this.equipo1.id;
            }
        },
        idEquipo2(){
             if(this.equipo2.name==""){
                return 0;
            }else{
                return this.equipo2.id;
            }
        }
    }
}
</script>
<style>
    .formulario{
        padding: 2%;
    }
</style>