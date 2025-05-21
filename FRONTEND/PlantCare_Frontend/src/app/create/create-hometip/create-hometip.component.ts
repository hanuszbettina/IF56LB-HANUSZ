import { Component } from '@angular/core';
import { Hometip } from '../../class/hometip';
import { ActivatedRoute, Router } from '@angular/router';
import { HometipService } from '../../services/hometip.service';

@Component({
  selector: 'app-create-hometip',
  standalone: false,
  templateUrl: './create-hometip.component.html',
  styleUrl: './create-hometip.component.scss'
})
export class CreateHometipComponent {
  hometip:Hometip=new Hometip()
  constructor(private router: Router, private hometipService: HometipService) { }
  create(): void {
    this.hometipService.AddHomeTip(this.hometip)
    this.router.navigate(["/hometip-list"])
  }
}
