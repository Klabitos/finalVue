<template lang="">
    <div>
        <DesplegableJornadas></DesplegableJornadas>
        <div class="d-flex justify-content-between">
            <JornadaIndividual></JornadaIndividual>
            <JornadaIndividual></JornadaIndividual>
            <JornadaIndividual></JornadaIndividual>
        </div>

    </div>
    
</template>
<script>
import DesplegableJornadas from "../components/DesplegableJornadas.vue"
import JornadaIndividual from "../components/JornadaIndividual.vue"
export default {
    components:{
        DesplegableJornadas,
        JornadaIndividual
    },
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
}
</script>
<style lang="">
    
</style>