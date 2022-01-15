import { Injectable } from '@angular/core';
import { HEROES } from './mockHeros';
import { heroInterface } from "src/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Array<heroInterface> = HEROES;

  constructor() { }
  getTopHeroes() {
    const tempHeros = [...this.heroes];
    tempHeros.sort((a, b) => b.rating - a.rating);
    return tempHeros.slice(0,4);
  };

  getAllHeroes() {
    return this.heroes;
  }

  updateHeroName(id: number, name: string) {
    const heroTOUpdate  = this.heroes.find(hero => hero.id === id)
    if (heroTOUpdate) heroTOUpdate.name = name;
    console.log(this.heroes);
  }

  getHeroNameById(id: number) : string{
    const heroName = this.heroes.find(hero => hero.id === id)?.name;
    return heroName ? heroName : '';
  }
}
