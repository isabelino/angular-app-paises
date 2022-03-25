import { Component, OnInit } from '@angular/core';
import { Paises } from '../interfaces/paises';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "Hola como vamos";
  existeError:boolean = false;
  paises!:Paises[];

  constructor( private paisService:PaisService) { }

  buscar(valor:string){
    this.termino = valor;
    this.existeError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) =>{
        this.paises = resp;
      },(err)=>{
        console.log("Error");
        this.existeError = true;
      }
    );

  }

  ngOnInit(): void {
  }

}
