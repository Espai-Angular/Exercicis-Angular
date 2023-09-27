import { Component } from '@angular/core';

interface formulariContacte {
  nom: string;
  edat: boolean;
  departament: string;
  comentaris: string;
}

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.scss'],
})
export class ContacteComponent {
  /*   model: formulariContacte = {
    nom: 'Jordi',
    edat: true,
    departament: 'Màrqueting',
    comentaris: 'Això és un comentari...',
  }; */

  model: formulariContacte = {
    nom: '',
    edat: false,
    departament: '',
    comentaris: '',
  };

  onSubmit(formulari: any): void {
    console.log('Valors del formulari: ', formulari.value);
  }
}
