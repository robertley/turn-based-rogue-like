import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { Enemy } from 'src/app/interfaces/enemy.interface';
import { GameState } from 'src/app/enums/game-state.enum';
import { ItemsMap } from 'src/app/interfaces/items-map.interface';
import * as _ from "lodash"
import { ItemType } from 'src/app/enums/item-type.enum';
import { ItemService } from 'src/app/services/item.service';
import { HeroService } from 'src/app/services/hero.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  hero: Hero
  gameState: GameState = 0
  floor: number

  constructor(private itemService: ItemService, private heroService: HeroService, private gameService: GameService) { }

  ngOnInit() {
    this.itemService.createItemMap()
    this.heroService.createHero()
    this.floor = this.gameService.floor
  }
  
  changeGameState(event) {
    this.gameState = event
  }
  
}
