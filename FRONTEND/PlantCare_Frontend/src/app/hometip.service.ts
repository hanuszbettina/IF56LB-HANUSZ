import { Injectable } from '@angular/core';
import { Hometip } from './hometip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HometipService {
    hometipsArray: Hometip[]=[]
    apiBaseUrl: string="https://localhost:7285/api/index.html"

    constructor(private http:HttpClient) {
      this.loadApi();
    }
    loadApi(): void{
      this.http.get<Hometip[]>(this.apiBaseUrl + "getAllPlants").subscribe(x => {
        this.hometipsArray = x
      })
    }
}
