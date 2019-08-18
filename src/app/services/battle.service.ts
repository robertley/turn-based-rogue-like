import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { Enemy } from '../interfaces/enemy.interface';
import { HeroService } from './hero.service';
import { GameService } from './game.service';
import { Subject } from 'rxjs';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  inBattle = false;
  enemy: Enemy
  
  enemyDamage: Subject<number> = new Subject<number>();
  heroDamage: Subject<number> = new Subject<number>();
  
  constructor(
    private heroService: HeroService,
    private gameService: GameService,
  ) {}
  
  toggleBattle() {
    this.inBattle = !this.inBattle
  }
  
  createEnemy() {
    let level = Math.ceil(this.gameService.floor / 2)

    this.enemy = {
      name: "Red-knee Tarantula",
      class: "normal",
      level: level,
      health: Math.ceil((level * .75) * 5),
      maxHealth: Math.ceil((level * .75) * 5),
      power: Math.ceil(level * 1.5),
      loot: [],
      gold: Math.ceil((level * .75) * 5)
    }
    
    return this.enemy
  }
  
  attack() {
    let enemy = this.enemy
    let hero = this.heroService.hero
    let minmax = this.heroService.calculateDamage(hero.inventory[hero.equippedWeapon])
    let minDamage = minmax["mindamage"]
    let maxDamage = minmax["maxdamage"]
    let roll = this.heroService.luckRoll()
    let attackPower = Math.round(minDamage + ((maxDamage - minDamage) * roll))

    enemy.health -= attackPower
    
    this.enemyDamage.next(attackPower)

    if (enemy.health < 1) {
      enemy.health = 0
      return true
    }
    return false
  }

  enemyAttack() {
    let attackPower = 1
    let isDead = this.heroService.takeDamage(attackPower)
    this.heroDamage.next(attackPower)
    if (isDead) {
      return true
    }
    return false
  }
}