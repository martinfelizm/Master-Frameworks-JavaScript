import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsComponent } from './components/items/items.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorPaginaComponent } from './components/error-pagina/error-pagina.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipes';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    ItemsComponent,
    FooterComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    HomeComponent,
    PeliculasComponent,
    ErrorPaginaComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleDetailsComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
