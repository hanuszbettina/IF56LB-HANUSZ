import { Injectable } from '@angular/core';
import {Plant} from '../class/plant';
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

      update(plant: Plant): void {
    this.http.put(this.apiBaseUrl + "UpdatePlant", plant).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Update request result:", response)
        let index = this.plants.findIndex(x => x.id === plant.id)
        this.plants[index] = plant
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Update request result:", error)
      }
    })
  }

  remove(plant: Plant): void {
    this.http.delete(this.apiBaseUrl + "DeletePlant", {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: {
        id: plant.id
      }
    }).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Delete request result:", response)
        this.plants = this.plants.filter(x => x.id !== plant.id)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Delete request result:", error)
      }
    })
  }
}
