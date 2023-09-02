import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editable',
  templateUrl: './text-editable.component.html',
  styleUrls: ['./text-editable.component.css'],
})
export class TextEditableComponent {
  message: string = 'Aquest és el text...';
  canEdit: boolean = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    this.message = this.canEdit
      ? 'Ara es pot editar!'
      : 'I ara no es pot editar, ho sentim...';
  }
}
