import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HometipListComponent } from './hometip-list/hometip-list.component';
import { StatsComponent } from './stats/stats.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';

const routes: Routes = [
  { path: "", redirectTo: "plant-list", pathMatch: "full" },
  { path: "plant-list", component: PlantListComponent },
  { path: "hometip-list", component: HometipListComponent },
  { path: "createplant", component: CreatePlantComponent },
  { path: "statistics", component: StatsComponent },
  { path: "**", redirectTo: "plantlist", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
