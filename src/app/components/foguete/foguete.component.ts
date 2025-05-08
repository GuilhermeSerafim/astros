import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foguete',
  imports: [],
  templateUrl: './foguete.component.html',
  styleUrl: './foguete.component.scss'
})
export class FogueteComponent {
  @Input({ required: true }) color: string = "";
}
