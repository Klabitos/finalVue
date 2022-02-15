<template>
    <div class="d-flex flex-row text-white">
        <TablaClasificacion class="col-5"></TablaClasificacion>
        <SeleccionEquipo class="col-5 offset-1" v-if="this.mostrarJugadores"></SeleccionEquipo>
        <h2 class="display-2 text-white mb-3 col-5 offset-1 mt-3" v-else>Jugadores</h2>
    </div>
  
</template>
<script>
import SeleccionEquipo from "../components/SeleccionEquipo.vue"
import TablaClasificacion from "../components/TablaClasificacion.vue"
export default {
    name:"Jugadores",
    components:{
        TablaClasificacion, SeleccionEquipo
    },
    data(){
        return{
            mostrarJugadores:false
        }
    },
    methods: {
      comprobarSiClasificacionEnPantallaGrande(){
          if(this.$route.params.nombreEquipo!="todos"){
                this.mostrarJugadores=true;
            }else{
                this.mostrarJugadores=false;
            }
      },
  },
  created() {
      this.comprobarSiClasificacionEnPantallaGrande();
  },
  updated() {
      this.comprobarSiClasificacionEnPantallaGrande();
  },
}
</script>
<style scoped>
    h2{
    border: 1px solid black;
        padding: 5%;
        border-radius: 10px;
        background-color: #212529;
        height: 10%;
    }
</style>