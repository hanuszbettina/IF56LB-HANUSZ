import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HometipListComponent } from './hometip-list/hometip-list.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';
import { CreateHometipComponent } from './create-hometip/create-hometip.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    HometipListComponent,
    NavComponent,
    StatsComponent,
    CreatePlantComponent,
    CreateHometipComponent,
    EditPlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
