<template>
    <div class="d-flex principalMatch justify-content-around align-items-center mt-3 mb-3">
        <div>
            <img :src="require('../assets/escudos/'+this.idEquipo1+'.png')" alt="Escudo" width="50" height="50"> 
        </div>
        <div class="text-white ">
            <div>
                {{nombreEquipo1}}
            </div>
            <div>
                {{resultado1}}-{{resultado2}}
            </div>
            <div>
                {{nombreEquipo2}}
            </div>
        </div>
        <div>
            <img :src="require('../assets/escudos/'+this.idEquipo2+'.png')" alt="Escudo" width="50" height="50"> 
        </div>
    </div>
</template>
<script>
export default {
    name:"JornadaIndividual",
    props:[
        "nombreEquipo1", "nombreEquipo2", "resultado1", "resultado2", "idEquipo1", "idEquipo2"
    ]
}
</script>
<style>
    .principalMatch{
        border: 2px solid black;
        border-radius: 15px;
        width: 30%
        ;
    }
    .principalMatch:nth-of-type(even){
        background-color: #2c3034;
    }
    .principalMatch:nth-of-type(odd){
        background-color: #373b3e;
    }
</style>