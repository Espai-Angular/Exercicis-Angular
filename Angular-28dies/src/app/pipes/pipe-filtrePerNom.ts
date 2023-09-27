import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrePerNom',
})
export class FiltrePerNomPipe implements PipeTransform {
  transform(ciutats: string[], cerca: string): string[] {
    if (!cerca || cerca.length < 3) return ciutats;
    let ciutatsFiltrat: string[] = [];
    for (let ciutat of ciutats) {
      if (ciutat.indexOf(cerca.toLowerCase()) > -1) {
        ciutatsFiltrat = [...ciutatsFiltrat, ciutat];
      }
    }
    return ciutatsFiltrat;
    /* return ciutats.filter((ciutat) =>
        ciutat.toLowerCase().includes(cerca)
      ); */
  }
}
