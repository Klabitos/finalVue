<template>      
    <div class="mt-4">
            <h3>Menú principal</h3>
            <hr>
            <nav class="nav ps-2 me-5">
                <router-link to="/inicio" class="nav-link_moded ">
                    <i class="bi bi-house" v-if="devolverName!='Inicio'"></i>
                    <i class="bi bi-house actualmenteEnEstaPagina" v-else></i>
                    Inicio
                </router-link>
                    
                <router-link to="/clasificacion/todos/0" class="nav-link_moded">
                    <i class="bi bi-sort-up" v-if="devolverName!='Clasificacion'"></i>
                    <i class="bi bi-sort-up actualmenteEnEstaPagina" v-else></i>
                    Clasificación
                    </router-link>
                    
               
                <router-link to="/jornada/1" class="nav-link_moded">
                    <i class="bi bi-calendar-week" v-if="devolverName!='Jornadas'"></i>
                    <i class="bi bi-calendar-week actualmenteEnEstaPagina" v-else></i>
                    Jornadas
                </router-link>
                    <ul>
                        <li class="">
                                <router-link to="/formularioJornada">
                                <i class="bi bi-caret-right-fill" v-if="devolverName!='formularioJornada'"></i>
                                 <i class="bi bi-caret-right-fill actualmenteEnEstaPagina" v-else></i>
                                Nuevo Partido
                                </router-link> 
                            </li>
                    </ul>
               
                <router-link to="/equipos/" class="nav-link_moded">
                    <i class="bi bi-building" v-if="devolverName!='equipos'"></i>
                    <i class="bi bi-building actualmenteEnEstaPagina" v-else></i>
                    Equipos</router-link>
                <router-link to="/jugadores/todos/0" class="nav-link_moded">
                    <i class="bi bi-file-person" v-if="devolverName!='Jugadores'"></i>
                    <i class="bi bi-file-person actualmenteEnEstaPagina" v-else></i>
                    Jugadores
                </router-link>
                    <ul class="d-flex flex-column align-items-start">
                        <li class="segundoLi">                          
                             <router-link to="/nuevoJugador/">
                             <i class="bi bi-caret-right-fill" v-if="devolverName!='NuevoJugador'"></i> 
                             <i class="bi bi-caret-right-fill actualmenteEnEstaPagina" v-else></i> 
                             Nuevo Jugador</router-link> </li>
                        <li class="segundoLi">
                             <router-link to="/eliminarJugador/">
                             <i class="bi bi-caret-right-fill" v-if="devolverName!='EliminarJugador'"></i>
                              <i class="bi bi-caret-right-fill actualmenteEnEstaPagina" v-else></i>
                              Eliminar Jugador</router-link> </li>
                    </ul>
                
            </nav>
        </div>
</template>
<script>
export default {
    name:"Menu",
    computed:{
        devolverName(){
            return this.$route.name
          }
    }
}
</script>
<style>    
    ul{
        list-style-type: none;
    }
    i{
        border: 2px solid white;
        padding: 1rem;
        border-radius: 25px;
        margin-left: 0%;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
        
    }
    i:hover{
        background-color: lightgray;
        color: grey;
    }

    .actualmenteEnEstaPagina{
        background-color: lightgray;
        color: grey;
    }
</style>

<style scoped>
    a{
        color: white;
        width: 100%;
        margin-top: 10%;
    }
    ul li{
        position: relative;
        left: 5%;
        margin-top: 14%;
    }
    li a{
        color: grey;
        transition: color .15s ease-in-out;
    }
    .nav-link_moded{
        margin-left: 0%;
        display: block;
        padding: .5rem;
        color: white;
        text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
        text-align: left;
    }
    .segundoLi{
        margin-top: 20%;
    }
</style>