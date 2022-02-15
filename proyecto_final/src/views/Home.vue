<template lang="">
    <div class="d-flex flex-row mt-5 align-items-center justify-content-center fondoPrincipal">
        <h2 class="display-3 text-white">
        <span class="letrasDistintas">Temporada
        <br> 2021/2022</span>
        </h2>
        <img src="../assets/LaLiga.png" alt="" width="600" height="600" />
  </div>
</template>
<script>

export default {
    name:"Home"
}
</script>
<style >
    .fondoPrincipal{
        background-image: url("../assets/fondo.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid black;
        margin-bottom: 2%;
    }
    .letrasDistintas{
        -webkit-text-stroke: 1px black; /* width and color */

    font-family: sans; color: white;
    }
</style>