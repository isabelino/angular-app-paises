import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    SiderbarComponent
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    SiderbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
