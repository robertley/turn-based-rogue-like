import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { GameService } from 'src/app/services/game.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() changeGameState: EventEmitter<number> = new EventEmitter()
  
  constructor(private gameService: GameService, private heroService: HeroService) { }

  ngOnInit() {
    console.log(this.heroService.hero)
  }
  
  nextFloor() {
    this.gameService.incrementFloor()
    let eventOddConst = 5
    
    if (Math.floor(Math.random() * eventOddConst) < 1) { // event
      this.changeGameState.emit(3)
    } else {
      this.changeGameState.emit(2)
    }
  }
}
