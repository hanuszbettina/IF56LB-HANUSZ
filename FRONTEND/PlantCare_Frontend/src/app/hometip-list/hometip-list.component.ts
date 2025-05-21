import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HometipService } from '../hometip.service';
import { Hometip } from '../hometip';

@Component({
  selector: 'app-hometip-list',
  standalone: false,
  templateUrl: './hometip-list.component.html',
  styleUrl: './hometip-list.component.scss'
})
export class HometipListComponent {
  constructor(private router: Router, public hometipService: HometipService) { }
  remove(hometip: Hometip): void {
        this.hometipService.remove(hometip)
      }
}
