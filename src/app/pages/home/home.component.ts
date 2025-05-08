import { Component } from '@angular/core';
import { CriacaoFogueteComponent } from "../../components/criacao-foguete/criacao-foguete.component";

@Component({
  selector: 'app-home',
  imports: [CriacaoFogueteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
