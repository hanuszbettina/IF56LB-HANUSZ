import { Component } from '@angular/core';
import { Hometip } from '../hometip';
import { Router } from '@angular/router';
import { HometipService } from '../hometip.service';

@Component({
  selector: 'app-edit-hometip',
  standalone: false,
  templateUrl: './edit-hometip.component.html',
  styleUrl: './edit-hometip.component.scss'
})
export class EditHometipComponent {
  hometip: Hometip=new Hometip()
  constructor(private router: Router, private hometipService: HometipService) { }
  save(): void {
    this.hometipService.update(this.hometip)
    this.router.navigate(["/list"])
  }
}
