<template>
  <div>
    <section id="content">
      <h2 class="titleItem">{{ titulo }}</h2>
      <h3>{{ id_desde_url }}</h3>
      <h3>{{nombre}}</h3>
      <button @click="ActualizarNombre()">Actualizar Nombre</button>
    </section>
    <div class="clearfix"></div>
  </div>
</template>


<script>
export default {
  name: "Pagina1",
  mounted(){
      this.id_desde_url = this.$route.params.id;
      console.log('Componente Montado')
  },
    updated(){
      console.log('Componente Actualizado')
  },
    created(){
      console.log('Componente Creado')
  },
    destroyed(){
      console.log('Componente Destruido')
  },
  data() {
    return {
      id_desde_url: null,
      titulo: "Pagina1",
      nombre:'Martin Feliz'
    };
  },
  methods:{
      ActualizarNombre(){
            this.nombre = 'MARTIN FELIZ KLK';
            console.log('Actualizado!!!');
      }
  }
};
</script>