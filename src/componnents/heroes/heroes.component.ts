import { Component, OnInit } from '@angular/core';
import { heroInterface } from "src/interfaces";
import { HeroService } from "src/services";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  heroes!: Array<heroInterface>;
  selectedHero!: heroInterface;
  showDetails: boolean = false;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.heroes = this.heroService.getAllHeroes();
  }

  trackByName(index: number, hero: heroInterface): string { return hero.name; };

  selectHero(hero: heroInterface) {
    this.selectedHero = hero;
  }

  displayDetails() {
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
  }

}
