import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Input() i: number;
  @Output() marcarFavorita = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  Seleccionado(event, pelicula){
   this.marcarFavorita.emit({
     pelicula: pelicula
   });
  }
}
