import { Routes } from '@angular/router';
import { ListadoContactos } from './components/listado-contactos/listado-contactos';
import { Formulario } from './components/formulario/formulario';
import { Error404 } from './components/error/error';

export const routes: Routes = [
    {path:'', component: ListadoContactos},
    {path:'listado', component: ListadoContactos},
    {path:'agregar', component: Formulario},
    {path:'editar/:llave', component: Formulario},
    {path:'**', component: Error404}
];
