import { Routes } from '@angular/router';
import { ListarFoguetesComponent } from './pages/listar-foguetes/listar-foguetes.component';
import { FogueteDecolandoComponent } from './pages/foguete-decolando/foguete-decolando.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "listaFoguetes", component: ListarFoguetesComponent },    
    { path: "decolar", component: FogueteDecolandoComponent }
];
