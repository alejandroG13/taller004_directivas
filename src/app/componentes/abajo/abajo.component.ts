import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css'],
})
export class AbajoComponent implements OnInit {
  public ponFondo: boolean;
  public mostrar: boolean;
  public habilitar: boolean;
  public miUrl: string;
  public miTesto: string;

  constructor() {
    this.ponFondo = true;
    this.mostrar = true;
    this.habilitar = true;
    this.miUrl = 'http://google.com';
    this.miTesto = 'Alejandro Garcia'
  }

  ngOnInit(): void {}

  public cambiar(): void {
    console.log('Hizo clic aqui');
    this.ponFondo = true;
    this.mostrar = true;
    this.habilitar = false;
  }

  public otroCambio(): void {
    this.mostrar = this.mostrar;
    this.habilitar = true;
    this.ponFondo = false;
  }
}
