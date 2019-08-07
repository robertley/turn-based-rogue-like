import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enemy } from 'src/app/interfaces/enemy.interface';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { HeroService } from 'src/app/services/hero.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  
  @Output() changeGameState: EventEmitter<number> = new EventEmitter()
  @Output() deadReset: EventEmitter<any> = new EventEmitter()
  
  hero: Hero
  enemy: Enemy
  floor: number
  
  
  // pipelining
  disableAttackButton = false;
  
  constructor(private heroService: HeroService, private gameService: GameService) { }

  ngOnInit() {
    this.hero = this.heroService.hero
    this.floor = this.gameService.floor
    this.createEnemy()
  }
  
  createEnemy() {
    let level = Math.ceil(this.floor / 2)
    
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
  }
  attack() {
    this.disableAttackButton = true
    
    let enemy = this.enemy
    let hero = this.hero
    let attackPower = hero.inventory[hero.equippedWeapon].power
    
    enemy.health -= attackPower
    
    if (enemy.health < 1) {
      enemy.health = 0
      setTimeout(() => {
        let exp = enemy.level * 2
        hero.gold += enemy.gold
        hero.experience += exp
        alert(`You defeated ${enemy.name} \nYou found ${enemy.gold} gold!\nYou gained ${exp} exp`)
        this.changeGameState.emit(1)
      }, 500)
    } else {    
      this.enemyAttack()
      this.disableAttackButton = false
    }
  }
  
  enemyAttack() {
    let attackPower = 1
    let hero = this.hero
    
    hero.health -= attackPower
    if (hero.health < 1) {
      hero.health = 0
      alert("You dead")
      this.heroService.resetHero()
      this.gameService.floor = 0
      this.changeGameState.emit(0)
    }
  }
  
  useItem(index) {
    let hero = this.hero
    let item: Item = hero.inventory[index]
    if (item.type == "melee") {
      hero.health += item.power
      if (hero.health > hero.maxHealth) {
        hero.health = hero.maxHealth
      }
    }
    hero.inventory.splice(index, 1)
  }

}
