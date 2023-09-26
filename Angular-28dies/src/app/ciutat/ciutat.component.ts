import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ciutat',
  templateUrl: './ciutat.component.html',
  styleUrls: ['./ciutat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CiutatComponent {
  @Input() ciutat!: string;
  @Input() ciutatSeleccionada!: string;
  @Output() eventCiutatSeleccionada = new EventEmitter<string>();

  onCiutatClicada(ciutat: string): void {
    this.eventCiutatSeleccionada.emit(ciutat);
  }

  ngOnInit(): void {
    console.count('Renderitzat del ciutat');
  }
}
