import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-boto',
  templateUrl: './boto.component.html',
  styleUrls: ['./boto.component.scss'],
})
export class BotoComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() text!: string;
  @Input() seleccio!: string;
  constructor() {}
  ngOnChanges(canvis: SimpleChanges): void {
    console.log('OnChanges -->', canvis);
  }
  ngOnInit(): void {
    console.log('OnInit carregant el botó');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
}
