import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enemy } from 'src/app/interfaces/enemy.interface';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { HeroService } from 'src/app/services/hero.service';
import { GameService } from 'src/app/services/game.service';
import { BattleService } from 'src/app/services/battle.service';
import { Subscription } from 'rxjs';

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
  damageDealt: number
  showDamageDealt = false
  secondShowDamageDealt = false
  
  // piping
  disableAttackButton = false;
  subscription: Subscription
  
  constructor(private battleService: BattleService, private heroService: HeroService, private gameService: GameService) {
    this.subscription = this.battleService.enemyDamage.subscribe((amt) => {
      this.renderEnemyDamage(amt)
    })
  }

  ngOnInit() {
    this.hero = this.heroService.hero
    this.floor = this.gameService.floor
    this.enemy = this.battleService.createEnemy()
    this.battleService.toggleBattle()
  }
  
  attack() {
    this.disableAttackButton = true
    if (this.battleService.attack()) {
      this.battleService.toggleBattle()
      setTimeout(() => {
        let exp = this.enemy.level * 2
        this.hero.gold += this.enemy.gold
        this.hero.experience += exp
        alert(`You defeated ${this.enemy.name} \nYou found ${this.enemy.gold} gold!\nYou gained ${exp} exp`)
        this.changeGameState.emit(1)
      }, 500)
    }
    if (this.battleService.enemyAttack()) {
      this.battleService.toggleBattle()
      this.gameService.floor = 0
      this.changeGameState.emit(0)
    }
    setTimeout(() => {
      this.disableAttackButton = false
    }, 500)
  }

  // todo fix rendering bugs
  renderEnemyDamage(amt) {
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
