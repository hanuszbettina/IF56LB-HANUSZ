import { Injectable } from '@angular/core';
import { Plant } from '../class/plant';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class PlantchartService {

  constructor() { }
  getBarChartConfig(plants: Plant[]): ChartConfiguration<'bar'> {
    return {
      type: 'bar',
      data: {
        labels: plants.map(p => p.name),
        datasets: [{
          label: 'Plants Hometips',
          data: plants.map(p => p.homeTips.length),
          backgroundColor: 'rgba(30, 128, 5, 0.77)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 10 }
        }
      }
    };
  }

}
