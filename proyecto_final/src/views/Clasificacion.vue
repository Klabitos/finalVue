<template>
  <div>
    <div class="col-12" v-if="!clasificacionConEquipos">
      <TablaClasificacion></TablaClasificacion>
    </div>
    <div class="d-flex" v-if="clasificacionConEquipos">
      <div class="col-5">
        <TablaClasificacion></TablaClasificacion>
      </div>
      <div class="col-5 offset-1">
        <SeleccionEquipo></SeleccionEquipo>
      </div>
    </div>
  </div>
</template>
<script>
import TablaClasificacion from "../components/TablaClasificacion.vue";
import SeleccionEquipo from "../components/SeleccionEquipo.vue";
export default {
  name: "Clasificacion",
  components: {
    TablaClasificacion,
    SeleccionEquipo
  },
  data(){
      return{
          clasificacionConEquipos:false,
      }
  },
  methods: {
      comprobarSiClasificacionEnPantallaGrande(){
          if(this.$route.params.nombreEquipo!="todos"){
          this.clasificacionConEquipos=true;
      }else{
          this.clasificacionConEquipos=false;
      }
      }
  },
  created() {
      this.comprobarSiClasificacionEnPantallaGrande();
  },
  updated() {
      this.comprobarSiClasificacionEnPantallaGrande();
  },
};
</script>
<style></style>
