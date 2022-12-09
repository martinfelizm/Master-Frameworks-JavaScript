import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes a los cuales les quiero hacer una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorPaginaComponent } from './components/error-pagina/error-pagina.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },    
    { path: 'blog/articulo/:id', component: ArticleDetailsComponent },
    { path: 'articulo-new', component: ArticleNewComponent },
    { path: 'blog/article_edit/:id', component: ArticleEditComponent },
    { path: 'buscar/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent }, // Acceder sin mandar parametros
    { path: 'pagina-de-pruebas/:vSend', component: PaginaComponent }, // Acceder mandando parametros
    { path: '**', component: ErrorPaginaComponent },
];

//Exportar modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);//Carga todas las configuraciones de rutas
