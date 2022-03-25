import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../interfaces/paises';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises:Paises[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
