<template>      
    <div class="mt-4">
            <h3>Menú principal</h3>
            <hr>
            <nav class="nav d-flex flex-column ps-2 me-5 align-items-start">
                <a href="" class="nav-link_moded">
                    <i class="bi bi-house"></i>
                    - Inicio</a>
                <a href="" class="nav-link_moded">
                    <i class="bi bi-sort-up"></i>
                    - Clasificación</a>
                <a href="" class="nav-link_moded">
                    <i class="bi bi-calendar-week"></i>
                    - Jornadas
                 </a>
                    <ul>
                        <li class="">
                            <i class="bi bi-caret-right-fill"></i>
                            <a href=""> Nuevo Partido</a> </li>
                    </ul>
               
                <a href="" class="nav-link_moded">
                    <i class="bi bi-building"></i>
                    - Equipos</a>
                <a href="" class="nav-link_moded">
                    <i class="bi bi-file-person"></i>
                    - Jugadores
                </a>
                    <ul class="d-flex flex-column align-items-start">
                        <li class="">
                            <i class="bi bi-caret-right-fill"></i>
                            <a href=""> Nuevo Jugador</a> </li>
                        <li class="">
                            <i class="bi bi-caret-right-fill"></i>
                            <a href=""> Eliminar Jugador </a> </li>
                    </ul>
                
            </nav>
        </div>
</template>
<script>
export default {
    name:"Menu"
}
</script>
<style>
    .nav-link_moded {
        display: block;
        padding: .5rem 1rem;
        color: white;
        text-decoration: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
    }
    ul li{
        position: relative;
        left: 50%;
    }
    ul{
        list-style-type: circle;
    }
</style>

<style scoped>
    li a{
        color: grey;
        transition: color .15s ease-in-out;
    }
    li a:hover{
        color: lightblue;
    }
</style>