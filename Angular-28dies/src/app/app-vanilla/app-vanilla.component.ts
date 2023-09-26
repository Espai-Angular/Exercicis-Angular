import { Component } from '@angular/core';

@Component({
  selector: 'app-vanilla',
  templateUrl: './app-vanilla.component.html',
  styleUrls: ['./app-vanilla.component.scss'],
})
export class AppVanillaComponent {
  url: string = '../assets/th.jpeg';
  nom!: string;
  ciutats: string[] = ['Lima', 'Montevideo', 'Cusco'];
  ciutatSeleccionada!: string;
  salutacio: string[] = ['Bon dia', 'Bona tarda'];
  textSalutacio!: string;

  onCiutatClicada(ciutat: string): void {
    console.log('Ciutat -->', ciutat);
    this.ciutatSeleccionada = ciutat;
  }

  onEsborrarSeleccio(): void {
    this.ciutatSeleccionada = '';
  }

  onDirBonDia(): void {
    this.textSalutacio = this.salutacio[0];
  }

  onDirBonaTarda(): void {
    this.textSalutacio = this.salutacio[1];
  }
}
