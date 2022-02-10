<template>
    <!-- Modal -->
        <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">  <span :class="isError">{{titulo}}</span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {{mensaje}}
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    props:[
        "id", "titulo", "mensaje", "error"
    ] ,
    computed:{
        isError(){
            if(this.error){
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