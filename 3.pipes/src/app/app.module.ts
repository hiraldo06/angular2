import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { CapitalizacionPipe } from './pipes/capitalizacion.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CodificarPipe } from './pipes/codificar.pipe';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { LOCALE_ID} from '@angular/core';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizacionPipe,
    DomseguroPipe,
    CodificarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
