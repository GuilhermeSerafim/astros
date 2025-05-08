import { Component } from '@angular/core';
import { FogueteComponent } from "../../components/foguete/foguete.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-foguetes',
  imports: [FogueteComponent, CommonModule],
  templateUrl: './listar-foguetes.component.html',
  styleUrl: './listar-foguetes.component.scss'
})
export class ListarFoguetesComponent {
  listRockets!: any;

  ngOnInit() {
    this.listRockets = history.state.data;
    console.log(this.listRockets)
  }
}
