<template lang="">
    <div class="d-flex">
        <div class="col-5">
           <TablaClasificacion></TablaClasificacion>
       </div>
       <div class="col-5 offset-1">
           <SeleccionEquipo></SeleccionEquipo>
       </div>
    </div>
</template>
<script>
import TablaClasificacion from "../components/TablaClasificacion.vue";
import SeleccionEquipo from "../components/SeleccionEquipo.vue";
import Menu from "../components/Menu.vue"
export default {
    name:"ClasificacionEquipo",
    components:{
        TablaClasificacion,
        SeleccionEquipo,
        Menu
    }
}
</script>
<style lang="">
    
</style>