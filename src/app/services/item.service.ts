import {Injectable, OnInit} from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import * as _ from 'lodash'
import * as itemsData from '../data/items.json'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  // TODO items:
  // fortune cookie - see what type of monster is on the next floor (or event)
  // super fortun cookie - like above but you may re randomize the floor
  // luck potion
  // other stat potions
  allItems: ItemsMap[] = [];
  
  createItemMap() {
    // this.allItems.push(
      
    // )
    itemsData.default.forEach(item => {
      this.allItems.push(item)
    });
    
    
    
    
    
    // test items
    
    this.allItems.push(
      {
        key: 1000,
        item: {
          name: "test Sword 1",
          description: "You have something to poke things with. Congratulations.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 3,
          type: "melee",
          rarity: -1
        }
      }
    )
    this.allItems.push(
      {
        key: 1001,
        item: {
          name: "test Sword 2",
          description: "You have something to poke things with. Congratulations.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 4,
          type: "melee",
          rarity: -1
        }
      }
    )
    this.allItems.push(
      {
        key: 1002,
        item: {
          name: "test Sword 3",
          description: "You have something to poke things with. Congratulations.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 5,
          type: "melee",
          rarity: -1
        }
      }
    )
    this.allItems.push(
      {
        key: 1003,
        item: {
          name: "test Sword strong",
          description: "You have something to poke things with. Congratulations.",
          value: 2,
          // minPower: 2,
          // maxPower: 3,
          power: 20,
          type: "melee",
          rarity: -1
        }
      }
    )
  }
  
  getItem(key) {
    return _.find(this.allItems, { key: key }).item
  }
}