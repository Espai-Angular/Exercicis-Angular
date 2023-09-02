import { Component } from '@angular/core';

@Component({
  selector: 'app-salutacio',
  templateUrl: './salutacio.component.html',
  styleUrls: ['./salutacio.component.css'],
})
export class SalutacioComponent {
  message: string = '2on component de salutació';
  sayHelloId: number = 1;
  fontColor: string = 'orange';
  canClick: boolean = true;
  sayMessage() {
    console.log('Hola a tothom!');
  }
}
