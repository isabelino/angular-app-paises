import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PagesModule { }
