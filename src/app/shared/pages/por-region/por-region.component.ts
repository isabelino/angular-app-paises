import { Component, OnInit } from '@angular/core';
import { Paises } from '../interfaces/paises';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino:string = "Hola como vamos";
  existeError:boolean = false;
  paises!:Paises[];

  constructor( private paisService:PaisService) { }

  buscar(valor:string){
    this.termino = valor;
    this.existeError = false;
    console.log(this.termino);
    this.paisService.buscarRegion(this.termino).subscribe(
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
