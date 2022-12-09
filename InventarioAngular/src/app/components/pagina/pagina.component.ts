import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public valorEnviado: string;
  public campo: string
  public campo2: string
  constructor( private _route : ActivatedRoute,
               private _router : Router) { }

  ngOnInit() {

    this._route.params.subscribe( (par : Params) => {
      console.log(par);
      this.valorEnviado = par.vSend;
    })
  }

  redireccionar(){
    this._router.navigate(['/pagina-de-pruebas','mande esto por la url']);
  }

  pressClick(){
    alert('Diste click al boton');
  }

  asSalido(){
    alert('Que paso? Saliste!!!');
  }

}
