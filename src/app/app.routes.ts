import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ShowHideComponent } from './components/show-hide/show-hide.component';
import { ListPlanetsComponent } from './components/list-planets/list-planets.component';
import { StyleStarComponent } from './components/style-star/style-star.component';
import { ClassAsteroidComponent } from './components/class-asteroid/class-asteroid.component';
import { SpacePipesComponent } from './components/space-pipes/space-pipes.component';

export const routes: Routes = [
    { path: "", component: BindingComponent },
    { path: "ngif", component: ShowHideComponent },
    { path: "ngfor", component: ListPlanetsComponent },
    { path: "ngstyle", component: StyleStarComponent },
    { path: "ngclass", component: ClassAsteroidComponent },
    { path: "pipes", component: SpacePipesComponent },
];
