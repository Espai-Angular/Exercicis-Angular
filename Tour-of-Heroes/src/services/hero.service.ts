import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../app/data/hero';
import { HEROES } from '../app/data/mock-heroes';
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
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`Heroi actualitzat amb id=${hero.id}`)),
      catchError(
        this.handleError<any>('Error actualitzant heroi amb id=${hero.id}')
      )
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
