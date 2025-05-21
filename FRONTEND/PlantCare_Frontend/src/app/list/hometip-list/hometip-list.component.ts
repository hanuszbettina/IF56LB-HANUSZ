import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HometipService } from '../../services/hometip.service';
import { Hometip } from '../../class/hometip';

@Component({
  selector: 'app-hometip-list',
  standalone: false,
  templateUrl: './hometip-list.component.html',
  styleUrl: './hometip-list.component.scss'
})
export class HometipListComponent {
  constructor(private router: Router, public hometipService: HometipService) { }
      DeleteHomeTip(hometip: Hometip): void {
            this.hometipService.DeleteHomeTip(hometip)
          }
      UpdateHomeTip(hometip: Hometip): void {
            this.router.navigate(["/edithometip/"+hometip.plantName])
          }
}
