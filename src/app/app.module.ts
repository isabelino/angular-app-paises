import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './shared/pages/pages.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { PaisService } from './shared/pages/pais.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
