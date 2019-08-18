import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces/item.interface';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { BattleService } from 'src/app/services/battle.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input()
  item: Item
  
  @Input()
  index: number

  hero: Hero
  
  showInfoBox = false;
  
  minDamage;
  maxDamage;
  
  constructor(private itemService: ItemService, private heroService: HeroService, private battleService: BattleService) { }

  ngOnInit() {
    this.hero = this.heroService.hero
  }
  
  calculateDamage() {
    if (this.item.type == "melee") {
      let weaponDmgMin = this.item.power / 2
      let weaponDmgMax = this.item.power * 2
      let weaponSkillmin = this.item.power / 3
      
      this.minDamage = Math.min(weaponDmgMin * (this.hero.stats.strength / weaponSkillmin), weaponDmgMax)
      this.maxDamage = Math.ceil(this.minDamage * 1.25)
    }
  }
  
  useItem() {
    if (this.item.subType == "health") {
      this.heroService.healHero(this.item.power)
      this.heroService.consumeItem(this.index)
    }
    
    if (this.battleService.inBattle) {
      this.battleService.enemyAttack()
    }
  }
  
  equipItem() {
    this.heroService.equipItem(this.index)
    
    if (this.battleService.inBattle) {
      this.battleService.enemyAttack()
    }
  }
  
}
