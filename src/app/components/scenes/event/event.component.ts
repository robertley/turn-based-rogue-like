import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  @Output() changeGameState: EventEmitter<number> = new EventEmitter()
  @Output() deadReset: EventEmitter<any> = new EventEmitter()
  
  event: Event

  constructor(private eventService: EventService) { }

  ngOnInit() {
    let eventNumber = Math.floor(Math.random() * this.eventService.allEvents.length)
    this.event = this.eventService.getEvent(eventNumber)
  }
  
  continue() {
    this.changeGameState.emit(1)
  }
  
  act(functionKey) {
    console.log(functionKey)
  }

}
