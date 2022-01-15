import { Component, OnInit } from '@angular/core';
import { heroInterface } from "src/interfaces";
import { HeroService } from "src/services";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit{

  heroes!: Array<heroInterface>;
  selectedHero!: heroInterface;
  showDetails: boolean = false;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.heroes = this.heroService.getTopHeroes();
  }

  trackByName(index: number, hero: heroInterface): string { return hero.name; };

  selectHero(hero: heroInterface) {
    this.selectedHero = hero;
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
  }
}
