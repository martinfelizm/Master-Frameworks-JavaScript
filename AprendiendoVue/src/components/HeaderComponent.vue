<template>
  <header id="headerPrin">
    <div class="center">
      <!--LOGO-->
      <div id="logo">
        <img
          src="../assets/images/imgVue.png"
          class="app-logo"
          alt="Logotipo"
        />
        <span id="brand">
          <!--marca-->
          <strong>Master</strong>Vue
        </span>
      </div>
      <!--MENU-->
      <nav id="menuPrin">
        <ul>
          <li>            
            <router-link to="/" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/blg" active-class="active">Blog</router-link>
            
          </li>
          <li>
            <router-link to="/frm" active-class="active">Formulario</router-link>
            
          </li>
          <li>
             <router-link to="/pag" active-class="active">Pagina 1</router-link>
           
          </li>
          <li>
            <router-link to="/pag2" active-class="active">Pagina 2</router-link>
            
          </li>
        </ul>
      </nav>
      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>     
    <script>
export default {
  name: "HeaderComponent",
};
</script>
        