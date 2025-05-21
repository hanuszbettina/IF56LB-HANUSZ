import { Injectable } from '@angular/core';
import {Plant} from './plant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  plants: Plant[]=[]
  apiBaseUrl: string="https://localhost:7285/api/"

  constructor(private http:HttpClient) {
    this.loadApi();
   }
   loadApi(): void{
    this.http.get<Plant[]>(this.apiBaseUrl + "plant").subscribe(x => {
      this.plants = x
    })
   }

   create(plant: Plant): void {
       this.http.post(this.apiBaseUrl + "AddPlant", plant).subscribe({
         next: (response) => {
           console.log("::SUCCESS::")
           console.log("Create request result:", response)
           this.plants.push(plant)
         },
         error: (error) => {
           console.log("::ERROR::")
           console.log("Create request result:", error)
         }
       })
}
