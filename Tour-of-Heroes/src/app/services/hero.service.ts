import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../data/hero';
import { HEROES } from '../data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('Herois obtinguts correctament')),
      catchError(this.handleError<Hero[]>('Error obtenint herois', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    const urlId = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(urlId).pipe(
      tap((_) => this.log(`Heroi obtingut amb id=${id} obtingut correctament`)),
      catchError(this.handleError<Hero>(`Error obtenint heroi amb id=${id}`))
    );
  }
  updateHero(hero: Hero): Observable<any> {
    const updatedHeroId: number = hero?.id;
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`Heroi actualitzat amb id=${updatedHeroId}`)),
      catchError(
        this.handleError<any>(
          `Error actualitzant heroi amb id=${updatedHeroId}`
        )
      )
    );
  }
  addHero(hero: Hero): Observable<Hero> {
    const newHeroId: number = hero?.id;
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(() => this.log(`Heroi afegit amb id=${newHeroId}`)),
      catchError(
        this.handleError<Hero>(`Error afegint heroi amb id=${newHeroId}`)
      )
    );
  }
  deleteHero(id: number): Observable<Hero> {
    const urlId = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(urlId, this.httpOptions).pipe(
      tap((_) => this.log(`Heroi eliminat amb id=${id}`)),
      catchError(this.handleError<Hero>(`Error eliminant heroi amb id=${id}`))
    );
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`Heroi obtingut segons la paruala=${term}`)
          : this.log(`Cap heroi obtingut segons la paraula=${term}`)
      ),
      catchError(this.handleError<Hero[]>('Error obtenint herois', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} fallit: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`Servei 'HeroService': ${message}`);
  }
}
