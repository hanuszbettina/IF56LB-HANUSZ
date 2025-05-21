import { Injectable } from '@angular/core';
import { Hometip } from './hometip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HometipService {
    hometipsArray: Hometip[]=[]
    apiBaseUrl: string="https://localhost:7285/api/"

    constructor(private http:HttpClient) {
      this.loadApi();
    }
    loadApi(): void{
      this.http.get<Hometip[]>(this.apiBaseUrl + "hometip").subscribe(x => {
        this.hometipsArray = x
      })
    }
    create(hometip: Hometip): void {
    this.http.post(this.apiBaseUrl + "AddHomeTip", hometip).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Create request result:", response)
        this.hometipsArray.push(hometip)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Create request result:", error)
      }
    })
  }

  update(hometip: Hometip): void {
    this.http.put(this.apiBaseUrl + "updateDeveloper", hometip).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Update request result:", response)
        let index = this.hometipsArray.findIndex(x => x.plantId === hometip.plantId)
        this.hometipsArray[index] = hometip
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Update request result:", error)
      }
    })
  }
}
