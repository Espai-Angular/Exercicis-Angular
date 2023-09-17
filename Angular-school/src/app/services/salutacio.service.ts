import { Injectable } from '@angular/core';
import { RegistreService } from './registre.service';

@Injectable({
  providedIn: 'root',
})
export class SalutacioService {
  comptador: number = 0;
  
  constructor(private regitre: RegistreService) { }
  
  handleSalutacio(missatge: string) {
    this.comptador++;
    this.regitre.registre(missatge);
  }
}
