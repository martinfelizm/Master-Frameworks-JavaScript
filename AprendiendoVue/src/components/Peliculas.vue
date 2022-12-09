<template>
  <div class="center">
    <section id="content">
      <h2 class="titleItem">Peliculas</h2>
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
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  components: {
    Sidebar,
  },
  data() {
    return { peliculas: [
      {titulo:'Raya y el último dragón', year:2021, image:"https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_es_06f8daf0.jpeg?region=0%2C0%2C540%2C810"}
      ,{titulo:'Mortal Kombat', year:'2021', image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaAU_52egCuqLrxqrRCWtU1KO7_TMgkI0gLJRDRMm-8yZczOOC"}
      ,{titulo:"Hobbs & Shaw", year:2019, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CFuK9csEFtb-BDechrHcgGPXMISPT265JlywTN2EwOcaGCl7"}
    ] };
  },
};
</script>
