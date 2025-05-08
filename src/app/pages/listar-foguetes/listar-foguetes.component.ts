import { Component } from '@angular/core';
import { FogueteComponent } from "../../components/foguete/foguete.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-foguetes',
  imports: [FogueteComponent, CommonModule, MatButtonModule],
  templateUrl: './listar-foguetes.component.html',
  styleUrl: './listar-foguetes.component.scss'
})
export class ListarFoguetesComponent {
  constructor(private router: Router) { }
  listRockets!: any;
  indexRocket = -1;

  ngOnInit() {
    this.listRockets = history.state.data;
    console.log(this.listRockets)
  }

  selectedRocket(i: number) {
    this.indexRocket = i;
  }
  decolar() {
    const rocket = this.listRockets[this.indexRocket];
    if (!rocket) return;
    this.router.navigate(["/decolar"], { state: { rocket } });
  }
}
