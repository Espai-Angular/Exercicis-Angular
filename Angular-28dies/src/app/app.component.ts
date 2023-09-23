import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  title = 'Angular, 28 dies';
  url: string = '../assets/th.jpeg';
  nom!: string;
  ciutats: string[] = ['Lima', 'Montevideo', 'Cusco'];
  ciutatSeleccionada!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Canvis -->', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  onCiutatClicada(ciutat: string) :void {
    console.log("Ciutat -->", ciutat);    
    this.ciutatSeleccionada = ciutat;
  }

  onEsborrarSeleccio(): void {
    this.ciutatSeleccionada = '';
  }
}
