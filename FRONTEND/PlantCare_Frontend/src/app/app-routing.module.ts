import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HometipListComponent } from './hometip-list/hometip-list.component';
import { StatsComponent } from './stats/stats.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';
import { CreateHometipComponent } from './create-hometip/create-hometip.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { EditHometipComponent } from './edit-hometip/edit-hometip.component';

const routes: Routes = [
  { path: "", redirectTo: "plant-list", pathMatch: "full" },
  { path: "plant-list", component: PlantListComponent },
  { path: "hometip-list", component: HometipListComponent },
  { path: "createplant", component: CreatePlantComponent },
  { path: "createhometip", component: CreateHometipComponent },
  { path: "editplant", component: EditPlantComponent },
  { path: "edithometip", component: EditHometipComponent },
  { path: "statistics", component: StatsComponent },
  { path: "**", redirectTo: "plantlist", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
