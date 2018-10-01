import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { StylecssComponent } from './componenets/stylecss/stylecss.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgswitchComponent } from './componets/ngswitch/ngswitch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioeditarComponent } from './components/usuario/usuarioeditar/usuarioeditar.component';
import { UsuarelimnarComponent } from './components/usuario/usuarelimnar/usuarelimnar.component';

//Routes



@NgModule({
  declarations: [
    AppComponent,
    StylecssComponent,
    CssComponent,
    ClassComponent,
    ResaltadoDirective,
    NgswitchComponent,
    HomeComponent,
    UsuarioComponent,
    NavbarComponent,
    UsuarioNuevoComponent,
    UsuarioeditarComponent,
    UsuarelimnarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
