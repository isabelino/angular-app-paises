import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  exports:[
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
