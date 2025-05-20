import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HometipListComponent } from './hometip-list/hometip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    HometipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
