import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor() { }

  registre(missatge: string) {
    console.log(missatge);
  }
  error(misstage: string) {
    console.error(misstage);
  }
  avis(missatge: string) {
    console.warn(missatge);
  }
}
