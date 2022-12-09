<template>
  <div>
    <aside id="sidebar">
      <div id="nav-blog" class="sidebar-item">
        <h3>Puedes hacer esto</h3>
        <a href="#" class="btn-AddItem">Crear árticulo</a>
      </div>

      <div id="search" class="sidebar-item">
        <h3>Buscador</h3>
        <form>
          <input type="text" name="search" id="inpsearch" />
          <input
            type="submit"
            name="submit"
            id="btnBuscar"
            class="btn btn-find"
            value="Buscar"
          />
        </form>
      </div>
    </aside>
 
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  
};
</script>
