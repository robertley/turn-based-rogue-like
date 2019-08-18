import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { HeroService } from 'src/app/services/hero.service';
import { BattleService } from 'src/app/services/battle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  hero: Hero
  classString: string
  damageDealt: number
  showDamageDealt = false
  secondShowDamageDealt = false
  
  subscription: Subscription

  constructor(private heroService: HeroService, private battleService: BattleService) {
    this.subscription = this.battleService.heroDamage.subscribe((amt) => {
      this.renderDamage(amt)
    })
  }

  ngOnInit() {
    this.hero = this.heroService.hero
    this.classString = this.heroService.getClassString(this.hero.class)
  }
  
  // todo fix rendering bugs
  renderDamage(amt) {
    this.damageDealt = amt
    if (!this.showDamageDealt) {
      this.showDamageDealt = true
      setTimeout(() => {
        this.showDamageDealt = false
      }, 1000)
    } else {
      this.secondShowDamageDealt = true
      setTimeout(() => {
        this.secondShowDamageDealt = false
      }, 1000)
    }
  }
}
