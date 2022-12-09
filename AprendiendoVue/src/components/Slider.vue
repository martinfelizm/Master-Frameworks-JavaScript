<template>
      <div id="slider" class="slider-l">
           <h1>Bienvenido al cursor master de Javascript con REACT</h1>
           <a class="btn-go-blog" @click="redirigirToBlog()" >Ir al Blog</a>
         </div>
</template>
<script>

export default {
    name:'Slider',
    methods:{
      redirigirToBlog(){
        this.$router.push('/blg');
      }
    }
}
</script>
