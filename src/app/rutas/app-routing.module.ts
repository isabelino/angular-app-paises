import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from '../shared/pages/por-capital/por-capital.component';
import { PorPaisComponent } from '../shared/pages/por-pais/por-pais.component';
import { PorRegionComponent } from '../shared/pages/por-region/por-region.component';
import { VerPaisComponent } from '../shared/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path:'',
    component:PorPaisComponent,
    pathMatch:'full'
  },
  {
    path:'region',
    component: PorRegionComponent
  },
  {
    path:'capital',
    component: PorCapitalComponent
  },
  {
    path:'pais/:id',
    component: VerPaisComponent
  },
  {
    path:'**',
    redirectTo:''
  }
 /* {
    path:'pais',
    component: PorPaisComponent,

    children:[
        {
          path:'crear',
          component:Formulario
        }
    ]
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
