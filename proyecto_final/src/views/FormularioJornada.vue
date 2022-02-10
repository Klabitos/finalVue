<template >
<div>
        <Modal :id="this.modalError.id" :titulo="this.modalError.titulo" :mensaje="this.modalError.mensaje" :error="this.modalError.error"></Modal>
        <Modal :id="this.modalGreen.id" :titulo="this.modalGreen.titulo" :mensaje="this.modalGreen.mensaje" :error="this.modalGreen.error"></Modal>
        <h1 class="text-white" v-show="this.exito">Se ha registrado con éxito la jornada</h1>
       <div class="d-flex justify-content-around align-items-center">
        <img v-if="this.equipo1.name!=''" :src="require('../assets/escudos/'+this.idEquipo1+'.png')" alt="Escudo" width="75" height="250" class="col-2"> 
        <div class="mt-5 col-5 formulario mb-3">
            <h2 class="display-2 text-white mb-3">Generar Partido</h2>
            <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo 1</button>
                <ul class="dropdown-menu">
                    <li v-for="equipo, index in this.obtenerListaEquipos" :key="index" >
                        <a class="dropdown-item" href="#" @click="establecerEquipo1(equipo)">{{equipo.name}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="equipo1.name">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="equipo2.name">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo 2</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li v-for="equipo, index in this.obtenerListaEquipos" :key="index">
                        <!-- imagen-->
                        <a class="dropdown-item" href="#" @click="establecerEquipo2(equipo)">{{equipo.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jornadas</button>
                <ul class="dropdown-menu">
                    <li v-for="n, index in 16" :key="index" >
                        <a class="dropdown-item" href="#" @click="establecerJornada(index+1)">Jornada {{index+1}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="jornada">
            </div>
             <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="fechaReal">
                <input type="text" class="form-control bg-secondary text-white" v-model="fecha" onfocus="(this.type='date')" @click="establecerFecha">             
            </div>
            <button class="btn btn-secondary" @click="guardarJornada" v-if='this.jornada!="" && this.fechaReal!="" && this.equipo1.name!="" && this.equipo2.name!=""'>Guardar Jornada</button>
            <button class="btn btn-secondary" v-else data-bs-toggle="modal" data-bs-target="#modalIncompleto">Guardar Jornada</button>
            
            <!-- https://stackoverflow.com/questions/9624578/add-scrollbar-on-dropdown-menu-options/12459974  PARA EL SCROLL EN EL DROPDOWN-->
        </div>
        <img v-if="this.equipo2.name!=''" :src="require('../assets/escudos/'+this.idEquipo2+'.png')" alt="Escudo" width="75" height="250" class="col-2"> 
        
    </div>
</div>
 
</template>

<script>

import Modal from "../components/Modal.vue"
import axios from "axios";
export default {
    name:"FormularioJornada",
    components:{
        Modal
    },
    data(){
        return{
            jornada:"",
            fechaReal:"",
            fecha:"Fecha",
            listaEquipos:"",
            equipo1:{name:""},
            equipo2:{name:""},
            modalError:{
                id:"modalIncompleto",
                titulo:"Error en la información de la jornada",
                mensaje:"Por favor, introduzca todos los datos. Gracias.",
                error:true
            },
            modalGreen:{
                id:"modalCompleto",
                titulo:"Jornada Introducida Correctamente",
                mensaje:"Gracias por paciencia.",
                error:false
            },
            exito:false
        }
    },
    methods:{
        guardarJornada(){
            this.exito=true;
            axios.post("http://localhost:3000/matches", {round:this.jornada, date:this.fechaReal, team1:this.equipo1.name, team2:this.equipo2.name})
            .then(response => console.log("Introducido Correctamente")); 
            this.fechaReal="";
            this.jornada="";
            this.equipo1={name:""};
            this.equipo2={name:""};
            setTimeout(() => {
                this.exito=false
            }, 2000);
        },
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
        },
        establecerJornada(numero){
            this.jornada=`Jornada ${numero}`;
        },
        establecerFecha(){
            this.fechaReal="Fecha";
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
        },
          obtenerListaEquipos(){
            if(this.equipo1.name!="" && this.equipo2.name!=""){
                return this.listaEquipos.filter(equipo => equipo.name!=this.equipo1.name &&  equipo.name!=this.equipo2.name)
            }else if(this.equipo1.name!=""){
                return this.listaEquipos.filter(equipo => equipo.name!=this.equipo1.name)
            }else if(this.equipo2.name!=""){
                return this.listaEquipos.filter(equipo => equipo.name!=this.equipo2.name)
            }else{
                return this.listaEquipos;
            }
        },
    }
}
</script>
<style>
    .formulario{
        padding: 2%;
    }
</style>