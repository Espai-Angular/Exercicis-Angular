import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() nom: string | undefined;
  @Output() diguesHola: EventEmitter<string> = new EventEmitter<string>();

  llistaNoms: string[] = [];
  nomInput: string = "";
  
  constructor() {}
  onNomClick() {
    this.diguesHola.emit('Molt bones, matí o tarda, per consola!');
  }
  afegirNom() {
    this.llistaNoms.push(this.nomInput);
    this.nomInput = "";
    console.log(this.llistaNoms);    
  }
}
