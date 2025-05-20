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
}
