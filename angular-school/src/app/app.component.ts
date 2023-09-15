import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-school';
  meuNom: string | undefined = 'Pere';
  mevaImatge: string | undefined = "../assets/logo-angular.png";
  onDiguesHola($event: string) {
    console.log($event);
    
  }
}
