import { RouterModule, Routes } from '@angular/router';

import {FormularioDataComponent} from './components/formulario-data/formulario-data.component';
import {FormularioTemplateComponent} from './components/formulario-template/formulario-template.component';

const APP_ROUTES: Routes = [
  { path: 'formulario-template', component: FormularioTemplateComponent },
  { path: 'formulario-data', component: FormularioDataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
