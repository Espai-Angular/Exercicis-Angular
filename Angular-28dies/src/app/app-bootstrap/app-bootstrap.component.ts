import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './app-bootstrap.component.html',
  styleUrls: ['./app-bootstrap.component.scss'],
})
export class AppBootstrapComponent {
  ciutats: string[] = ['Lima', 'Montevideo', 'Cuzco'];
  ciutatSeleccionada!: string;

  onCiutatSeleccionada(ciutat: string) {
    this.ciutatSeleccionada = ciutat;
    console.log('Ciutat Seleccionada --> ', this.ciutatSeleccionada);
  }
  onEsborrarSeleccio() {
    this.ciutatSeleccionada = '';
  }
}
