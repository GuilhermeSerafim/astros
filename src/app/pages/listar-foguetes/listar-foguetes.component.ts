import { Component } from '@angular/core';
import { FogueteComponent } from "../../components/foguete/foguete.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listar-foguetes',
  imports: [FogueteComponent, CommonModule, MatButtonModule],
  templateUrl: './listar-foguetes.component.html',
  styleUrl: './listar-foguetes.component.scss'
})
export class ListarFoguetesComponent {
  listRockets!: any;
  indexRocket = -1;

  ngOnInit() {
    this.listRockets = history.state.data;
    console.log(this.listRockets)
  }

  selectedRocket(i: number) {
    this.indexRocket = i;
  }
}
