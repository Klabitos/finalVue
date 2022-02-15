<template>
    <div class="d-flex flex-row">
        <TablaClasificacion class="col-5"></TablaClasificacion>
        <SeleccionEquipo class="col-5 offset-1" v-if="this.mostrarJugadores"></SeleccionEquipo>
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
      }
  },
  created() {
      this.comprobarSiClasificacionEnPantallaGrande();
      console.log("Mostrar jugadores "+this.mostrarJugadores);
  },
  updated() {
      this.comprobarSiClasificacionEnPantallaGrande();
      console.log("Mostrar jugadores "+this.mostrarJugadores);
  },
}
</script>
<style>
    
</style>