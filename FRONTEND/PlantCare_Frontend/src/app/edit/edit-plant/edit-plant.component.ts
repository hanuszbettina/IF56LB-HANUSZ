import { Component } from '@angular/core';
import { Plant } from '../../class/plant';
import {Router } from '@angular/router';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-edit-plant',
  standalone: false,
  templateUrl: './edit-plant.component.html',
  styleUrl: './edit-plant.component.scss'
})
export class EditPlantComponent {
  plant: Plant=new Plant()
  constructor(private router: Router, private plantService: PlantService) { }
  save(): void {
    this.plantService.AddPlant(this.plant)
    this.router.navigate(["/plant-list"])
  }
}
