import { Component } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'app-edit-plant',
  standalone: false,
  templateUrl: './edit-plant.component.html',
  styleUrl: './edit-plant.component.scss'
})
export class EditPlantComponent {
  plant: Plant=new Plant()
}
