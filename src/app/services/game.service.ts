import { Injectable } from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import { Hero } from '../interfaces/hero.interface';
import { ItemService } from './item.service';
import * as _ from "lodash"

@Injectable({
    providedIn: 'root'
})
export class GameService {

    floor: number = 0
    
    incrementFloor() {
        this.floor++
    }
}
