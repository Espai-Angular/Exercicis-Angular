import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-component',
  templateUrl: './primer-component.component.html',
  styleUrls: ['./primer-component.component.css']
})
export class PrimerComponentComponent {
  text: string = 'Aquest és el meu primer component';
}
