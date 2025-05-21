import { Component } from '@angular/core';
import { Hometip } from '../../class/hometip';
import { Router } from '@angular/router';
import { HometipService } from '../../services/hometip.service';

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
