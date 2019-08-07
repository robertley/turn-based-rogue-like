import { Injectable } from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import * as _ from 'lodash'
import { SpellMap } from '../interfaces/spell-map.interface';
import * as evetData from '../data/events.json'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  allEvents: SpellMap[] = []
  totalRarityNumber: number

  createEventMap() {
    evetData.default.forEach(item => {
      this.allEvents.push(item)
      this.totalRarityNumber += item.event.rarity
    })
    console.log("all events", this.allEvents)
  }

  getEvent(key) {
    return _.find(this.allEvents, { key: key }).event
  }
}