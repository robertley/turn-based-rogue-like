import {Injectable} from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  allItems: ItemsMap[] = [];
  
  createItemMap() {
    this.allItems.push(
      {
        key: 0,
        item: {
          name: "My First Sword",
          description: "You have something to poke things with. Congratulations.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 2,
          type: 0,
          rarity: -1
        }
      }
    )
    this.allItems.push(
      {
        key: 1,
        item: {
          name: "My First Staff",
          description: "It's not the best magic stick, but it's yours.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 5,
          type: 2,
          rarity: 1
        }
      }
    )
    this.allItems.push(
      {
        key: 2,
        item: {
          name: "Minor Potion of Healing",
          description: "Heals 5hp",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 5,
          type: 3,
          rarity: 1
        }
      }
    )
  }
  
  getItem(key) {
    return _.find(this.allItems, { key: key }).item
  }
}