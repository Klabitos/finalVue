<template>
  <div class="d-flex principal">
    <div class="menu col-2">
      <Menu></Menu>
    </div>
    <div class="col text-center">
      <div class="row">
        <div class="col-12 header">
          <h1 class="display-1 tituloLiga">La Liga</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-11 content mt-2">
          <router-view></router-view>
        </div>
      </div>
        
    
    </div>
  </div>
</template>
<script>
import Menu from "../src/components/Menu.vue";
export default {
  components: {
    Menu
  },
  created() {
    this.$router.push({name:"Home"})
  },
};
</script>

<style>
.principal{
  width: 99%;
}
.header h1 {
  width: 99%;
  background-color: rgb(32, 32, 32);
  border-bottom: 3px solid black;
  color: white;
}

.menu {
  border-right: 3px solid black;
  border-bottom: 3px solid black;
}

.menu {
  height: 100vh;
  background-color: rgb(32, 32, 32);
  color:white
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #212529;
  min-height: 100vh;
  overflow-y:scroll ;
}
a {
  text-decoration: none !important;
  color: white;
}
.content{

  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;     
  background-color: rgb(71, 71, 71);
  }

  .tituloLiga{
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
   color: white;
   font: 1.5em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
  }
</style>
