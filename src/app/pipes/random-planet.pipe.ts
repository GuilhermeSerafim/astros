import { Pipe, PipeTransform } from '@angular/core';

interface Planet {
  name: string;
  description: string;
}

@Pipe({
  name: 'randomPlanet',
  standalone: true
})
export class RandomPlanetPipe implements PipeTransform {
  // 1) Defina aqui seu “banco” de planetas
  private planets: Record<number, Planet> = {
    1: { name: 'Mercúrio', description: 'O menor planeta, bem próximo do Sol.' },
    2: { name: 'Vênus',     description: 'A “irmã gêmea” mais quente da Terra.' },
    3: { name: 'Terra',     description: 'Nosso lar, o único com vida conhecida.' },
    4: { name: 'Marte',     description: 'O Planeta Vermelho, alvo de missões robóticas.' },
    5: { name: 'Júpiter',   description: 'O gigante gasoso com a Grande Mancha Vermelha.' },
    6: { name: 'Saturno',   description: 'Famoso por seus anéis brilhantes.' },
    7: { name: 'Urano',     description: 'Gás gelado, gira “de lado”.' },
    8: { name: 'Netuno',    description: 'O mais distante dos oito clássicos.' }
  };

  transform(): string {
    const total = Object.keys(this.planets).length;
    const randIndex = Math.floor(Math.random() * total) + 1;
    const planet = this.planets[randIndex];
    return `${planet.name}: ${planet.description}`;
  }
}
