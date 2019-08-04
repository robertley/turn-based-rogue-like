import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  hero: Hero
  classString: string

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = this.heroService.hero
    this.classString = this.heroService.getClassString(this.hero.class)
  }
    
  useItem(index) {
    let hero = this.hero
    let item: Item = hero.inventory[index]
    if (item.type == 1) {
      hero.health += item.power
      if (hero.health > hero.maxHealth) {
        hero.health = hero.maxHealth
      }
    }
    hero.inventory.splice(index, 1)
  }

  
}
