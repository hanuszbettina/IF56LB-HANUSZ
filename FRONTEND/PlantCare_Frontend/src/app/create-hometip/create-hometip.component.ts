import { Component } from '@angular/core';
import { Hometip } from '../hometip';

@Component({
  selector: 'app-create-hometip',
  standalone: false,
  templateUrl: './create-hometip.component.html',
  styleUrl: './create-hometip.component.scss'
})
export class CreateHometipComponent {
  hometip:Hometip=new Hometip()
}
