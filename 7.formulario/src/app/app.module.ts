import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioDataComponent } from './components/formulario-data/formulario-data.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import {APP_ROUTING} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTemplateComponent,
    FormularioDataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
