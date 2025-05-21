import { Component } from '@angular/core';
import { Plant } from '../../class/plant';
import { PlantService } from '../../services/plant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-plant',
  standalone: false,
  templateUrl: './create-plant.component.html',
  styleUrl: './create-plant.component.scss'
})
export class CreatePlantComponent {
  plant: Plant=new Plant()
  constructor(private router: Router, private plantService: PlantService) { }
  save(): void {
    this.plantService.create(this.plant)
    this.router.navigate(["/plant-list"])
  }
}
