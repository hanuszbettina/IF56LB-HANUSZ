import { Component } from '@angular/core';
import { Hometip } from '../hometip';

@Component({
  selector: 'app-edit-hometip',
  standalone: false,
  templateUrl: './edit-hometip.component.html',
  styleUrl: './edit-hometip.component.scss'
})
export class EditHometipComponent {
  hometip: Hometip=new Hometip()
}
