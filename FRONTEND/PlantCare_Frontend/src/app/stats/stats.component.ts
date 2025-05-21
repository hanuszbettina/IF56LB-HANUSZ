import { Component } from '@angular/core';
import { StatsService } from '../stats.service';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  constructor(
    public statsService: StatsService,
    public plantService: PlantService
  ){}

  get plants(): Plant[]{
    return this.plantService.plants
  }

  get totalPlantCount(): number{
    return this.statsService.totalPlantCount(this.plants)
  }

  get averageHomeTipCount():number{
    return this.statsService.averageHomeTipCount(this.plants)
  }

  get mostTippedPlant(): Plant | null{
    return this.statsService.mostTippedPlant(this.plants)
  }

  get leastTippedPlant(): Plant | null{
    return this.statsService.leastTippedPlant(this.plants)
  }
} 