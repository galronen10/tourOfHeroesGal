import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { heroInterface } from "src/interfaces";
import { HeroService } from "src/services";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less'],
  providers:[HeroService]
})
export class HeroDetailsComponent implements OnInit, OnDestroy{

  @Output() onClose = new EventEmitter<any>();
  @Input() heroId!: number;
  heroName = '';

  constructor(private heroService: HeroService) { }

  ngOnDestroy() {
    this.heroService.updateHeroName(this.heroId, this.heroName);
  }

  ngOnInit() {
    this.heroName = this.heroService.getHeroNameById(this.heroId);

  }
  closeDetails() {
    this.onClose.emit();
  }
}
