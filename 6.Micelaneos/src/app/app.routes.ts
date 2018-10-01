import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {U_ROUTES} from './components/usuario/app.usuarioroutes';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id', component:UsuarioComponent,
    children:U_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
