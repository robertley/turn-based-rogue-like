import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/interfaces/event.interface';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/interfaces/hero.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  @Output() changeGameState: EventEmitter<number> = new EventEmitter()
  @Output() deadReset: EventEmitter<any> = new EventEmitter()
  
  event: Event
  hero: Hero

  constructor(private eventService: EventService, private heroService: HeroService, private gameService: GameService) { }

  ngOnInit() {
    let eventNumber = Math.floor(Math.random() * this.eventService.allEvents.length)
    eventNumber = eventNumber + 1000 // for test objects
    this.event = this.eventService.getEvent(eventNumber)
    this.hero = this.heroService.hero
  }
  
  continue() {
    this.changeGameState.emit(1)
  }
  
  act(functionKey) {
    console.log(functionKey)
    if (functionKey == "plusVitality") {
      this.plusVitality()
    }
    if (functionKey == "plusStrength") {
      this.plusStrength()
    }
    if (functionKey == "plusResistence") {
      this.plusResistence()
    }
    if (functionKey == "plusMagicResistence") {
      this.plusMagicResistence()
    }
    if (functionKey == "plusIntelligence") {
      this.plusIntelligence()
    }
    if (functionKey == "plusCharisma") {
      this.plusCharisma()
    }
    if (functionKey == "plusLuck") {
      this.plusLuck()
    }
    if (functionKey == "loseHp5") {
      this.loseHp5()
    }
    if (functionKey == "") {
      
    }
  }
  
  
  // ############# event functions ##############
  
  plusVitality() {
    this.heroService.incrementStat(0)
    this.continue()
  }
  plusStrength() {
    this.heroService.incrementStat(1)
    this.continue()
  }
  plusResistence() {
    this.heroService.incrementStat(2)
    this.continue()
  }
  plusMagicResistence() {
    this.heroService.incrementStat(3)
    this.continue()
  }
  plusIntelligence() {
    this.heroService.incrementStat(4)
    this.continue()
  }
  plusCharisma() {
    this.heroService.incrementStat(5)
    this.continue()
  }
  plusLuck() {
    this.heroService.incrementStat(6)
    this.continue()
  }
  loseHp5() {
    let isDead = this.heroService.takeDamage(5)
    if (isDead) {
      this.gameService.floor = 0
      this.changeGameState.emit(0)
    } else {
      this.continue()
    }
  }

}
