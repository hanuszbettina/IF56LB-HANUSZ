import { Component } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-create-plant',
  standalone: false,
  templateUrl: './create-plant.component.html',
  styleUrl: './create-plant.component.scss'
})
export class CreatePlantComponent {
  plant: Plant=new Plant()
  
}
