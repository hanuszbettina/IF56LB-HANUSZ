import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../class/plant';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {
constructor(private router: Router, public plantService:PlantService){}
  DeletePlant(plant: Plant): void {
      this.plantService.DeletePlant(plant)
    }
  UpdatePlant(plant: Plant): void {
      this.router.navigate(["/editplant/"+plant.id])
    }
}
