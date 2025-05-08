import { Component } from '@angular/core';
import { StarsComponent } from "../../components/stars/stars.component";

@Component({
  selector: 'app-home',
  imports: [StarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
