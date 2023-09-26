import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-boto-bootstrap',
  templateUrl: './boto-bootstrap.component.html',
  styleUrls: ['./boto-bootstrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotoBootstrapComponent {
  @Input() color!: string;
  @Input() text!: string;

  ngOnInit() {
    console.count('%cRenderitzat del botó');
  }
}
