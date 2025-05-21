import { Injectable } from '@angular/core';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  totalPlantCount(plants: Plant[]):number
  {
    return plants.length
  }

  
  
}
