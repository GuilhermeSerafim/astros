import { Component } from '@angular/core';
import { FogueteComponent } from '../../components/foguete/foguete.component';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { RandomPlanetPipe } from '../../pipes/random-planet.pipe';

@Component({
  selector: 'app-foguete-decolando',
  imports: [RouterModule, FogueteComponent, MatButton, RandomPlanetPipe],
  templateUrl: './foguete-decolando.component.html',
  styleUrl: './foguete-decolando.component.scss'
})
export class FogueteDecolandoComponent {
  rocket = history.state.rocket as { name: string; color: string };
  showSocial = false;

  onLaunchEnd() {
    // Para ler o destino e a descrição do Pipe
    setTimeout(() => this.showSocial = true, 3000);
  }
  oppenLinkedin() {
    window.open('https://www.linkedin.com/in/guilherme-da-silva-serafim/', '_blank');
  }
  oppenGithub() {
    window.open('https://github.com/GuilhermeSerafim', '_blank');
  }
  oppenInstagram() {
    window.open('https://www.instagram.com/iamguiler/', '_blank');
  }
}
