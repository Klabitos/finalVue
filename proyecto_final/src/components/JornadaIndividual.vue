<template>
    <div class="text-white principalMatch mt-3 mb-3">
        <div>
            a
            {{nombreEquipo1}}
        </div>
        <div>
            1-1
            {{resultado1}}-{{resultado2}}
        </div>
        <div>
            b
            {{nombreEquipo2}}
        </div>
    </div>
</template>
<script>
export default {
    name:"JornadaIndividual"
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