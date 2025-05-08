import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-foguete',
  imports: [],
  templateUrl: './foguete.component.html',
  styleUrl: './foguete.component.scss'
})
export class FogueteComponent {
  @Input({ required: true }) color: string = "";
  @Input() isSelected: boolean = false;
  @Input() rocketIndex: number = -1;
  @Output() onRocketSelectEmiit = new EventEmitter<number>();

  selectRocket() {
    this.onRocketSelectEmiit.emit(this.rocketIndex);
  }

}
