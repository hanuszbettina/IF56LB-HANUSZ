import { Injectable } from '@angular/core';
import { Plant } from '../class/plant';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  totalPlantCount(plants: Plant[]):number
  {
    return plants.length
  }

  averageHomeTipCount(plants: Plant[]): number {
  if (!plants.length) 
    {
      return 0;
    }
    else
    {
      const totalTips = plants.map(p => p.homeTips?.length ?? 0).reduce((a, b) => a + b, 0);
      return (totalTips / plants.length);
    }
  }
  
  mostTippedPlant(plants: Plant[]): Plant | null {
    if (!plants.length) 
    {
      return null;
    }
    else
    {
      return plants.reduce((a, b) => (a.homeTips?.length ?? 0) > (b.homeTips?.length ?? 0) ? a : b);
    }
 }

 leastTippedPlant(plants: Plant[]): Plant | null {
    if (!plants.length) 
    {
      return null;
    }
    else
    {
      return plants.reduce((a, b) => (a.homeTips?.length ?? 0) < (b.homeTips?.length ?? 0) ? a : b);
    }
 }

//diagram 
getBarChartConfig(plants: Plant[]): ChartConfiguration<'bar'> {
    return {
      type: 'bar',
      data: {
        labels: plants.map(p => p.name),
        datasets: [{
          label: 'Plants Hometips',
          data: plants.map(p => p.homeTips ? p.homeTips.length : 0),
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
