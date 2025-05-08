import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StarsComponent } from "../../components/stars/stars.component";
import { MatButtonModule } from '@angular/material/button';
import { FogueteComponent } from '../../components/foguete/foguete.component';
import { FormsModule } from '@angular/forms';
interface Rocket {
  id: number;      // por ex. índice ou um UUID
  name: string,
  color: string
}
@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButtonModule, FogueteComponent, StarsComponent, StarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router)  { }
  newColor = '';
  newName = '';
  nomeEstaAdicionado = false;
  corEstaAdicionada = false;
  rockets: Rocket[] = [];


  adicionarNome() {
    this.nomeEstaAdicionado = true;
  }
  adicionarCor() {
    if (!(this.newColor.trim() === "")) {
      this.corEstaAdicionada = true;
      this.rockets.push({
        id: this.rockets.length + 1,
        name: this.newName.trim(),
        color: this.newColor,
      });
    }
  }

  criarOutroFoguete() {
    this.newName = "";
    this.newColor = "";
    this.corEstaAdicionada = false;
    this.nomeEstaAdicionado = false;
    console.log(this.rockets);
  }

  listarFoguetes() {
    if (this.rockets.length > 0) {
      this.router.navigate(['/listaFoguetes'], { state: { data: this.rockets } });
    }
  }
}
