<template>
     <div class="center">
    <section id="content">
      <h2 class="titleItem">Pelicula</h2>
      <!--Lista de Articulos-->
      <div id="articles">
        <article class="article-item" id="articleItem" v-for="pelicula in peliculas" v-bind:key="pelicula.titulo">
          <div class="image-wrap">
            <img :src="pelicula.image" :alt="pelicula.titulo" :title="pelicula.titulo" />
          </div>
          <h2>{{pelicula.titulo}}</h2>
          <span v-bind:class="{
            yeargreen: pelicula.year>=2021,
            yearred: pelicula.year<2021
          }"> {{pelicula.year}} </span>
          <a href="article.html">Leer mas</a>
        </article>
      </div>
      <div class="clearfix"></div>
    </section>

    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
    name:'Pelicula'
}
</script>