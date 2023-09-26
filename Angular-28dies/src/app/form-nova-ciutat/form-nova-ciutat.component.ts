import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-nova-ciutat',
  templateUrl: './form-nova-ciutat.component.html',
  styleUrls: ['./form-nova-ciutat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNovaCiutatComponent {
  @Input() text!: string;
  @Input() novaClasse = 'btn-primary';
  @Output() eventAfegirCiutat = new EventEmitter<string>();

  onEmetreCiutat(novaCiutat: string): void {
    this.eventAfegirCiutat.emit(novaCiutat);
    console.log('Ciutat emesa pel formulari --> ', novaCiutat);
  }

  ngOnInit(): void {
    console.count('Renderitzat del formulari');
  }
}
