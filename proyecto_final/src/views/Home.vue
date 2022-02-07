<template lang="">
    <div class="col ms-4 realContent" v-if="this.$route.name=='Home'">   
          <FillInicio></FillInicio>
    </div>
</template>
<script>
import FillInicio from "../components/FillInicio.vue";
export default {
    components:{
        FillInicio
    }
}
</script>
<style lang="">
    
</style>