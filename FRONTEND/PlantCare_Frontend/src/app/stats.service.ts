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
}
