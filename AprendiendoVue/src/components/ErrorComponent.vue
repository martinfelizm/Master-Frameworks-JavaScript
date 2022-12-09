<template>
  <div>
    <section id="content">
      <h2 class="titleItem">{{ titulo }}</h2>
      <div id="errcomponente">
        <h1>Esta pagina no existe, intentalo más tarde!!!</h1>        
      </div>
    </section>
    <div class="clearfix"></div>
  </div>
</template>


<script>
export default {
  name: "ErrorComponent",
  data() {
    return {
      titulo: 'Error Componente'
    };
  },
};
</script>

<style>
</style>