import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaServices } from '../../services/pelicula.services';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaServices]
})
export class PeliculasComponent implements OnInit {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fechaS: any;
  constructor( private _peliculaServ: PeliculaServices) {
    this.titulo = "Listado de peliculas";
    this.peliculas = this._peliculaServ.getPeliculas();
  }

  ngOnInit(): void {
    console.log(this._peliculaServ.hola());
  }

  seeFavorita(event) {
    //console.log(event);
    this.favorita = event.pelicula;
    this.fechaS = new Date();
  }

}
