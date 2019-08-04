import {Injectable} from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import { Hero } from '../interfaces/hero.interface';
import { ItemService } from './item.service';
import * as _ from "lodash"

@Injectable({
providedIn: 'root'
})
export class HeroService {
  
  hero: Hero;
  
  constructor(private itemService: ItemService) {
    
  }

  createHero() {
    this.hero = {
      name: "bobby",
      class: 0,
      level: 1,
      experience: 0,
      health: 10,
      maxHealth: 10,
      mana: 10,
      maxMana: 10,
      inventory: [this.itemService.getItem(0), this.itemService.getItem(1)],
      equippedWeapon: 0,
      gold: 0,
      stats: null
    }
    this.setStats(0)
  }
  
  setStats(heroClass) { // 18 points per class
    if (heroClass == 0) { // Warrior
      this.hero.stats = {
        vitality: 4,
        strength: 4,
        resistence: 3,
        magicResistence: 2,
        intelligence: 1,
        charisma: 2,
        luck: 2
      }
    }
    if (heroClass == 1) { // Wizard
      this.hero.stats = {
        vitality: 3,
        strength: 1,
        resistence: 2,
        magicResistence: 4,
        intelligence: 4,
        charisma: 2,
        luck: 2
      }
    }
    this.calcAttributes()
  }
  
  incrementStat(stat) {
    if (stat == 0) {
      this.hero.stats.vitality++
    }
    if (stat == 1) {
      this.hero.stats.strength++
    }
    if (stat == 2) {
      this.hero.stats.resistence++
    }
    if (stat == 3) {
      this.hero.stats.magicResistence++
    }
    if (stat == 4) {
      this.hero.stats.intelligence++
    }
    if (stat == 5) {
      this.hero.stats.charisma++
    }
    if (stat == 6) {
      this.hero.stats.luck++
    }
    this.calcAttributes()
  }
  
  calcAttributes() {
    this.hero.health = this.hero.stats.vitality * 4
    this.hero.maxHealth = this.hero.stats.vitality * 4
    this.hero.mana = this.hero.stats.intelligence * 4
    this.hero.maxMana = this.hero.stats.intelligence * 4
  }
  
  getClassString(classNum) {
    if (classNum == 0) {
      return "Warrior"
    }
    if (classNum == 1) {
      return "Wizard"
    }
  }

  resetHero() {
    let hero = this.hero

    hero.level = 1
    hero.experience = 0
    hero.health = 10
    hero.maxHealth = 10
    hero.mana = 10
    hero.maxMana = 10
    hero.inventory = [this.itemService.getItem(0), this.itemService.getItem(1)],
    hero.gold = 0,
    hero.equippedWeapon = 0
  }

  deadReset() {
    this.resetHero()
  }
}