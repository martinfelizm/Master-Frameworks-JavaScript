<template>
  <div class="center">
        <section id="content">
        <h2 class="titleItem">Ultimos articulos</h2>
        <!--Lista de Articulos-->
        <div id="articles">
            <article class="article-item" id="articleItem">
            <div class="image-wrap">
                <img src="../assets/images/Paisaje1.jpg" alt="Paisaje1" />
            </div>
            <h2>Articulo</h2>
            <span class="date"> hace 5 minutos </span>
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
  name: "LastArticles",
  components: {
    Sidebar
  },
};
</script>
