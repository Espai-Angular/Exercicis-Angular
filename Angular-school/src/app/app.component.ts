import { Component } from '@angular/core';
import { SalutacioService } from './services/salutacio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-school';
  meuNom: string | undefined = 'Pere';
  mevaImatge: string | undefined = '../assets/logo-angular.png';
  estilsTitol: { [key: string]: string } = {};

  constructor(private salutacio: SalutacioService) {}

  onDiguesHola(missatge: string) {
    this.salutacio.handleSalutacio(missatge);
    console.log('Comptador: ' + this.salutacio.comptador);
    this.defineixEstils();
  }
  defineixClasse(nom: string) {
    return {
      error: nom.length <= 3,
      warning: nom.length > 3 && nom.length <= 6,
      success: nom.length > 6,
      bold: nom.length > 8,
    };
  }
  defineixEstils() {
    this.estilsTitol = {
      'margin-top': '2rem',
      color: this.salutacio.comptador % 2 === 0 ? 'olive' : 'darkorange',
    };
  }
}
