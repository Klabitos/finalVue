<template>
    <!-- Modal -->
        <div class="modal fade" :id="objetoModal.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">  <span :class="isError">{{objetoModal.titulo}}</span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="ventanaCerrada"></button>
            </div>
            <div class="modal-body">
                {{objetoModal.mensaje}}              
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="ventanaCerrada">Close</button>
            </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    props:[
        "objetoModal",
    ] ,
    emits:[
        "close"
    ]
    ,
    methods: {
        ventanaCerrada(){
            this.$emit("close");
        }
    },
    computed:{
        isError(){
            if(this.objetoModal.error){
                return "error";
            }else{
                return "green";
            }
        }
    }  
}
</script>
<style>
    .error{
        color:red;
        font-weight: bold;
    }
    .green{
        color:green;
        font-weight: bold;
    }
</style>