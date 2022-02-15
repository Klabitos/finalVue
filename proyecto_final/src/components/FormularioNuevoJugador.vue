<template >
    <div class="col-6 offset-3">
        <Modal :objetoModal="obtenerObjetoModal" @close="this.seteoInicio"></Modal>
        <div class="input-group mb-3">
                <button class="btn btn-secondary dropdown-toggle botonEquipos" type="button" data-bs-toggle="dropdown" aria-expanded="false">Equipo</button>
                <ul class="dropdown-menu">
                    <li v-for="equipo, index in this.devolverListaDeEquiposVaciaOFull" :key="index" class="d-flex flex-row flex-nowrap justify-content-center" >
                        <img :src="require('../assets/escudos/'+index+'.png')" alt="Escudo" width="20" height="20" class="ms-3"> 
                        <a class="dropdown-item" href="#" @click="establecerEquipo(equipo.name)">{{equipo.name}}</a>
                    </li>
                </ul>
                <input type="text" class="form-control" readonly v-model="this.nombreEquipoElegido">
        </div>
        <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="nombreJugador">
                <button class="btn btn-secondary" type="button">Nombre Jugador</button>
        </div>
        <div class="d-flex flex-row guardarGoles">
                <div class="input-group mb-3 ">
                    <button class="btn btn-secondary" type="button" >Número de Goles</button>
                    <input type="number" class="form-control goles" v-model="goles" min="0">
                </div>
                <button class="btn btn-secondary ms-4" @click="guardarJugador" data-bs-target="#modalEquipo" data-bs-toggle="modal" v-if="this.nombreJugador!='' && this.nombreEquipo !=''">Guardar Jugador</button>
                <button class="btn btn-secondary ms-4 mb-2" v-else data-bs-toggle="modal" data-bs-target="#modalEquipo">Guardar Jornada</button>
        </div>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue"
import axios from "axios";
export default {
    name:"FormularioNuevoJugador",
    props:[
        "nombreEquipo"
    ],
    components:{
        Modal
    },
    data(){
        return{
            nombreEquipoElegido:"",
            listaEquipos:[],
            goles:0,
            nombreJugador:"",
            readOnly:false,
            modalError:{
                id:"modalEquipo",
                titulo:"Error en la información del jugador",
                mensaje:"Por favor, introduzca todos los datos. Gracias.",
                error:true
            },
            modalGreen:{
                id:"modalEquipo",
                titulo:"Jugador Introducido Correctamente",
                mensaje:"Gracias por paciencia.",
                error:false
            },
        }
    },
    methods:{
        async obtenerTodosEquipos(){
            await axios.get("http://localhost:3000/clubs")
            .then(response => this.listaEquipos = response.data)
            .catch(response => alert("Error al recuperar datos"+ response.status));
        },
        seteoInicio(){
            this.$emit("guardado", this.nombreEquipo);
        },
        establecerEquipo(equipo){
            this.nombreEquipoElegido=equipo;
        },
        guardarJugador(){
            axios.post("http://localhost:3000/players", {name:this.nombreJugador, team:this.nombreEquipo, scores:this.goles})
            .then(response => console.log("Introducido Correctamente")); 
                                   
        }
    },
    computed:{
        obtenerObjetoModal(){
            if(this.nombreJugador!='' && this.nombreEquipo !=''){
                return this.modalGreen
            }else{
                return this.modalError
            }
        },
        devolverListaDeEquiposVaciaOFull(){
            if(this.readOnly){
                return 0;
            }else{
                return this.listaEquipos;
            }
        }
    },
    created(){
        this.obtenerTodosEquipos();
        if(this.nombreEquipo!=""){
            this.nombreEquipoElegido=this.nombreEquipo
            this.readOnly=true;
        }else{
            this.readOnly=false;
        }
    },        
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

    .botonEquipos{
        width: 60%;
    }
</style>