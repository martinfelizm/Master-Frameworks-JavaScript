<template>
  <div>
    <section id="content">
      <h2 class="titleItem">{{ titulo }}</h2>
      <div id="mi-componente">
        <h1>Este es MiComponente</h1>
        <h2>{{ subtitulo }}</h2>
      </div>

      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es: <strong>{{ nombre }}</strong>

      <h2>DATA</h2>
     <pre>
         {{ $data }}
     </pre>

      <h2>Directivas condicionales</h2>
      <input type="number" v-model="edad" />
      La edad es: <strong>{{ edad }}</strong>

      <p style="color:green; font-weight:bold" v-if="edad && edad>=18 && edad<60">
           ERES MAYOR DE EDAD!!
      </p>

       <p style="color:purple; font-weight:bold" v-else-if="edad && edad>=60">
           ERES DE AVANZADA EDAD!!
      </p>

       <p style="color:red; font-weight:bold" v-else>
           ERES MENOR DE EDAD!!
      </p>
      
      <h2>Directivas interactiva</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
    </section>
    <div class="clearfix"></div>
  </div>
</template>


<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el Subtitulo de MiComponente",
      nombre: "",
      edad:18,
      peliculas: ['Batman','Superman','Spider Man', 'Saw', 'Freddy Cruger','Jason']
    };
  },
};
</script>

<style>
</style>