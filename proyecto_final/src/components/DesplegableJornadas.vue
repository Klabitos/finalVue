<template>
    <div>
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
        </div><div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Fechas
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="dropdown-item" href="#" v-for="fecha, index in devolverFechasEstaJornada()" :key="index">
                    {{fecha}}
                    
                </li>
            </ul> 
        </div>
        </div>     
        <div class="text-white mt-4 mb-4">
            <i class="bi bi-arrow-left me-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)-1)" v-if="Number(this.$route.params.numeroJornada)-1>0"></i>
            <i class="bi bi-arrow-left gris me-3" v-else></i>
            Jornada {{this.$route.params.numeroJornada}}
            <span v-if="(typeof this.fechaActual)=='string'">
                    --- Fecha: {{this.fechaActual}}
            </span>
            <i class="bi bi-arrow-right ms-3" @click="cargarJornada(Number(this.$route.params.numeroJornada)+1)" v-if="Number(this.$route.params.numeroJornada)+1<=obtenerNumeroJornadas()"></i>
            <i class="bi bi-arrow-right gris ms-3" v-else></i>
        </div>
    </div>

</template>
<script>
export default {
    name:"DesplegableJornadas",
    props:[
        "numeroJornadas",
    ],
    data(){
        return{
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
        devolverFechasEstaJornada(){
            return this.arrayFechasJornadaEspecifica;
        },
        cargarJornada(numJornada){
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
</style>