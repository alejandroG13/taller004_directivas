import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriba',
  templateUrl: './arriba.component.html',
  styleUrls: ['./arriba.component.css']
})
export class ArribaComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = ' Conociendo directivas';
  }

  ngOnInit(): void {
  }

}
