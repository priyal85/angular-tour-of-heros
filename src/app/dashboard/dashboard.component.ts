import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroServive: HeroService) {}

  ngOnInit() {
    this.loadTop5Heros();
  }
  loadTop5Heros(): void {
    this.heroServive
      .getHeroes()
      .subscribe(hrs => (this.heroes = hrs.slice(1, 5)));
  }
}
