import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FogueteComponent } from "../foguete/foguete.component";

interface Rocket {
  id: number;      // por ex. índice ou um UUID
  name: string,
  color: string
}

@Component({
  selector: 'app-binding',
  imports: [FormsModule, MatInputModule, MatButtonModule, FogueteComponent],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
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
