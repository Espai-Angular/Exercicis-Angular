import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-depedency-injection',
  templateUrl: './depedency-injection.component.html',
  styleUrls: ['./depedency-injection.component.css']
})
export class DepedencyInjectionComponent {
  count: number = 0;
  constructor(private loggerService: LoggerService) { }
  onLog() {
    this.loggerService.writeCount(this.count);
    this.count++;
  }
}
