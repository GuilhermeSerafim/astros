import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ListarFoguetesComponent } from './pages/listar-foguetes/listar-foguetes.component';

export const routes: Routes = [
    { path: "", component: BindingComponent },
    { path: "listaFoguetes", component: ListarFoguetesComponent },    
];
