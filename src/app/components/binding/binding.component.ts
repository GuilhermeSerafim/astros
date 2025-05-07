import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  private timerId!: number;
  count = 0;

  shipName = '';
  iniciarDecolagem(arg0: number) {
    this.count = arg0;
  }
}
