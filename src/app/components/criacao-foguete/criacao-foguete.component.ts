import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FogueteComponent } from '../foguete/foguete.component';
import { StarsComponent } from "../stars/stars.component";


interface Rocket {
  id: number;      // por ex. índice ou um UUID
  name: string,
  color: string
}

@Component({
  selector: 'app-criacao-foguete',
  imports: [FormsModule, MatInputModule, MatButtonModule, FogueteComponent, StarsComponent],
  templateUrl: './criacao-foguete.component.html',
  styleUrl: './criacao-foguete.component.scss'
})
export class CriacaoFogueteComponent {

  constructor(private router: Router) { }
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
