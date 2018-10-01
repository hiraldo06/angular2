import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//HttpModule
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

//router
import {APP_ROUTING} from './app.routes';

//services
import {SearchService} from './services/search.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
