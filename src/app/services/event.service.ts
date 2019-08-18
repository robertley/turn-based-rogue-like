import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import * as eventData from '../data/events.json'
import { EventMap } from '../interfaces/event-map.interface';
import { Event } from '../interfaces/event.interface.js';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  allEvents: Map<number, Event> = new Map()
  totalRarityNumber: number

  createEventMap() {
    eventData.forEach(item => {
      this.allEvents.set(item.key, item.event)
      this.totalRarityNumber += item.event.rarity
    })
    console.log("all events", this.allEvents)
  }

  // getEvent(key) {
  //   return _.find(this.allEvents, { key: key }).event
  // }
}