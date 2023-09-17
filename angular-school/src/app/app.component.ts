import { Component } from '@angular/core';

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
  comptador: number = 0;
  onDiguesHola($event: string) {
    console.log($event);
    this.comptador++;
    console.log("Comptador: " + this.comptador);    
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
      "color": this.comptador % 2 === 0 ? 'olive' : 'darkorange',
    };
  }
}
