import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: Number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heroes

    const foundHero = HEROES.find(hero => hero.id === id);
    if (foundHero) {
      this.messageService.add('HeroService: fetched hero id: ' + foundHero.id + ' name: ' + foundHero.name);
    } else {
       // Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
      this.messageService.add(`HeroService: <Error> Hero not found -> id :${id}`);
    }
    return of(foundHero);
  }
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
