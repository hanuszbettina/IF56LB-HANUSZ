import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { PlantService } from '../services/plant.service';
import { Plant } from '../class/plant';
import { PlantchartService } from '../services/plantchart.service';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  barChartConfig?: ChartConfiguration<'bar'>;
  constructor(
    private plantService: PlantService,
    private plantchartService: PlantchartService
  ) {
    this.loadData();
  }

  loadData() {
    this.plantService.getAllPlants((plant: Plant[]) => {
      this.barChartConfig = this.plantchartService.getBarChartConfig(plant);
    });
  }
}
