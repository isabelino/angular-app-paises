import { Component, OnInit } from '@angular/core';
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

  constructor( private paisService:PaisService) { }

  buscar(){
    this.existeError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) =>{
        console.log(paises);
      },(err)=>{
        console.log("Error");
        this.existeError = true;
      }
    );

  }

  ngOnInit(): void {
  }

}
