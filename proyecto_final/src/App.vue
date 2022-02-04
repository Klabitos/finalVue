<template>
  <div class="d-flex principal">
    <div class="menu col-2">
      <Menu></Menu>
    </div>
    <div class="col text-center">
      <div class="row">
        <div class="col-12 header">
          <h1 class="display-1">La Liga</h1>
        </div>
        <div class="col ms-4 realContent">
          <router-link to="/"></router-link>
          <router-view></router-view>
          <FillInicio></FillInicio>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../src/components/Menu.vue";
import FillInicio from "../src/components/FillInicio.vue";
export default {
  components: {
    Menu,
    FillInicio
  },
};
</script>

<style>
.principal{
  width: 99%;
}
.header h1 {
  width: 99%;
  background-color: black;
  color: white;
}

.menu {
  border-right: 3px solid black;
}

.menu {
  height: 100vh;
  background-color: #212529;
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
}
a {
  text-decoration: none !important;
  color: white;
}
</style>
