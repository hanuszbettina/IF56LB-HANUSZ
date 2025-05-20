import { Injectable } from '@angular/core';
import {Plant} from './plant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  plants: Plant[]=[]
  apiBaseUrl: string="https://localhost:7285/api/index.html"

  constructor(private http:HttpClient) {
    this.loadApi();
   }
   loadApi(): void{
    this.http.get<Plant[]>(this.apiBaseUrl + "getPlants").subscribe(x => {
      this.plants = x
    })
   }
}
