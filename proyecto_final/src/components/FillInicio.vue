<template>
    <div class="filler">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">Punny headline</h1>
            <p class="lead fw-normal">
                And an even wittier subheading to boot. Jumpstart your marketing
                efforts with this example based on Apple’s marketing pages.
            </p>
            <a class="btn btn-outline-secondary" href="#">Coming soon</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>

        <div class="card bg-dark text-white imagenPeque">
            <img src="../assets/laLigaJuego.jpg" class="card-img" alt="...">
            <div class="card-img-overlay negro">
                <h1 class="display-4 fw-normal">Punny headline</h1>
            <p class="lead fw-normal">
                And an even wittier subheading to boot. Jumpstart your marketing
                efforts with this example based on Apple’s marketing pages.
            </p>
            <a class="btn btn-outline-secondary" href="#">Coming soon</a>
             </div>
        </div>

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="../assets/laLigaJuego.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
        

        
    </div>

</template>
<script>
export default {
    name:"FillInicio"
}
</script>
<style>
    .filler{
        color: white;
    }

    .imagenPeque{
        width: 30%;
        height: 20%;
    }

    .negro{
        color: black;
    }
</style>