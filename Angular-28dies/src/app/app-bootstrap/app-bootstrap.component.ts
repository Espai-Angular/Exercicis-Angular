import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './app-bootstrap.component.html',
  styleUrls: ['./app-bootstrap.component.scss'],
})
export class AppBootstrapComponent {
  ciutats: string[] = ['lima', 'montevideo', 'cuzco', 'buenos aires'];
  ciutatSeleccionada!: string;
  cerca!: string;
  dataAra: number = Date.now();

  onCiutatSeleccionada(ciutat: string) {
    this.ciutatSeleccionada = ciutat;
    console.log('Ciutat Seleccionada --> ', this.ciutatSeleccionada);
  }

  onAfegirCiutat(novaCiutat: string): void {
    console.log("Ciutat afegida a l'array --> ", novaCiutat);
    this.ciutats.push(novaCiutat);
    console.log('Ciutats', this.ciutats);
    const ciutatsSenseRepetir = this.ciutats.filter(
      (ciutat, index, ciutats) => ciutats.indexOf(ciutat) === index
    );
    //const ciutatsSenseRepetir = [...new Set(this.ciutats)];
    console.log('Ciutats sense repetir', ciutatsSenseRepetir);
    this.ciutats = ciutatsSenseRepetir;
    console.log('Ciutats', this.ciutats);
  }

  onEsborrarSeleccio() {
    this.ciutatSeleccionada = '';
    console.log('Ciutat Esborrada --> ', this.ciutatSeleccionada);
  }

  onCerca(): void {
    console.log('Cercant...');
  }
}
