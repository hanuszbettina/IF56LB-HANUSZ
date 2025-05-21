import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {
constructor(private router: Router, public plantService:PlantService){}
  remove(plant: Plant): void {
      this.plantService.remove(plant)
    }
  edit(plant: Plant): void {
      this.router.navigate(["/editplant/" + plant.id])
    }
}
