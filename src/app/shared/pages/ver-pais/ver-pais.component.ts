import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paises } from '../interfaces/paises';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Paises[];
  constructor(private servicio: PaisService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(
      ({id})=>{
        this.servicio.verDetalle(id).subscribe(
          pais =>{
            this.pais = pais;
          }
        )
      }

    );

  }

}
