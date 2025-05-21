import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListComponent } from './list/plant-list/plant-list.component';
import { HometipListComponent } from './list/hometip-list/hometip-list.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';
import { CreatePlantComponent } from './create/create-plant/create-plant.component';
import { CreateHometipComponent } from './create/create-hometip/create-hometip.component';
import { EditPlantComponent } from './edit/edit-plant/edit-plant.component';
import { EditHometipComponent } from './edit/edit-hometip/edit-hometip.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    HometipListComponent,
    NavComponent,
    StatsComponent,
    CreatePlantComponent,
    CreateHometipComponent,
    EditPlantComponent,
    EditHometipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
