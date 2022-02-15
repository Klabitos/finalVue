<template>
    <div class="">
        <div class="d-flex flex-row justify-content-around">
            <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Jornadas
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="dropdown-item" href="#" v-for="n, index in obtenerNumeroJornadas()" :key="index" @click="cargarJornada(index+1)">
                    Jornada {{index+1}} <br>
                    
                </li>
            </ul> 
            </div>
            <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Fechas
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li class="dropdown-item" href="#" v-for="fecha, index in devolverFechasEstaJornada()" :key="index" @click="establecerFecha(fecha)">
                        {{fecha}}              
                    </li>
                </ul> 
            </div>
        </div>     
        <div class="text-white mt-4 mb-4 d-flex flex-row align-items-center justify-content-center">
            <i class="bi bi-arrow-left me-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)-1)" v-if="Number(this.$route.params.numeroJornada)-1>0"></i>
            <i class="bi bi-arrow-left gris me-3" v-else></i>
            <div class="ms-2 me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 
                <h2> Jornada {{this.$route.params.numeroJornada}}</h2>
                <span v-if="(typeof this.fechaActual)=='string'">
                    <h5>Fecha: {{this.fechaActual}}</h5>
                </span>
                <span v-else>
                    <h5> &nbsp;  Fechas: TODAS &nbsp;  </h5>
                </span>
            </div>
            <i class="bi bi-arrow-right ms-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)+1)" v-if="Number(this.$route.params.numeroJornada)+1<=obtenerNumeroJornadas()"></i>
            <i class="bi bi-arrow-right gris ms-3" v-else></i>
        </div>
    </div>

</template>
<script>
export default {
    name:"DesplegableJornadas",
    props:[
        "numeroJornadas", "fechasJornada"
    ],
    data(){
        return{
            arrayJornadas:[],
            arrayJornadaEspecifica:[],
            arrayFechasJornadaEspecifica:[
                "1","2"
            ],
            fechaActual:0,
        }
    },
    methods: {
        obtenerNumeroJornadas(){  
            return this.numeroJornadas;
        },
        establecerFecha(fecha){
            this.fechaActual=fecha;
            this.$emit("refreshDate", this.fechaActual);
        },
        devolverFechasEstaJornada(){
            return this.fechasJornada;
        },
        cargarJornada(numJornada){
            this.fechaActual=0;
            this.$emit("noDate");
            this.$router.push({name:"Jornadas", params: {numeroJornada: numJornada}});
        },
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
    .block{
        display:inline ;
    }
</style>