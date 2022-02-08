<template>
    <div>
        <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Jornadas
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="dropdown-item" href="#" v-for="n, index in obtenerNumeroJornadas()" :key="index" @click="cargarJornada(index+1)">
                    Jornada {{index+1}}
                </li>
            </ul> 
        </div>
        <div class="text-white mt-4 mb-4">
            <i class="bi bi-arrow-left me-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)-1)" v-if="Number(this.$route.params.numeroJornada)-1>0"></i>
            <i class="bi bi-arrow-left gris me-3" v-else></i>
            Jornada {{this.$route.params.numeroJornada}}
            <i class="bi bi-arrow-right ms-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)+1)" v-if="Number(this.$route.params.numeroJornada)+1<=obtenerNumeroJornadas()"></i>
            <i class="bi bi-arrow-right gris ms-3" v-else></i>
        </div>
    </div>

</template>
<script>
import axios from "axios";
export default {
    name:"DesplegableJornadas",
    data(){
        return{
            arrayJornadas:[],
            arrayRoundJornadas:[]
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
        cargarJornada(numJornada){
            this.$router.push({name:"Jornadas", params: {numeroJornada: numJornada}});
        }
    },
    created() {
        this.obtenerTodasJornadas();
    },
};
</script>
<style>
</style>
<style scoped>
    .gris{
        border-color: grey;
        color: grey;
    }
    .gris:hover{
        background-color: rgba(255, 255, 255, 0);
    }
    i{
        cursor: pointer;
    }
</style>