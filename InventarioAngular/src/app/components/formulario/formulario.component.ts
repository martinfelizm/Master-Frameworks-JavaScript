import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public dataFrm: any;
  constructor() {
    this.dataFrm = {
      nombres: '',
      apellidos: '',
      biografia: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }
  onSubmit(event) {
    console.log(event);
    console.log(this.dataFrm);
  }
}
