import { Routes } from '@angular/router';
import {UsuarioNuevoComponent} from './usuario-nuevo/usuario-nuevo.component';
import {UsuarioeditarComponent} from './usuarioeditar/usuarioeditar.component';
import {UsuarelimnarComponent} from './usuarelimnar/usuarelimnar.component';
export const U_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioeditarComponent },
  { path: 'eliminar', component: UsuarelimnarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
