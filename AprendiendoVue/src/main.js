import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import Formulario from './components/Formulario.vue';
import Blog from './components/Blog.vue';
import Pagina1 from './components/Pagina1.vue';
import Pagina2 from './components/Pagina2.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/', component: LastArticles},
  {path: '/ult-articles', component: LastArticles},
  {path: '/frm', component: Formulario},
  {path: '/pag/:id?', component: Pagina1},
  {path: '/pag2', component: Pagina2},
  {path: '/blg', component: Blog},
  {path: '/micomponente', component: MiComponente},
  {path: '*', component: ErrorComponent},
  {path: '/peliculas', component: Peliculas}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
