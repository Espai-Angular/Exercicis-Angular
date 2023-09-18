import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular, 28 dies';
  url: string = '../assets/th.jpeg';
  nom!: string;
  ciutats: string[] = ['Lima', 'Monevideo', 'Cusco'];
}
