import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { Item } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  
  @Output() changeGameState: EventEmitter<number> = new EventEmitter();
  
  hero: Hero
  heroClass;
  addStatLeft = 200
  addGoldAmt = 50
  startsWith: Item[]

  constructor(
    private heroService: HeroService, 
    private itemService: ItemService, 
    private spellService: SpellService
  ) { }

  ngOnInit() {
    this.hero = this.heroService.hero
    this.selectClass(0)
  }
  
  begin() {
    this.changeGameState.emit(1);
  }
  
  selectClass(heroClass) {
    if (heroClass != this.heroClass) {
      this.hero.class = heroClass
      this.heroClass = heroClass
      if (heroClass == 0) {
        this.heroService.setStats(0)
        this.startsWith = [this.itemService.getItem(0), this.itemService.getItem(2)]
        this.hero.inventory = [this.itemService.getItem(0), this.itemService.getItem(2)]
        this.hero.spells = []
      }
      if (heroClass == 1) {
        this.heroService.setStats(1)
        this.startsWith = [this.itemService.getItem(1), this.itemService.getItem(2)]
        this.hero.inventory = [this.itemService.getItem(1), this.itemService.getItem(2)]
        this.hero.spells = [this.spellService.getSpell(0), this.spellService.getSpell(1)]
      }
    }
    
    this.hero.inventory.push(this.itemService.getItem(1000));
    this.hero.inventory.push(this.itemService.getItem(1001));
    this.hero.inventory.push(this.itemService.getItem(1002));
    this.hero.inventory.push(this.itemService.getItem(1003));
  }
  
  increaseStat(stat) {
    if (stat == 0) {
      this.heroService.incrementStat(0)
    }
    if (stat == 1) {
      this.heroService.incrementStat(1)
    }
    if (stat == 2) {
      this.heroService.incrementStat(2)
    }
    if (stat == 3) {
      this.heroService.incrementStat(3)
    }
    if (stat == 4) {
      this.heroService.incrementStat(4)
    }
    if (stat == 5) {
      this.heroService.incrementStat(5)
    }
    if (stat == 6) {
      this.heroService.incrementStat(6)
    }
    if (stat == 7) {
      this.hero.gold += this.addGoldAmt
      this.addGoldAmt = 100
    }
    this.addStatLeft--
  }
  
  decreaseStat(stat) {
    this.heroService.decrementStat(stat)
  }
  
  luckRoll() {
    console.log(this.heroService.luckRoll())
  }

}
